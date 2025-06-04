// pronunciation_script.js
document.addEventListener('DOMContentLoaded', () => {
    // ---- DEBUGGING LOGS ----
    console.log("pronunciation_script.js: DOMContentLoaded fired.");
    if (typeof commonPhrases !== 'undefined') {
        console.log("pronunciation_script.js: commonPhrases IS defined. Length:", commonPhrases.length);
    } else {
        console.error("pronunciation_script.js: commonPhrases IS UNDEFINED when script starts!");
    }

    // --- DOM Element References ---
    const phraseListContainer = document.getElementById('phrase-list');
    console.log("pronunciation_script.js: phraseListContainer element:", phraseListContainer);
    const permissionStatusDiv = document.getElementById('permission-status');
    
    // --- State Variables ---
    let phrasesData = []; // Will hold phrase objects with their state
    let currentRecordingIndex = -1; // Index of the phrase being recorded
    let targetWordForRetry = null; // Specific word being retried

    // --- Speech Synthesis Setup (TTS) ---
    const synth = window.speechSynthesis;
    let voices = [];
    let currentUtterance = null;

    function populateVoiceList() {
        if (typeof speechSynthesis === 'undefined') return;
        voices = synth.getVoices().filter(voice => voice.lang.startsWith('en'));
    }
    populateVoiceList();
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    function speakText(text, callback) {
        if (!synth) {
            alert("Sorry, your browser does not support text-to-speech.");
            if (callback) callback();
            return;
        }
        if (currentUtterance && synth.speaking) {
            synth.cancel();
        }

        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.onerror = (event) => {
            console.error('SpeechSynthesisUtterance.onerror', event);
            if (callback) callback();
        };
        currentUtterance.onend = () => {
            if (callback) callback();
        };

        let englishVoice = voices.find(voice => voice.lang === 'en-US' && voice.name.toLowerCase().includes('google') && voice.default);
        if (!englishVoice) englishVoice = voices.find(voice => voice.lang === 'en-US' && voice.name.toLowerCase().includes('google'));
        if (!englishVoice) englishVoice = voices.find(voice => voice.lang.startsWith('en-') && voice.default);
        if (!englishVoice) englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
        
        if (englishVoice) currentUtterance.voice = englishVoice;
        synth.speak(currentUtterance);
    }

    // --- Speech Recognition Setup (Speech-to-Text) ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null;

    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
            const spokenText = event.results[0][0].transcript.trim();
            if (currentRecordingIndex !== -1) {
                processSpokenPhrase(currentRecordingIndex, spokenText, targetWordForRetry);
            }
            stopRecordingUIUpdate(currentRecordingIndex);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error', event.error);
            let message = "Speech recognition error: " + event.error;
            if (event.error === 'no-speech') {
                message = "No speech detected. Please try again.";
            } else if (event.error === 'audio-capture') {
                message = "Microphone problem. Ensure it's connected and allowed.";
            } else if (event.error === 'not-allowed') {
                message = "Microphone access denied. Please enable it in your browser settings.";
                permissionStatusDiv.textContent = message;
                permissionStatusDiv.style.display = 'block';
            }
            if (currentRecordingIndex !== -1) {
                updateStatusMessage(currentRecordingIndex, message, true);
                stopRecordingUIUpdate(currentRecordingIndex);
            }
        };

        recognition.onend = () => {
            if (currentRecordingIndex !== -1 && document.querySelector(`.phrase-item[data-index="${currentRecordingIndex}"] .record-btn.recording`)) {
                stopRecordingUIUpdate(currentRecordingIndex);
                updateStatusMessage(currentRecordingIndex, "Recording stopped.", false);
            }
        };
    } else {
        console.warn("Speech Recognition API not supported in this browser.");
    }

    // --- Phrase Rendering and Logic ---
    function renderPhrases() {
        console.log("RENDER_PHRASES: Function called."); // LOG 1
        if (!phraseListContainer) {
            console.error("RENDER_PHRASES: phraseListContainer is NULL. Cannot render.");
            return;
        }
        phraseListContainer.innerHTML = '';

        if (!commonPhrases || commonPhrases.length === 0) {
            console.warn("RENDER_PHRASES: commonPhrases is empty or undefined.");
            phraseListContainer.innerHTML = "<p>No phrases available to render.</p>";
            return;
        }

        commonPhrases.forEach((phrase, index) => {
            console.log(`RENDER_PHRASES: Processing phrase index ${index} - "${phrase}"`); // LOG 2

            phrasesData[index] = {
                originalText: phrase,
                words: phrase.toLowerCase().replace(/[.,!?;:]/g, '').split(/\s+/).filter(w => w).map(word => ({ text: word, status: 'pending' })),
                isFullyCorrect: false
            };
            console.log(`RENDER_PHRASES: phrasesData[${index}] initialized:`, JSON.stringify(phrasesData[index].words)); // LOG 3

            const phraseItem = document.createElement('div');
            phraseItem.classList.add('phrase-item');
            phraseItem.dataset.index = index;

            const phraseTextContainer = document.createElement('div');
            phraseTextContainer.classList.add('phrase-text-container');
            phraseTextContainer.id = `phrase-text-${index}`;
            
            const controls = document.createElement('div');
            controls.classList.add('controls');

            const listenBtn = document.createElement('button');
            listenBtn.classList.add('listen-btn');
            listenBtn.textContent = '🔊 Listen';
            listenBtn.onclick = () => {
                if(synth && synth.speaking) synth.cancel();
                speakText(phrasesData[index].originalText);
            }

            const recordBtn = document.createElement('button');
            recordBtn.classList.add('record-btn');
            recordBtn.id = `record-btn-${index}`;
            recordBtn.textContent = '🎤 Record Phrase';
            if (!recognition) {
                recordBtn.disabled = true;
                recordBtn.title = "Speech recognition not supported.";
            }
            recordBtn.onclick = () => toggleRecording(index, null);

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status-message');
            statusMessage.id = `status-msg-${index}`;

            controls.appendChild(listenBtn);
            controls.appendChild(recordBtn);
            
            phraseItem.appendChild(phraseTextContainer);
            phraseItem.appendChild(controls);
            phraseItem.appendChild(statusMessage);
            phraseListContainer.appendChild(phraseItem);

            console.log(`RENDER_PHRASES: Calling updatePhraseDisplay for index ${index}`); // LOG 4
            updatePhraseDisplay(index); // Call updatePhraseDisplay AFTER the element is in the DOM.

        });
        console.log("RENDER_PHRASES: Function finished."); // LOG 5
    }

    function updatePhraseDisplay(index) {
        console.log(`UPDATE_PHRASE_DISPLAY: Called for index ${index}.`); // LOG 6
        const phraseObj = phrasesData[index];
        const container = document.getElementById(`phrase-text-${index}`);
        
        if (!container) {
            console.error(`UPDATE_PHRASE_DISPLAY: Container NOT FOUND for phrase-text-${index}`);
            return;
        }
        if (!phraseObj || !phraseObj.words) {
            console.error(`UPDATE_PHRASE_DISPLAY: phraseObj or phraseObj.words is UNDEFINED for index ${index}`);
            return;
        }
        console.log(`UPDATE_PHRASE_DISPLAY: Container for index ${index} found. Number of words: ${phraseObj.words.length}`); // LOG 7

        container.innerHTML = '';
        
        const originalWords = phraseObj.originalText.split(/\s+/).filter(w => w);

        phraseObj.words.forEach((wordObj, wordIndex) => {
            const wordSpan = document.createElement('span');
            
            let displayWord = originalWords[wordIndex] || wordObj.text;
            wordSpan.textContent = displayWord;
            
            console.log(`UPDATE_PHRASE_DISPLAY: Index ${index}, WordIndex ${wordIndex}, Status: ${wordObj.status}, Text: "${displayWord}"`); // LOG 8

            wordSpan.classList.add('word');
            if (wordObj.status) {
                wordSpan.classList.add(wordObj.status);
            } else {
                wordSpan.classList.add('pending');
                console.warn(`UPDATE_PHRASE_DISPLAY: wordObj.status is undefined for Index ${index}, WordIndex ${wordIndex}. Defaulting to 'pending'.`);
            }
            
            if (wordObj.status === 'incorrect') {
                wordSpan.title = "Click to hear this word and try again";
                wordSpan.onclick = (e) => {
                    e.stopPropagation(); 
                    if(synth && synth.speaking) synth.cancel();
                    speakText(wordObj.text, () => { 
                        if (recognition && !document.querySelector('.record-btn.recording')) { 
                            toggleRecording(index, wordIndex);
                        }
                    });
                };
            } else {
                wordSpan.onclick = null; 
            }
            container.appendChild(wordSpan);
            container.appendChild(document.createTextNode(' ')); 
        });
        console.log(`UPDATE_PHRASE_DISPLAY: Finished updating display for index ${index}. Container innerHTML length: ${container.innerHTML.length}`); // LOG 9
    }

    function toggleRecording(index, specificWordIndex = null) {
        if (!recognition) {
            alert("Speech recognition is not supported in your browser.");
            return;
        }

        const recordBtn = document.getElementById(`record-btn-${index}`);
        const currentlyRecordingAnother = document.querySelector('.record-btn.recording');

        if (currentlyRecordingAnother && currentlyRecordingAnother !== recordBtn) {
            alert("Another recording is in progress. Please stop it first.");
            return;
        }
        
        if (recordBtn && recordBtn.classList.contains('recording')) {
            recognition.stop();
        } else {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {
                    permissionStatusDiv.style.display = 'none';
                    if(synth && synth.speaking) synth.cancel();

                    currentRecordingIndex = index;
                    targetWordForRetry = specificWordIndex !== null ? phrasesData[index].words[specificWordIndex].text : null;
                    
                    if (specificWordIndex !== null) {
                        phrasesData[index].words[specificWordIndex].status = 'pending';
                    } else {
                         phrasesData[index].words.forEach(w => w.status = 'pending');
                         phrasesData[index].isFullyCorrect = false;
                    }
                    updatePhraseDisplay(index);

                    try {
                        recognition.start();
                        if (recordBtn) {
                            recordBtn.classList.add('recording');
                            recordBtn.textContent = specificWordIndex !== null ? `🎤 Recording '${targetWordForRetry}'...` : '🎤 Recording Phrase...';
                        }
                        updateStatusMessage(index, specificWordIndex !== null ? `Speak the word: "${targetWordForRetry}"` : "Listening...", false);
                    } catch (e) {
                        console.error("Recognition start error:", e);
                        updateStatusMessage(index, "Could not start recording. Try again.", true);
                        currentRecordingIndex = -1;
                        targetWordForRetry = null;
                    }
                })
                .catch(err => {
                    console.error("Microphone permission error:", err);
                    permissionStatusDiv.textContent = "Microphone access denied or microphone not found. Please enable it in your browser settings and ensure a microphone is connected.";
                    permissionStatusDiv.style.display = 'block';
                    updateStatusMessage(index, "Microphone access denied.", true);
                });
        }
    }
    
    function stopRecordingUIUpdate(index) {
        const recordBtn = document.getElementById(`record-btn-${index}`);
        if (recordBtn) {
            recordBtn.classList.remove('recording');
            if (phrasesData[index] && phrasesData[index].isFullyCorrect) {
                recordBtn.textContent = '🎤 Phrase Correct!';
                recordBtn.disabled = true;
            } else {
                recordBtn.textContent = '🎤 Record Phrase';
                recordBtn.disabled = false;
            }
        }
    }

    function updateStatusMessage(index, message, isError = false) {
        const statusDiv = document.getElementById(`status-msg-${index}`);
        if (statusDiv) {
            statusDiv.textContent = message;
            statusDiv.style.color = isError ? '#dc3545' : '#6c757d';
        }
    }

    function simpleWordCompare(targetWords, spokenWords) {
        let results = [];
        let allCorrect = targetWords.length === spokenWords.length;

        for (let i = 0; i < targetWords.length; i++) {
            let status = 'pending';
            if (i < spokenWords.length) {
                const target = targetWords[i].text.toLowerCase().replace(/[.,!?;:]/g, '');
                const spoken = spokenWords[i].toLowerCase().replace(/[.,!?;:]/g, '');
                if (target === spoken) {
                    status = 'correct';
                } else {
                    status = 'incorrect';
                    allCorrect = false;
                }
            } else {
                status = 'incorrect'; 
                allCorrect = false;
            }
            results.push({ text: targetWords[i].text, status: status });
        }

        return { wordResults: results, allCorrect: allCorrect && (targetWords.length === spokenWords.length) };
    }

    function processSpokenPhrase(index, spokenText, retryingWordText = null) {
        const phraseObj = phrasesData[index];
        const targetWordsOriginal = phraseObj.words;
        const spokenWordsArray = spokenText.toLowerCase().replace(/[.,!?;:]/g, '').split(/\s+/).filter(w => w);

        updateStatusMessage(index, `You said: "${spokenText}"`, false);

        if (retryingWordText) {
            const wordIndexToRetry = targetWordsOriginal.findIndex(w => w.text.toLowerCase() === retryingWordText.toLowerCase());
            if (wordIndexToRetry !== -1) {
                const targetWordClean = targetWordsOriginal[wordIndexToRetry].text.toLowerCase().replace(/[.,!?;:]/g, '');
                const spokenWordClean = spokenWordsArray.length > 0 ? spokenWordsArray[0].toLowerCase().replace(/[.,!?;:]/g, '') : "";

                if (targetWordClean === spokenWordClean) {
                    phrasesData[index].words[wordIndexToRetry].status = 'correct';
                    updateStatusMessage(index, `Correct: "${targetWordsOriginal[wordIndexToRetry].text}"!`, false);
                } else {
                    phrasesData[index].words[wordIndexToRetry].status = 'incorrect';
                    updateStatusMessage(index, `Try again for: "${targetWordsOriginal[wordIndexToRetry].text}". You said: "${spokenText}"`, true);
                }
            }
        } else {
            const comparison = simpleWordCompare(targetWordsOriginal, spokenWordsArray);
            phrasesData[index].words = comparison.wordResults;
            phrasesData[index].isFullyCorrect = comparison.allCorrect;
            if (comparison.allCorrect) {
                 updateStatusMessage(index, "Excellent! Phrase pronounced correctly!", false);
            } else {
                 updateStatusMessage(index, "Some words need practice. Click red words to retry.", false);
            }
        }
        
        updatePhraseDisplay(index);
        stopRecordingUIUpdate(index);
        currentRecordingIndex = -1;
        targetWordForRetry = null;
    }

    // --- Initialization ---
    console.log("PRONUNCIATION_SCRIPT: Attempting to initialize quiz display."); // LOG 10
    if (phraseListContainer && typeof commonPhrases !== 'undefined' && commonPhrases.length > 0) {
        console.log("PRONUNCIATION_SCRIPT: commonPhrases valid, calling renderPhrases()."); // LOG 11
        renderPhrases();
    } else {
        console.error("PRONUNCIATION_SCRIPT: Initialization prerequisites not met."); // LOG 12
        if (phraseListContainer) {
            phraseListContainer.innerHTML = "<p>No phrases loaded or container not found properly. Check console.</p>";
        } else {
            console.error("PRONUNCIATION_SCRIPT: phraseListContainer is critically NULL at initialization.");
        }
    }
    
    // Check initial microphone permission 
    if (navigator.permissions && SpeechRecognition) {
        navigator.permissions.query({ name: 'microphone' }).then(permissionResult => {
            if (permissionResult.state === 'denied') {
                permissionStatusDiv.textContent = "Microphone access is denied. Please enable it in your browser settings for pronunciation practice.";
                permissionStatusDiv.style.display = 'block';
                document.querySelectorAll('.record-btn').forEach(btn => btn.disabled = true);
            } else if (permissionResult.state === 'prompt') {
                 permissionStatusDiv.textContent = "Microphone access will be requested when you click a record button.";
                 permissionStatusDiv.style.display = 'block';
            }
        });
    } else if (!SpeechRecognition) {
        permissionStatusDiv.textContent = "Speech recognition is not supported by your browser. Pronunciation practice will not be available.";
        permissionStatusDiv.style.display = 'block';
    }
});