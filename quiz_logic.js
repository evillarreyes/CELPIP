document.addEventListener('DOMContentLoaded', () => {
    // quizData is now expected to be defined globally by a preceding script
    // e.g., by placement_test_data.js or collocations_data.js

    if (typeof quizData === 'undefined' || !Array.isArray(quizData)) {
        console.error("Quiz data not found or is not an array. Make sure to load a data script (e.g., placement_test_data.js) before quiz_logic.js and define 'quizData' array in it.");
        // Optionally, display an error message on the page
        const quizArea = document.getElementById('quiz-area');
        if(quizArea) quizArea.innerHTML = "<p style='color:red; text-align:center;'>Error: Quiz data is missing. Please check console.</p>";
        return; // Stop execution if data is missing
    }
    
    const quizId = document.title.replace(/\s+/g, '-').toLowerCase(); // Unique ID for localStorage based on page title

    const quizArea = document.getElementById('quiz-area');
    const submitBtn = document.getElementById('submit-btn');
    const resultsArea = document.getElementById('results-area');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const feedbackP = document.getElementById('feedback');
    const progressList = document.getElementById('progress-list');
    const clearProgressBtn = document.getElementById('clear-progress-btn');

    const synth = window.speechSynthesis;
    let voices = [];

    function populateVoiceList() {
        if (typeof speechSynthesis === 'undefined') return;
        voices = synth.getVoices().filter(voice => voice.lang.startsWith('en'));
    }
    
    populateVoiceList();
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    function renderQuiz() {
        // ... (The rest of renderQuiz function from your previous script.js)
        // Make sure it uses the global quizData
        quizArea.innerHTML = '';
        if (!quizData || quizData.length === 0) {
            quizArea.innerHTML = "<p>No questions loaded for this quiz.</p>";
            totalQuestionsSpan.textContent = 0;
            return;
        }
        totalQuestionsSpan.textContent = quizData.length;


        quizData.forEach((q) => {
            const questionBlock = document.createElement('div');
            questionBlock.classList.add('question-block');
            questionBlock.setAttribute('data-question-id', q.id);

            const selectElHTML = createSelectElement(q.options, q.id, q.multiple); // Pass multiple flag
            const questionTextHTML = q.text.replace('{CHOICE}', selectElHTML);
            
            const p = document.createElement('p');
            p.innerHTML = `${q.id}) ${questionTextHTML}`; 

            const explainBtn = document.createElement('button');
            explainBtn.classList.add('explain-btn');
            explainBtn.textContent = 'Explain';
            explainBtn.type = 'button';

            const ttsBtn = document.createElement('button');
            ttsBtn.classList.add('tts-btn');
            ttsBtn.textContent = '🔊 Hear';
            ttsBtn.type = 'button';
            if (!synth) {
                ttsBtn.disabled = true;
                ttsBtn.title = "Speech synthesis not supported in your browser.";
            }

            const explanationDiv = document.createElement('div');
            explanationDiv.classList.add('explanation');
            explanationDiv.setAttribute('id', `explanation-${q.id}`);
            explanationDiv.style.display = 'none';
            
            questionBlock.appendChild(p);
            
            const controlsDiv = document.createElement('div');
            controlsDiv.classList.add('question-controls');
            controlsDiv.appendChild(explainBtn);
            controlsDiv.appendChild(ttsBtn);
            questionBlock.appendChild(controlsDiv);

            questionBlock.appendChild(explanationDiv);
            
            quizArea.appendChild(questionBlock);

            explainBtn.addEventListener('click', () => toggleExplanation(q.id));
            ttsBtn.addEventListener('click', () => speakCorrectSentence(q.id));
        });
    }

    function createSelectElement(options, questionId, isMultiple = false) {
        const selectId = `q${questionId}-select`;
        let selectHTML = `<select id="${selectId}" name="q${questionId}" ${isMultiple ? 'multiple size="4"' : ''}>`;
        if (!isMultiple) {
            selectHTML += `<option value="">--Choose--</option>`;
        }
        options.forEach(opt => {
            const escapedOpt = escapeHtml(opt);
            selectHTML += `<option value="${escapedOpt}">${escapedOpt}</option>`;
        });
        selectHTML += `</select>`;
        if (isMultiple) {
            selectHTML += `<br><small>(Select all that apply by holding Ctrl/Cmd and clicking)</small>`;
        }
        return selectHTML;
    }


    function escapeHtml(unsafe) {
        // ... (same as before)
        if (typeof unsafe !== 'string') {
            return ''; 
        }
        return unsafe
             .replace(/&/g, "&")
             .replace(/</g, "<")
             .replace(/>/g, ">")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "'");
    }
    
    function toggleExplanation(questionId) {
        // ... (same as before, uses global quizData)
        const explanationDiv = document.getElementById(`explanation-${questionId}`);
        const question = quizData.find(q => q.id === questionId);
        
        let selectedAnswer;
        if (question.multiple) {
            const selectElement = document.getElementById(`q${questionId}-select`);
            selectedAnswer = Array.from(selectElement.selectedOptions).map(option => option.value);
        } else {
            const selectElement = document.getElementById(`q${questionId}-select`);
            selectedAnswer = selectElement ? selectElement.value : "";
        }


        if (!question) return;

        if (explanationDiv.style.display === 'none' || explanationDiv.innerHTML === '') {
            let explanationText = `<strong>Explanation:</strong> ${question.explanation}<br>`;
            
            if (question.multiple) {
                if (selectedAnswer.length > 0) {
                    const isCorrect = Array.isArray(question.correctAnswer) &&
                                      selectedAnswer.length === question.correctAnswer.length &&
                                      selectedAnswer.every(val => question.correctAnswer.includes(val));
                    if (isCorrect) {
                        explanationText += `Your answer '<strong>${escapeHtml(selectedAnswer.join(', '))}</strong>' is correct.`;
                        explanationDiv.className = 'explanation correct';
                    } else {
                        explanationText += `Your answer '<strong>${escapeHtml(selectedAnswer.join(', '))}</strong>' is incorrect. Correct: '<strong>${escapeHtml(question.correctAnswer.join(', '))}</strong>'.`;
                        explanationDiv.className = 'explanation incorrect';
                    }
                } else {
                    explanationText += `Please select an answer. Correct: '<strong>${escapeHtml(question.correctAnswer.join(', '))}</strong>'.`;
                    explanationDiv.className = 'explanation';
                }
            } else { // Single answer
                if (selectedAnswer) {
                    if (selectedAnswer === question.correctAnswer) {
                        explanationText += `Your answer '<strong>${escapeHtml(selectedAnswer)}</strong>' is correct.`;
                        explanationDiv.className = 'explanation correct';
                    } else {
                        explanationText += `Your answer '<strong>${escapeHtml(selectedAnswer)}</strong>' is incorrect. The correct answer is '<strong>${escapeHtml(question.correctAnswer)}</strong>'.`;
                        explanationDiv.className = 'explanation incorrect';
                    }
                } else {
                    explanationText += `Please select an answer to see if it's correct. The correct answer is '<strong>${escapeHtml(question.correctAnswer)}</strong>'.`;
                    explanationDiv.className = 'explanation';
                }
            }
            explanationDiv.innerHTML = explanationText;
            explanationDiv.style.display = 'block';
        } else {
            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';
        }
    }

    function speakCorrectSentence(questionId) {
        // ... (same as before, uses global quizData)
        // For multiple answers, you might decide to read only the question or the question with all correct answers joined.
        if (!synth) {
            alert("Sorry, your browser does not support text-to-speech.");
            return;
        }
        if (synth.speaking) {
            synth.cancel();
        }

        const question = quizData.find(q => q.id === questionId);
        if (!question) return;
        
        let textToSpeak;
        if (question.multiple && Array.isArray(question.correctAnswer)) {
            textToSpeak = question.text.replace('{CHOICE}', question.correctAnswer.join(', and '));
        } else {
            textToSpeak = question.text.replace('{CHOICE}', question.correctAnswer);
        }
        
        textToSpeak = textToSpeak.replace(/^\d+\)\s*/, '').trim();
        
        const originalTextEnd = question.text.trim().slice(-1);
        if (['?', '.', '!'].includes(originalTextEnd) && !textToSpeak.endsWith(originalTextEnd)) {
            textToSpeak += originalTextEnd;
        }

        const utterThis = new SpeechSynthesisUtterance(textToSpeak);
        
        utterThis.onerror = function (event) {
            console.error('SpeechSynthesisUtterance.onerror', event);
        };
        
        let englishVoice = voices.find(voice => voice.lang === 'en-US' && voice.name.toLowerCase().includes('google') && voice.default);
        if (!englishVoice) englishVoice = voices.find(voice => voice.lang === 'en-US' && voice.name.toLowerCase().includes('google'));
        if (!englishVoice) englishVoice = voices.find(voice => voice.lang.startsWith('en-') && voice.default);
        if (!englishVoice) englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
        
        if (englishVoice) {
            utterThis.voice = englishVoice;
        }
        synth.speak(utterThis);
    }

    submitBtn.addEventListener('click', () => {
        // ... (Modified to handle multiple choice questions too)
        let score = 0;
        if (synth && synth.speaking) {
            synth.cancel();
        }
        quizData.forEach(q => {
            const selectElement = document.getElementById(`q${q.id}-select`);
            if (selectElement) {
                if (q.multiple) { // Handle multiple-choice scoring
                    const selectedOptions = Array.from(selectElement.selectedOptions).map(opt => opt.value);
                    // Strict check: all correct answers must be selected, and no incorrect ones.
                    if (Array.isArray(q.correctAnswer) &&
                        selectedOptions.length === q.correctAnswer.length &&
                        selectedOptions.every(val => q.correctAnswer.includes(val))) {
                        score++;
                    }
                } else { // Handle single-choice scoring
                    if (selectElement.value === q.correctAnswer) {
                        score++;
                    }
                }
            }

            const explanationDiv = document.getElementById(`explanation-${q.id}`);
            if (explanationDiv) {
                explanationDiv.style.display = 'none';
                explanationDiv.innerHTML = '';
            }
        });

        scoreSpan.textContent = score;
        totalQuestionsSpan.textContent = quizData.length;
        feedbackP.textContent = `You got ${score} out of ${quizData.length} questions correct.`;
        resultsArea.style.display = 'block';

        saveProgress(score, quizData.length);
        loadProgress();
        resultsArea.scrollIntoView({ behavior: 'smooth' });
    });

    function saveProgress(currentScore, total) {
        const attempts = JSON.parse(localStorage.getItem(`englishTestProgress_${quizId}`)) || []; // Use quizId
        const now = new Date();
        attempts.push({
            date: now.toLocaleDateString() + " " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            score: currentScore,
            total: total
        });
        localStorage.setItem(`englishTestProgress_${quizId}`, JSON.stringify(attempts)); // Use quizId
    }

    function loadProgress() {
        const attempts = JSON.parse(localStorage.getItem(`englishTestProgress_${quizId}`)) || []; // Use quizId
        progressList.innerHTML = '';
        if (attempts.length === 0) {
            progressList.innerHTML = '<li>No past attempts recorded for this section.</li>';
            return;
        }
        attempts.slice().reverse().forEach(attempt => {
            const li = document.createElement('li');
            li.textContent = `${attempt.date}: Scored ${attempt.score} / ${attempt.total}`;
            progressList.appendChild(li);
        });
    }
    
    clearProgressBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to clear progress history for this section? This cannot be undone.")) {
            localStorage.removeItem(`englishTestProgress_${quizId}`); // Use quizId
            loadProgress();
        }
    });

    // Initial setup
    if (quizArea && submitBtn && resultsArea && scoreSpan && totalQuestionsSpan && feedbackP && progressList && clearProgressBtn) {
        renderQuiz();
        loadProgress();
        resultsArea.style.display = 'none';
    } else {
        console.error("One or more essential HTML elements for the quiz are missing.");
    }
});