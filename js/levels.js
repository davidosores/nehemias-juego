// Datos de los niveles
const levels = {
    1: {
        title: "El Dolor de Nehemías y la Oración Ferviente",
        description: "Nehemías se entera de la terrible condición de Jerusalén y siente la carga de actuar.",
        hint: "Recuerda que Nehemías era copero del rey y vivía en Susa.",
        verseCompletion: {
            text: "Y me dijeron: El _____, los que quedaron de la _____, allí en la provincia, están en gran mal y afrenta, y el _____ de Jerusalén derribado, y sus _____ quemadas a fuego.",
            blanks: ["remanente", "cautividad", "muro", "puertas"],
            options: ["remanente", "pueblo", "cautividad", "esclavitud", "muro", "templo", "puertas", "casas", "ciudad", "tierra"]
        },
        questions: [
            {
                question: "¿Cuál era el trabajo de Nehemías en la corte persa?",
                options: ["Copero del rey", "Escriba", "Soldado", "Comerciante"],
                correct: 0
            },
            {
                question: "¿Qué sintió Nehemías al escuchar las noticias de Jerusalén?",
                options: ["Alegría", "Indiferencia", "Dolor y preocupación", "Enojo"],
                correct: 2
            }
        ],
        miniChallenge: {
            type: "prayer_order",
            description: "Ordena las partes de la oración de Nehemías:",
            items: ["Confesión de pecados", "Alabanza a Dios", "Petición por el pueblo", "Recordar las promesas de Dios"],
            correctOrder: [1, 0, 3, 2]
        }
    },
    2: {
        title: "La Petición al Rey Artajerjes",
        description: "Nehemías debe obtener el permiso y los recursos del rey para viajar a Jerusalén.",
        hint: "La diplomacia y el momento oportuno son clave para hablar con el rey.",
        verseCompletion: {
            text: "Y dije al rey: Si le place al rey, y tu siervo ha hallado _____ delante de ti, envíame a Judá, a la ciudad de los _____ de mis padres, y la _____.",
            blanks: ["gracia", "sepulcros", "reedificaré"],
            options: ["gracia", "favor", "sepulcros", "huesos", "reedificaré", "construiré", "misericordia", "bondad", "ciudad", "tierra"]
        },
        questions: [
            {
                question: "¿Qué pidió Nehemías al rey Artajerjes?",
                options: ["Dinero para el templo", "Permiso para ir a Jerusalén", "Un ejército", "Quedarse en Persia"],
                correct: 1
            },
            {
                question: "¿Qué actitud mostró Nehemías al hablar con el rey?",
                options: ["Arrogancia", "Miedo", "Respeto y sabiduría", "Indiferencia"],
                correct: 2
            }
        ],
        miniChallenge: {
            type: "stealth_navigation",
            description: "Navega por la corte real para encontrar el momento oportuno de hablar con el rey. Evita a los guardias y escucha las conversaciones.",
            objective: "Llegar al trono sin ser detectado"
        }
    },
    3: {
        title: "Inspección Nocturna de los Muros",
        description: "Nehemías inspecciona en secreto los muros de Jerusalén para evaluar el daño.",
        hint: "La inspección nocturna permite evaluar sin llamar la atención de los enemigos.",
        verseCompletion: {
            text: "Y salí de noche por la puerta del Valle hacia la fuente del _____, y a la puerta del _____, y observé los muros de Jerusalén que estaban _____.",
            blanks: ["Dragón", "Muladar", "derribados"],
            options: ["Dragón", "León", "Muladar", "Basura", "derribados", "destruidos", "quebrados", "caídos", "rotos", "dañados"]
        },
        questions: [
            {
                question: "¿Por qué Nehemías inspeccionó los muros de noche?",
                options: ["Para evitar el calor", "Para mantener el secreto", "Porque tenía miedo", "Era más fácil ver"],
                correct: 1
            },
            {
                question: "¿Qué encontró Nehemías en su inspección?",
                options: ["Muros perfectos", "Muros parcialmente dañados", "Muros completamente destruidos", "No había muros"],
                correct: 2
            }
        ],
        miniChallenge: {
            type: "memory_puzzle",
            description: "Memoriza la ubicación de las brechas en el muro y los tipos de daño para planificar la reconstrucción.",
            items: ["Puerta del Valle - Destruida", "Fuente del Dragón - Bloqueada", "Puerta del Muladar - Quemada", "Muro Este - Derribado"],
            timeLimit: 30
        }
    },
    4: {
        title: "La Reconstrucción Comienza: ¡Manos a la Obra!",
        description: "Nehemías organiza a los trabajadores y comienza la reconstrucción del muro.",
        hint: "Cada grupo tiene habilidades específicas. Los sacerdotes, nobles y artesanos deben trabajar juntos.",
        verseCompletion: {
            text: "Entonces se levantó el sumo sacerdote _____ con sus hermanos los sacerdotes, y _____ la puerta de las Ovejas; la _____ y levantaron sus puertas.",
            blanks: ["Eliasib", "edificaron", "santificaron"],
            options: ["Eliasib", "Esdras", "edificaron", "construyeron", "santificaron", "bendijeron", "consagraron", "dedicaron", "repararon", "levantaron"]
        },
        questions: [
            {
                question: "¿Quién comenzó la reconstrucción del muro?",
                options: ["Los nobles", "El sumo sacerdote Eliasib", "Los artesanos", "Los soldados"],
                correct: 1
            },
            {
                question: "¿Qué puerta reconstruyeron primero?",
                options: ["Puerta del Valle", "Puerta de las Ovejas", "Puerta del Muladar", "Puerta del Agua"],
                correct: 1
            }
        ],
        miniChallenge: {
            type: "construction_tetris",
            description: "Organiza las piedras correctamente para reparar una sección del muro. Encaja las piezas para formar una estructura sólida.",
            objective: "Completar la sección del muro sin espacios vacíos"
        }
    },
    5: {
        title: "La Oposición de Sanbalat y Tobías",
        description: "Nehemías debe defender la reconstrucción de los ataques y burlas de los enemigos.",
        hint: "La oración y la vigilancia constante son necesarias para defenderse de los enemigos.",
        verseCompletion: {
            text: "Pero cuando lo oyeron _____ horonita, y _____ el siervo amonita, les disgustó en extremo que viniese alguno para procurar el bien de los hijos de Israel.",
            blanks: ["Sanbalat", "Tobías"],
            options: ["Sanbalat", "Sambalat", "Tobías", "Tobiah", "Gesem", "Gasmu", "Nehemías", "Esdras", "Artajerjes", "Darío"]
        },
        questions: [
            {
                question: "¿Quiénes fueron los principales enemigos de la reconstrucción?",
                options: ["Esdras y los sacerdotes", "Sanbalat y Tobías", "El rey Artajerjes", "Los trabajadores"],
                correct: 1
            },
            {
                question: "¿Cómo respondió Nehemías a las amenazas?",
                options: ["Huyó de Jerusalén", "Oró y puso guardias", "Atacó primero", "Negoció con los enemigos"],
                correct: 1
            }
        ],
        miniChallenge: {
            type: "tower_defense",
            description: "Defiende la construcción del muro colocando guardias en puntos estratégicos. Los trabajadores deben continuar construyendo mientras tú los proteges.",
            objective: "Repeler todos los ataques sin detener la construcción"
        }
    }
};

// Función principal para cargar contenido del nivel
function loadLevelContent(levelNumber) {
    const level = levels[levelNumber];
    if (!level) {
        console.error(`Level ${levelNumber} not found`);
        return;
    }

    // Actualizar título del nivel
    document.getElementById('level-title').textContent = level.title;

    // Crear contenido del nivel
    const levelContent = document.getElementById('level-content');
    levelContent.innerHTML = createLevelHTML(level);

    // Configurar event listeners para el nivel
    setupLevelEventListeners(level);
}

function createLevelHTML(level) {
    return `
        <div class="level-intro">
            <h2>${level.title}</h2>
            <p>${level.description}</p>
        </div>

        <div class="challenge-section">
            <h3>Completa el Versículo</h3>
            <div class="verse-completion">
                <div class="verse-text" id="verse-text">
                    ${createVerseWithBlanks(level.verseCompletion)}
                </div>
                <div class="word-options" id="word-options">
                    ${createWordOptions(level.verseCompletion.options)}
                </div>
            </div>
        </div>

        <div class="challenge-section">
            <h3>Preguntas de Comprensión</h3>
            <div id="questions-container">
                ${createQuestionsHTML(level.questions)}
            </div>
        </div>

        <div class="challenge-section">
            <h3>Mini-Reto</h3>
            <div class="mini-challenge" id="mini-challenge">
                ${createMiniChallengeHTML(level.miniChallenge)}
            </div>
        </div>

        <button class="challenge-complete-btn" id="complete-level-btn" disabled>
            Completar Nivel
        </button>
    `;
}

function createVerseWithBlanks(verseData) {
    let text = verseData.text;
    verseData.blanks.forEach((blank, index) => {
        text = text.replace('_____', `<span class="word-blank" data-blank-index="${index}" data-correct-word="${blank}">_____</span>`);
    });
    return text;
}

function createWordOptions(options) {
    return options.map(option => 
        `<button class="word-option" data-word="${option}">${option}</button>`
    ).join('');
}

function createQuestionsHTML(questions) {
    return questions.map((question, index) => `
        <div class="question-section" data-question-index="${index}">
            <div class="question-text">${question.question}</div>
            <div class="answer-options">
                ${question.options.map((option, optionIndex) => 
                    `<div class="answer-option" data-question="${index}" data-answer="${optionIndex}">
                        ${option}
                    </div>`
                ).join('')}
            </div>
        </div>
    `).join('');
}

function createMiniChallengeHTML(challenge) {
    switch (challenge.type) {
        case 'prayer_order':
            return `
                <p>${challenge.description}</p>
                <div class="prayer-items" id="prayer-items">
                    ${challenge.items.map((item, index) => 
                        `<div class="prayer-item" data-item-index="${index}" draggable="true">
                            ${item}
                        </div>`
                    ).join('')}
                </div>
                <div class="prayer-order" id="prayer-order">
                    <div class="drop-zone" data-position="0">1.</div>
                    <div class="drop-zone" data-position="1">2.</div>
                    <div class="drop-zone" data-position="2">3.</div>
                    <div class="drop-zone" data-position="3">4.</div>
                </div>
            `;
        case 'stealth_navigation':
            return `
                <p>${challenge.description}</p>
                <div class="stealth-game" id="stealth-game">
                    <div class="game-grid">
                        <!-- Grid se genera dinámicamente -->
                    </div>
                    <p>Objetivo: ${challenge.objective}</p>
                </div>
            `;
        case 'memory_puzzle':
            return `
                <p>${challenge.description}</p>
                <div class="memory-items" id="memory-items">
                    ${challenge.items.map(item => 
                        `<div class="memory-item">${item}</div>`
                    ).join('')}
                </div>
                <button class="start-memory-btn" id="start-memory-btn">Comenzar Memorización</button>
                <div class="memory-test" id="memory-test" style="display: none;">
                    <p>¿Qué elementos recuerdas?</p>
                    <div class="memory-options"></div>
                </div>
            `;
        case 'construction_tetris':
            return `
                <p>${challenge.description}</p>
                <div class="construction-game" id="construction-game">
                    <div class="construction-grid"></div>
                    <div class="construction-pieces"></div>
                    <p>Objetivo: ${challenge.objective}</p>
                </div>
            `;
        case 'tower_defense':
            return `
                <p>${challenge.description}</p>
                <div class="tower-defense-game" id="tower-defense-game">
                    <div class="defense-grid"></div>
                    <div class="guard-options">
                        <button class="place-guard-btn">Colocar Guardia</button>
                    </div>
                    <p>Objetivo: ${challenge.objective}</p>
                </div>
            `;
        default:
            return `<p>Mini-reto: ${challenge.description}</p>`;
    }
}

function setupLevelEventListeners(level) {
    // Event listeners para completar versículos
    setupVerseCompletion();
    
    // Event listeners para preguntas
    setupQuestions(level.questions);
    
    // Event listeners para mini-retos
    setupMiniChallenge(level.miniChallenge);
    
    // Event listener para completar nivel
    document.getElementById('complete-level-btn').addEventListener('click', () => {
        if (checkLevelCompletion()) {
            const points = calculateLevelPoints();
            addPoints(points);
            completeLevel();
        }
    });
}

function setupVerseCompletion() {
    const wordOptions = document.querySelectorAll('.word-option');
    const wordBlanks = document.querySelectorAll('.word-blank');
    
    wordOptions.forEach(option => {
        option.addEventListener('click', function() {
            if (this.classList.contains('used')) return;
            
            const word = this.dataset.word;
            const emptyBlank = document.querySelector(".word-blank:not(.filled)");
            
            if (emptyBlank) {
                emptyBlank.textContent = word;
                emptyBlank.classList.add("filled");
                emptyBlank.dataset.selectedWord = word;
                this.classList.add("used");
                
                // Verificar si es correcto
                if (word === emptyBlank.dataset.correctWord) {
                    emptyBlank.classList.add("correct");
                } else {
                    emptyBlank.classList.add("incorrect");
                }
                
                // Deshabilitar la opción de palabra seleccionada para evitar re-uso
                this.disabled = true;
                
                checkLevelCompletion();
            } 
        });
    });
    
    // Permitir hacer clic en blanks para limpiarlos
    wordBlanks.forEach(blank => {
        blank.addEventListener("click", function() {
            if (this.classList.contains("filled")) {
                const word = this.dataset.selectedWord;
                this.textContent = "_____";
                this.classList.remove("filled", "correct", "incorrect");
                delete this.dataset.selectedWord;
                
                // Rehabilitar la opción de palabra
                const wordOption = document.querySelector(`[data-word="${word}"]`);
                if (wordOption) {
                    wordOption.classList.remove("used");
                    wordOption.disabled = false; // Habilitar el botón de la palabra
                }
                
                checkLevelCompletion();
            }
        });
    });
}

function setupQuestions(questions) {
    document.querySelectorAll('.answer-option').forEach(option => {
        option.addEventListener('click', function() {
            const questionIndex = parseInt(this.dataset.question);
            const answerIndex = parseInt(this.dataset.answer);
            
            // Limpiar selecciones previas de esta pregunta
            document.querySelectorAll(`[data-question="${questionIndex}"]`).forEach(opt => {
                opt.classList.remove('selected', 'correct', 'incorrect');
            });
            
            // Marcar como seleccionado
            this.classList.add('selected');
            
            // Verificar si es correcto
            if (answerIndex === questions[questionIndex].correct) {
                this.classList.add('correct');
            } else {
                this.classList.add('incorrect');
                // Mostrar la respuesta correcta
                const correctOption = document.querySelector(`[data-question="${questionIndex}"][data-answer="${questions[questionIndex].correct}"]`);
                if (correctOption) {
                    correctOption.classList.add('correct');
                }
            }
            
            checkLevelCompletion();
        });
    });
}

function setupMiniChallenge(challenge) {
    switch (challenge.type) {
        case 'prayer_order':
            setupPrayerOrderChallenge(challenge);
            break;
        case 'stealth_navigation':
            setupStealthChallenge(challenge);
            break;
        case 'memory_puzzle':
            setupMemoryChallenge(challenge);
            break;
        case 'construction_tetris':
            setupConstructionChallenge(challenge);
            break;
        case 'tower_defense':
            setupTowerDefenseChallenge(challenge);
            break;
    }
}

function setupPrayerOrderChallenge(challenge) {
    // Implementación simplificada del drag and drop
    const items = document.querySelectorAll('.prayer-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    let draggedItem = null;
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            if (draggedItem) {
                draggedItem.classList.remove('dragging');
            }
            draggedItem = this;
            this.classList.add('dragging');
        });
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener('click', function() {
            if (draggedItem && !this.hasChildNodes()) {
                this.appendChild(draggedItem);
                draggedItem.classList.remove('dragging');
                draggedItem = null;
                checkLevelCompletion();
            }
        });
    });
}

function setupStealthChallenge(challenge) {
    // Implementación simplificada del juego de sigilo
    const gameGrid = document.querySelector('.game-grid');
    gameGrid.innerHTML = `
        <div class="stealth-message">
            <p>Usa las teclas de flecha para moverte por la corte.</p>
            <p>Evita a los guardias (🛡️) y llega al trono (👑).</p>
            <button id="start-stealth">Comenzar</button>
        </div>
    `;
    
    document.getElementById('start-stealth').addEventListener('click', function() {
        this.parentElement.innerHTML = '<p>¡Sigilo completado! Has llegado al trono sin ser detectado.</p>';
        checkLevelCompletion();
    });
}

function setupMemoryChallenge(challenge) {
    const startBtn = document.getElementById('start-memory-btn');
    const memoryItems = document.getElementById('memory-items');
    const memoryTest = document.getElementById('memory-test');
    
    startBtn.addEventListener('click', function() {
        // Mostrar elementos por tiempo limitado
        setTimeout(() => {
            memoryItems.style.display = 'none';
            memoryTest.style.display = 'block';
            
            // Crear opciones de memoria
            const options = memoryTest.querySelector('.memory-options');
            challenge.items.forEach(item => {
                const btn = document.createElement('button');
                btn.textContent = item;
                btn.className = 'memory-option';
                btn.addEventListener('click', function() {
                    this.classList.toggle('selected');
                    checkLevelCompletion();
                });
                options.appendChild(btn);
            });
        }, challenge.timeLimit * 1000);
    });
}

function setupConstructionChallenge(challenge) {
    const gameDiv = document.getElementById('construction-game');
    gameDiv.innerHTML = `
        <div class="construction-message">
            <p>Arrastra las piezas para construir el muro.</p>
            <button id="complete-construction">Completar Construcción</button>
        </div>
    `;
    
    document.getElementById('complete-construction').addEventListener('click', function() {
        this.parentElement.innerHTML = '<p>¡Construcción completada! El muro está sólido y bien construido.</p>';
        checkLevelCompletion();
    });
}

function setupTowerDefenseChallenge(challenge) {
    const gameDiv = document.getElementById('tower-defense-game');
    const placeGuardBtn = gameDiv.querySelector('.place-guard-btn');
    let guardsPlaced = 0;
    
    placeGuardBtn.addEventListener('click', function() {
        guardsPlaced++;
        if (guardsPlaced >= 3) {
            gameDiv.innerHTML = '<p>¡Defensa exitosa! Has repelido todos los ataques y la construcción continúa.</p>';
            checkLevelCompletion();
        } else {
            this.textContent = `Colocar Guardia (${guardsPlaced}/3)`;
        }
    });
}

function checkLevelCompletion() {
    const verseComplete = checkVerseCompletion();
    const questionsComplete = checkQuestionsCompletion();
    const miniChallengeComplete = checkMiniChallengeCompletion();
    
    const isComplete = verseComplete && questionsComplete && miniChallengeComplete;
    
    document.getElementById('complete-level-btn').disabled = !isComplete;
    
    return isComplete;
}

function checkVerseCompletion() {
    const blanks = document.querySelectorAll('.word-blank');
    return Array.from(blanks).every(blank => 
        blank.classList.contains('filled') && blank.classList.contains('correct')
    );
}

function checkQuestionsCompletion() {
    const questions = document.querySelectorAll('.question-section');
    return Array.from(questions).every(question => 
        question.querySelector('.answer-option.correct.selected')
    );
}

function checkMiniChallengeCompletion() {
    // Verificar si el mini-reto está completado
    const miniChallenge = document.getElementById('mini-challenge');
    return miniChallenge.textContent.includes('completado') || 
           miniChallenge.textContent.includes('exitosa') ||
           miniChallenge.textContent.includes('Completar') ||
           miniChallenge.querySelector('.drop-zone:nth-child(4)').hasChildNodes();
}

function calculateLevelPoints() {
    let points = 0;
    
    // Puntos por completar versículo
    const correctBlanks = document.querySelectorAll('.word-blank.correct').length;
    points += correctBlanks * 25;
    
    // Puntos por responder preguntas
    const correctAnswers = document.querySelectorAll('.answer-option.correct.selected').length;
    points += correctAnswers * 50;
    
    // Puntos por completar mini-reto
    if (checkMiniChallengeCompletion()) {
        points += 100;
    }
    
    return points;
}

