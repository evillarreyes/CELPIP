document.addEventListener('DOMContentLoaded', () => {

    // ======================================================
    // CÓDIGO DEL QUIZ DE GRAMÁTICA (EXISTENTE - SIN CAMBIOS)
    // ======================================================
    const quizData = [
        // Tu array quizData completo con 100 preguntas va aquí.
        // Lo he colapsado aquí por brevedad. Asegúrate de que esté completo en tu archivo.
        { id: 1, text: "Water {CHOICE} at a temperature of 100°C.", options: ["is to boil", "is boiling", "boils"], correctAnswer: "boils", explanation: "For general truths or scientific facts, we use the simple present tense. 'Boils' is the correct simple present form for the third-person singular subject 'Water'." },
        // ... (el resto de tus 100 preguntas) ...
        { id: 100, text: "I suppose it's time we called it a day, {CHOICE}?", options: ["didn't we", "isn't it", "don't I"], correctAnswer: "isn't it", explanation: "When a sentence starts with 'I suppose', the tag usually refers to the following clause. Here, 'it's time' (it is time - positive, auxiliary 'is'). Tag: negative -> 'isn't it?'." }
    ];

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

    // Todas tus funciones del Quiz (populateVoiceList, renderQuiz, etc.) van aquí sin cambios.
    // Las he omitido por brevedad.

    if(quizArea) { 
        // Tu código para renderizar y manejar el quiz va aquí.
        // renderQuiz();
        // loadProgress();
        // etc.
    }


    // ======================================================================
    // CÓDIGO DEL ASISTENTE DE ESCRITURA PARA CELPIP (SECCIÓN CORREGIDA)
    // ======================================================================
    
    const suggestionsData = {
        complaint: {
            saludos: [{en: "Dear Sir or Madam,", es: "Estimado Señor o Señora,"}, {en: "To Whom It May Concern,", es: "A quien corresponda,"}],
            apertura: [{en: "I am writing to express my dissatisfaction with...", es: "Escribo para expresar mi descontento con..."}, {en: "I am writing to complain about a faulty product.", es: "Escribo para quejarme de un producto defectuoso."}],
            frasesUtiles: [{en: "The service did not meet my expectations.", es: "El servicio no cumplió mis expectativas."}, {en: "This has caused me significant inconvenience.", es: "Esto me ha causado un inconveniente significativo."}],
            despedida: [{en: "I look forward to your prompt response.", es: "Espero su pronta respuesta."}, {en: "Thank you for your attention to this matter.", es: "Gracias por su atención a este asunto."}],
            extra: {title: "Tono y Registro (Clave)", content: "<strong>Formal, directo pero educado.</strong> Evita el sarcasmo. Describe el problema claramente y propón una solución razonable."}
        },
        request: {
            saludos: [{en: "Dear [Contact Person],", es: "Estimado/a [Persona de contacto],"}, {en: "Hello,", es: "Hola,"}],
            apertura: [{en: "I am writing to request more information about...", es: "Escribo para solicitar más información sobre..."}, {en: "I would be grateful if you could provide me with...", es: "Le agradecería si pudiera proporcionarme..."}],
            frasesUtiles: [{en: "Could you please let me know the available dates?", es: "¿Podría por favor decirme las fechas disponibles?"}, {en: "I would also like to know if there is a discount.", es: "También me gustaría saber si hay algún descuento."}],
            despedida: [{en: "Thank you for your time and assistance.", es: "Gracias por su tiempo y ayuda."}],
            extra: {title: "Tono y Registro (Clave)", content: "<strong>Formal o semi-formal y educado.</strong> Sé claro y específico sobre la información que necesitas."}
        },
        // --- DATOS AÑADIDOS ---
        suggestion: {
            saludos: [{en: "Dear Team,", es: "Estimado equipo,"}, {en: "Hi everyone,", es: "Hola a todos,"}],
            apertura: [{en: "I am writing to suggest an improvement.", es: "Escribo para sugerir una mejora."}, {en: "I have an idea that I believe could benefit our community.", es: "Tengo una idea que creo podría beneficiar a nuestra comunidad."}],
            frasesUtiles: [{en: "Perhaps we could consider installing new software.", es: "Quizás podríamos considerar instalar un nuevo software."}, {en: "I believe this change would improve overall efficiency.", es: "Creo que este cambio mejoraría la eficiencia general."}],
            despedida: [{en: "I would be happy to discuss this further.", es: "Estaría encantado de discutir esto más a fondo."}, {en: "Let me know what you think.", es: "Hazme saber lo que piensas."}],
            extra: {title: "Tono y Registro (Clave)", content: "<strong>Constructivo y colaborativo.</strong> Enfócate en los beneficios de tu sugerencia en lugar de solo criticar la situación actual."}
        },
        advice: {
            saludos: [{en: "Hi [Friend's Name],", es: "Hola [Nombre del amigo/a],"}, {en: "Hey there,", es: "¡Hola!"}],
            apertura: [{en: "I just read your email and wanted to help.", es: "Acabo de leer tu correo y quería ayudar."}, {en: "That sounds like a tough situation.", es: "Suena como una situación difícil."}],
            frasesUtiles: [{en: "If I were in your shoes, I would talk to them.", es: "Si yo estuviera en tu lugar, hablaría con ellos."}, {en: "Have you considered taking a different approach?", es: "¿Has considerado adoptar un enfoque diferente?"}],
            despedida: [{en: "I hope this helps a little!", es: "¡Espero que esto ayude un poco!"}, {en: "Let me know how it goes.", es: "Cuéntame cómo te va."}],
            extra: {title: "Tono y Registro (Clave)", content: "<strong>Informal, empático y solidario.</strong> Estás hablando con un amigo. Usa un lenguaje amigable y muestra que te importa su situación."}
        },
        explanation: {
            saludos: [{en: "Dear [Name],", es: "Estimado/a [Nombre],"}],
            apertura: [{en: "I am writing to explain why I missed the deadline.", es: "Escribo para explicar por qué no cumplí con la fecha límite."}, {en: "This email is in regard to the recent incident, and I'd like to clarify.", es: "Este correo es en relación al incidente reciente, y me gustaría aclarar."}],
            frasesUtiles: [{en: "Unfortunately, due to unforeseen circumstances, I was unable to...", es: "Lamentablemente, debido a circunstancias imprevistas, no pude..."}, {en: "Please let me clarify the situation.", es: "Por favor, permítame aclarar la situación."}],
            despedida: [{en: "I hope this explanation is satisfactory.", es: "Espero que esta explicación sea satisfactoria."}, {en: "Thank you for your understanding.", es: "Gracias por su comprensión."}],
            extra: {title: "Tono y Registro (Clave)", content: "<strong>Claro, conciso y honesto.</strong> Ve al grano y no des excusas poco creíbles. El tono puede ser formal o informal según el destinatario."}
        },
        apology: {
            saludos: [{en: "Dear [Name],", es: "Estimado/a [Nombre],"}],
            apertura: [{en: "I am writing to sincerely apologize for my mistake.", es: "Escribo para disculparme sinceramente por mi error."}, {en: "Please accept my sincerest apologies for the delay.", es: "Por favor, acepte mis más sinceras disculpas por el retraso."}],
            frasesUtiles: [{en: "I take full responsibility for my actions.", es: "Asumo toda la responsabilidad por mis acciones."}, {en: "I assure you this will not happen again.", es: "Le aseguro que esto no volverá a ocurrir."}],
            despedida: [{en: "Once again, my apologies for the trouble.", es: "Una vez más, mis disculpas por las molestias."}],
            extra: {title: "Tono y Registro (Clave)", content: "<strong>Sincero y humilde.</strong> Admite tu error, explica brevemente por qué ocurrió (si es apropiado) y di qué harás para solucionarlo."}
        },
        congratulations: {
            saludos: [{en: "Dear [Name],", es: "Estimado/a [Nombre],"}, {en: "Hi [Name],", es: "Hola [Nombre],"}],
            apertura: [{en: "I was so thrilled to hear about your promotion!", es: "¡Me emocionó mucho saber de tu ascenso!"}, {en: "Congratulations on your recent achievement!", es: "¡Felicitaciones por tu reciente logro!"}],
            frasesUtiles: [{en: "This is fantastic news!", es: "¡Esta es una noticia fantástica!"}, {en: "I know how hard you've worked for this, and you truly deserve it.", es: "Sé lo duro que has trabajado por esto, y realmente te lo mereces."}],
            despedida: [{en: "All the best for the future!", es: "¡Todo lo mejor para el futuro!"}, {en: "Warmest congratulations once again.", es: "Mis más cálidas felicitaciones una vez más."}],
            extra: {title: "Tono y Registro (Clave)", content: "<strong>Entusiasta, cálido y genuino.</strong> Sé específico sobre por qué estás felicitando. Tu alegría y buenos deseos deben ser evidentes."}
        },
        invitation: {
            saludos: [{en: "Hi everyone,", es: "Hola a todos,"}, {en: "Dear friends,", es: "Queridos amigos,"}],
            apertura: [{en: "I'd like to invite you to my birthday party.", es: "Me gustaría invitarte a mi fiesta de cumpleaños."}, {en: "We're having a barbecue and would love for you to come!", es: "¡Vamos a hacer una parrillada y nos encantaría que vinieras!"}],
            frasesUtiles: [{en: "It will be held at my place on Saturday at 7 PM.", es: "Se llevará a cabo en mi casa el sábado a las 7 p. m."}, {en: "Please let me know if you can make it by Wednesday.", es: "Por favor, avísame si puedes venir antes del miércoles."}],
            despedida: [{en: "Hope to see you there!", es: "¡Espero verte allí!"}, {en: "Can't wait to celebrate with you!", es: "¡No puedo esperar para celebrar contigo!"}],
            extra: {title: "Tono y Registro (Clave)", content: "<strong>Amigable y acogedor.</strong> Proporciona toda la información clave: qué, cuándo, dónde y por qué. Incluye una fecha de RSVP (para confirmar asistencia)."}
        }
    };

    const titlesMap = {
        saludos: "Sugerencias de Saludos (Greetings)",
        apertura: "Frases para Iniciar el Email (Opening Lines)",
        transiciones: "Palabras de Transición (Transition Words)",
        frasesUtiles: "Frases Útiles para el Cuerpo del Email (Useful Phrases)",
        despedida: "Frases de Despedida (Closing Phrases)"
    };

    const emailTypeSelect = document.getElementById('email-type');
    const suggestionsContainer = document.getElementById('suggestions-container');
    const ttsWarning = document.getElementById('tts-support-warning');

    function speak(text) {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
    
    if (!('speechSynthesis' in window)) {
        if (ttsWarning) ttsWarning.style.display = 'block';
    }

    if (emailTypeSelect) {
        emailTypeSelect.addEventListener('change', function() {
            const selectedType = this.value;
            if (!selectedType || !suggestionsData[selectedType]) {
                suggestionsContainer.style.display = 'none';
                suggestionsContainer.innerHTML = '';
                return;
            }
    
            const data = suggestionsData[selectedType];
            let htmlContent = '';
    
            for (const key in data) {
                if (key !== 'extra' && data[key].length > 0) {
                    htmlContent += `<div class="suggestion-category"><h3>${titlesMap[key] || key}</h3><ul>`;
                    data[key].forEach(phrase => {
                        const wordsHtml = phrase.en.split(' ').map(word => `<span class="word" title="Escuchar '${word}'">${word}</span>`).join(' ');
                        htmlContent += `
                            <li>
                                <div class="phrase-content">
                                    <div class="phrase-en" data-full-phrase="${phrase.en}">${wordsHtml}</div>
                                    <div class="phrase-es">${phrase.es}</div>
                                </div>
                                <button class="speak-btn" title="Escuchar frase completa">🔊</button>
                            </li>`;
                    });
                    htmlContent += `</ul></div>`;
                }
            }
            
            if (data.extra) {
                htmlContent += `<div class="important-tip"><h3>${data.extra.title}</h3><p>${data.extra.content}</p></div>`;
            }
    
            suggestionsContainer.innerHTML = htmlContent;
            suggestionsContainer.style.display = 'block';
        });
    }

    if (suggestionsContainer) {
        suggestionsContainer.addEventListener('click', function(event) {
            const target = event.target;
            if (target.classList.contains('word')) {
                speak(target.textContent);
            } else if (target.classList.contains('speak-btn')) {
                const phraseContainer = target.closest('li').querySelector('.phrase-en');
                const fullPhrase = phraseContainer.dataset.fullPhrase;
                speak(fullPhrase);
            }
        });
    }

});