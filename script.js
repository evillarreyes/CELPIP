document.addEventListener('DOMContentLoaded', () => {

    // ======================================================
    // MÓDULO 1: QUIZ DE GRAMÁTICA
    // ======================================================
    
    // Solo inicializar el quiz si sus elementos existen en la página
    const quizArea = document.getElementById('quiz-area');
    if (quizArea) {
        initializeGrammarQuiz();
    }

    function initializeGrammarQuiz() {
        const quizData = [
            // El array completo de 100 preguntas, tal como lo tenías
            { id: 1, text: "Water {CHOICE} at a temperature of 100°C.", options: ["is to boil", "is boiling", "boils"], correctAnswer: "boils", explanation: "For general truths or scientific facts, we use the simple present tense. 'Boils' is the correct simple present form for the third-person singular subject 'Water'." },
            { id: 2, text: "In some countries there {CHOICE} very hot all the time.", options: ["is", "is", "it is"], correctAnswer: "it is", explanation: "'It is' is used here as an impersonal subject to describe the weather or a general condition. 'There is' introduces the existence of something." },
            // ... (AQUÍ VAN LAS PREGUNTAS 3 a la 99) ...
            { id: 100, text: "I suppose it's time we called it a day, {CHOICE}?", options: ["didn't we", "isn't it", "don't I"], correctAnswer: "isn't it", explanation: "When a sentence starts with 'I suppose', the tag usually refers to the following clause. Here, 'it's time' (it is time - positive, auxiliary 'is'). Tag: negative -> 'isn't it?'." }
        ];

        const submitBtn = document.getElementById('submit-btn');
        const resultsArea = document.getElementById('results-area');
        const scoreSpan = document.getElementById('score');
        const totalQuestionsSpan = document.getElementById('total-questions');
        const feedbackP = document.getElementById('feedback');
        const progressList = document.getElementById('progress-list');
        const clearProgressBtn = document.getElementById('clear-progress-btn');
        let voices = [];

        function populateVoiceList() {
            if (typeof speechSynthesis === 'undefined') return;
            voices = window.speechSynthesis.getVoices().filter(voice => voice.lang.startsWith('en'));
        }
        
        populateVoiceList();
        if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateVoiceList;
        }

        function renderQuiz() {
            quizArea.innerHTML = '';
            totalQuestionsSpan.textContent = quizData.length;
            quizData.forEach((q) => {
                const questionBlock = document.createElement('div');
                questionBlock.classList.add('question-block');
                questionBlock.setAttribute('data-question-id', q.id);
                const selectElHTML = createSelectElement(q.options, q.id);
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
                if (!window.speechSynthesis) {
                    ttsBtn.disabled = true;
                    ttsBtn.title = "Speech synthesis not supported.";
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

        function createSelectElement(options, questionId) {
            let selectHTML = `<select id="q${questionId}-select" name="q${questionId}">`;
            selectHTML += `<option value="">--Choose--</option>`;
            options.forEach(opt => {
                const escapedOpt = escapeHtml(opt);
                selectHTML += `<option value="${escapedOpt}">${escapedOpt}</option>`;
            });
            selectHTML += `</select>`;
            return selectHTML;
        }

        function escapeHtml(unsafe) {
            if (typeof unsafe !== 'string') return '';
            return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        }
        
        function toggleExplanation(questionId) {
            const explanationDiv = document.getElementById(`explanation-${questionId}`);
            const question = quizData.find(q => q.id === questionId);
            const selectedAnswerElement = document.getElementById(`q${questionId}-select`);
            const selectedAnswer = selectedAnswerElement ? selectedAnswerElement.value : "";
            if (!question) return;
            if (explanationDiv.style.display === 'none' || explanationDiv.innerHTML === '') {
                let explanationText = `<strong>Explanation:</strong> ${question.explanation}<br>`;
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
                explanationDiv.innerHTML = explanationText;
                explanationDiv.style.display = 'block';
            } else {
                explanationDiv.style.display = 'none';
                explanationDiv.innerHTML = '';
            }
        }

        function speakCorrectSentence(questionId) {
            const question = quizData.find(q => q.id === questionId);
            if (question) {
                let fullSentenceText = question.text.replace('{CHOICE}', question.correctAnswer);
                speak(fullSentenceText);
            }
        }

        submitBtn.addEventListener('click', () => {
            let score = 0;
            if (window.speechSynthesis && window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
            }
            quizData.forEach(q => {
                const selectElement = document.getElementById(`q${q.id}-select`);
                if (selectElement && selectElement.value === q.correctAnswer) {
                    score++;
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
            const attempts = JSON.parse(localStorage.getItem('englishTestProgress')) || [];
            const now = new Date();
            attempts.push({
                date: now.toLocaleDateString() + " " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                score: currentScore,
                total: total
            });
            localStorage.setItem('englishTestProgress', JSON.stringify(attempts));
        }

        function loadProgress() {
            const attempts = JSON.parse(localStorage.getItem('englishTestProgress')) || [];
            progressList.innerHTML = '';
            if (attempts.length === 0) {
                progressList.innerHTML = '<li>No past attempts recorded.</li>';
                return;
            }
            attempts.slice().reverse().forEach(attempt => {
                const li = document.createElement('li');
                li.textContent = `${attempt.date}: Scored ${attempt.score} / ${attempt.total}`;
                progressList.appendChild(li);
            });
        }
        
        clearProgressBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to clear all progress history? This cannot be undone.")) {
                localStorage.removeItem('englishTestProgress');
                loadProgress();
            }
        });

        // Initial setup for the quiz
        renderQuiz();
        loadProgress();
        resultsArea.style.display = 'none';
    }


    // ======================================================
    // MÓDULO 2: ASISTENTES DE ESCRITURA (TASK 1 Y 2)
    // ======================================================

    const ttsWarning = document.getElementById('tts-support-warning');
    if (!('speechSynthesis' in window)) {
        if (ttsWarning) ttsWarning.style.display = 'block';
    }

    function speak(text) {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
    
    // --- DATOS PARA TASK 1: EMAIL ---
    const emailSuggestionsData = {
        complaint: {saludos: [{en: "Dear Sir or Madam,", es: "Estimado Señor o Señora,"}], apertura: [{en: "I am writing to express my dissatisfaction with...", es: "Escribo para expresar mi descontento con..."}], frasesUtiles: [{en: "The service did not meet my expectations.", es: "El servicio no cumplió mis expectativas."}], despedida: [{en: "I look forward to your prompt response.", es: "Espero su pronta respuesta."}], extra: {title: "Tono y Registro", content: "<strong>Formal, directo pero educado.</strong>"}},
        concern: {saludos: [{en: "Dear [Manager's Name],", es: "Estimado/a [Nombre del Gerente],"}], apertura: [{en: "I am writing to express my concern about...", es: "Escribo para expresar mi preocupación sobre..."}], frasesUtiles: [{en: "This is concerning because it affects...", es: "Esto es preocupante porque afecta..."}], despedida: [{en: "Thank you for taking my concerns into consideration.", es: "Gracias por tomar mis preocupaciones en consideración."}], extra: {title: "Tono y Registro", content: "<strong>Serio, respetuoso y constructivo.</strong>"}},
        request: {saludos: [{en: "Dear [Contact Person],", es: "Estimado/a [Persona de contacto],"}], apertura: [{en: "I am writing to request more information about...", es: "Escribo para solicitar más información sobre..."}], frasesUtiles: [{en: "Could you please let me know...?", es: "¿Podría por favor decirme...?"}], despedida: [{en: "Thank you for your time and assistance.", es: "Gracias por su tiempo y ayuda."}], extra: {title: "Tono y Registro", content: "<strong>Formal o semi-formal y educado.</strong>"}},
        suggestion: {saludos: [{en: "Dear Team,", es: "Estimado equipo,"}], apertura: [{en: "I am writing to suggest an improvement.", es: "Escribo para sugerir una mejora."}], frasesUtiles: [{en: "Perhaps we could consider...", es: "Quizás podríamos considerar..."}], despedida: [{en: "I would be happy to discuss this further.", es: "Estaría encantado de discutir esto más a fondo."}], extra: {title: "Tono y Registro", content: "<strong>Constructivo y colaborativo.</strong>"}},
        advice: {saludos: [{en: "Hi [Friend's Name],", es: "Hola [Nombre del amigo/a],"}], apertura: [{en: "I just read your email and wanted to help.", es: "Acabo de leer tu correo y quería ayudar."}], frasesUtiles: [{en: "If I were in your shoes, I would...", es: "Si yo estuviera en tu lugar, yo..."}], despedida: [{en: "I hope this helps!", es: "¡Espero que esto ayude!"}], extra: {title: "Tono y Registro", content: "<strong>Informal, empático y solidario.</strong>"}},
        explanation: {saludos: [{en: "Dear [Name],", es: "Estimado/a [Nombre],"}], apertura: [{en: "I am writing to explain why...", es: "Escribo para explicar por qué..."}], frasesUtiles: [{en: "Unfortunately, due to unforeseen circumstances...", es: "Lamentablemente, debido a circunstancias imprevistas..."}], despedida: [{en: "I hope this explanation is satisfactory.", es: "Espero que esta explicación sea satisfactoria."}], extra: {title: "Tono y Registro", content: "<strong>Claro, conciso y honesto.</strong>"}},
        apology: {saludos: [{en: "Dear [Name],", es: "Estimado/a [Nombre],"}], apertura: [{en: "I am writing to sincerely apologize for...", es: "Escribo para disculparme sinceramente por..."}], frasesUtiles: [{en: "I take full responsibility for my actions.", es: "Asumo toda la responsabilidad por mis acciones."}], despedida: [{en: "Once again, my apologies for the trouble.", es: "Una vez más, mis disculpas por las molestias."}], extra: {title: "Tono y Registro", content: "<strong>Sincero y humilde.</strong>"}},
        congratulations: {saludos: [{en: "Dear [Name],", es: "Estimado/a [Nombre],"}], apertura: [{en: "I was so thrilled to hear about...", es: "¡Me emocionó mucho saber de..."}], frasesUtiles: [{en: "You truly deserve this success.", es: "Realmente mereces este éxito."}], despedida: [{en: "Warmest congratulations once again.", es: "Mis más cálidas felicitaciones una vez más."}], extra: {title: "Tono y Registro", content: "<strong>Entusiasta, cálido y genuino.</strong>"}},
        invitation: {saludos: [{en: "Hi everyone,", es: "Hola a todos,"}], apertura: [{en: "I'd like to invite you to...", es: "Me gustaría invitarte a..."}], frasesUtiles: [{en: "Please let me know if you can make it by...", es: "Por favor, avísame si puedes venir antes de..."}], despedida: [{en: "Hope to see you there!", es: "¡Espero verte allí!"}], extra: {title: "Tono y Registro", content: "<strong>Amigable y acogedor.</strong>"}}
    };

    const emailTitlesMap = {
        saludos: "Saludos (Greetings)",
        apertura: "Inicio (Opening Lines)",
        frasesUtiles: "Frases Útiles (Useful Phrases)",
        despedida: "Despedida (Closing Phrases)"
    };
    
    // --- DATOS PARA TASK 2: SURVEY ---
    const surveySuggestionsData = {
        choice: {title: "1. Expresar tu Elección", phrases: [{en: "After careful consideration, I would definitely choose...", es: "Después de considerarlo detenidamente, definitivamente elegiría..."}, {en: "In my opinion, the best option is clearly...", es: "En mi opinión, la mejor opción es claramente..."}, {en: "I am confident that the most suitable choice would be...", es: "Estoy seguro de que la opción más adecuada sería..."}, {en: "Without a doubt, I would opt for...", es: "Sin duda alguna, optaría por..."}], extra: {title: "Consejo Clave", content: "Sé directo y decidido. Comienza declarando tu elección claramente."}},
        reasoning: {title: "2. Dar Razones", phrases: [{en: "The primary reason for my choice is that...", es: "La razón principal de mi elección es que..."}, {en: "Firstly, one of the main advantages is...", es: "En primer lugar, una de las principales ventajas es..."}, {en: "Another significant factor is its impact on...", es: "Otro factor significativo es su impacto en..."}, {en: "Furthermore, it is important to consider that...", es: "Además, es importante considerar que..."}], extra: {title: "Consejo Clave", content: "Usa palabras de transición (Firstly, Secondly) para guiar al lector."}},
        examples: {title: "3. Dar Ejemplos", phrases: [{en: "For instance, in my community...", es: "Por ejemplo, en mi comunidad..."}, {en: "A perfect example of this can be seen when...", es: "Un ejemplo perfecto de esto se puede ver cuando..."}, {en: "To illustrate this point, we can look at...", es: "Para ilustrar este punto, podemos ver..."}, {en: "Specifically, this would allow people to...", es: "Específicamente, esto permitiría a la gente..."}], extra: {title: "Consejo Clave", content: "Los ejemplos hacen que tus razones sean creíbles. Sé específico."}},
        conclusion: {title: "4. Concluir", phrases: [{en: "In conclusion, based on these reasons, my choice is clear.", es: "En conclusión, basándome en estas razones, mi elección es clara."}, {en: "For these reasons, I strongly believe that... is the superior option.", es: "Por estas razones, creo firmemente que... es la opción superior."}, {en: "Therefore, it is evident that... offers more significant benefits.", es: "Por lo tanto, es evidente que... ofrece beneficios más significativos."}], extra: {title: "Consejo Clave", content: "Resume tu postura. No introduzcas nuevas ideas."}}
    };

    function populateEmailSuggestions(container, selectedValue, dataObject) {
        if (!selectedValue || !dataObject[selectedValue]) {
            container.style.display = 'none';
            container.innerHTML = '';
            return;
        }
        const data = dataObject[selectedValue];
        let htmlContent = '';
        for (const key in data) {
            if (key !== 'extra') {
                htmlContent += `<div class="suggestion-category"><h3>${emailTitlesMap[key] || key}</h3><ul>`;
                data[key].forEach(phrase => {
                    const wordsHtml = phrase.en.split(' ').map(word => `<span class="word" title="Escuchar '${word}'">${word}</span>`).join(' ');
                    htmlContent += `<li><div class="phrase-content"><div class="phrase-en" data-full-phrase="${phrase.en}">${wordsHtml}</div><div class="phrase-es">${phrase.es}</div></div><button class="speak-btn" title="Escuchar frase completa">🔊</button></li>`;
                });
                htmlContent += `</ul></div>`;
            }
        }
        if (data.extra) {
            htmlContent += `<div class="important-tip"><h3>${data.extra.title}</h3><p>${data.extra.content}</p></div>`;
        }
        container.innerHTML = htmlContent;
        container.style.display = 'block';
    }

    function populateSurveySuggestions(container, selectedValue, dataObject) {
        if (!selectedValue || !dataObject[selectedValue]) {
            container.style.display = 'none';
            container.innerHTML = '';
            return;
        }
        const data = dataObject[selectedValue];
        let htmlContent = `<div class="suggestion-category"><h3>${data.title}</h3><ul>`;
        data.phrases.forEach(phrase => {
            const wordsHtml = phrase.en.split(' ').map(word => `<span class="word" title="Escuchar '${word}'">${word}</span>`).join(' ');
            htmlContent += `<li><div class="phrase-content"><div class="phrase-en" data-full-phrase="${phrase.en}">${wordsHtml}</div><div class="phrase-es">${phrase.es}</div></div><button class="speak-btn" title="Escuchar frase completa">🔊</button></li>`;
        });
        htmlContent += `</ul></div>`;
        if (data.extra) {
            htmlContent += `<div class="important-tip"><h3>${data.extra.title}</h3><p>${data.extra.content}</p></div>`;
        }
        container.innerHTML = htmlContent;
        container.style.display = 'block';
    }

    // Lógica para el Asistente de Email (Task 1)
    const emailTypeSelect = document.getElementById('email-type');
    const emailSuggestionsContainer = document.getElementById('email-suggestions-container');
    if (emailTypeSelect) {
        emailTypeSelect.addEventListener('change', () => {
            populateEmailSuggestions(emailSuggestionsContainer, emailTypeSelect.value, emailSuggestionsData);
        });
    }

    // Lógica para el Asistente de Encuesta (Task 2)
    const surveyPartSelect = document.getElementById('survey-part');
    const surveySuggestionsContainer = document.getElementById('survey-suggestions-container');
    if (surveyPartSelect) {
        surveyPartSelect.addEventListener('change', () => {
            populateSurveySuggestions(surveySuggestionsContainer, surveyPartSelect.value, surveySuggestionsData);
        });
    }
    
    // Event listener general para los clics en palabras y botones de audio en todo el documento
    document.querySelector('.container').addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('word')) {
            speak(target.textContent);
        } else if (target.classList.contains('speak-btn')) {
            const phraseContainer = target.closest('li').querySelector('.phrase-en');
            if(phraseContainer) {
                const fullPhrase = phraseContainer.dataset.fullPhrase;
                speak(fullPhrase);
            }
        }
    });
});