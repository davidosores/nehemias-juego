// Estado del juego
const gameState = {
    currentLevel: 1,
    selectedCharacter: null,
    playerPoints: 0,
    gameTime: 0,
    levelStartTime: 0,
    abilities: {
        oracion: { unlocked: false, uses: 0, maxUses: 3 },
        diplomacia: { unlocked: false },
        analisis: { unlocked: false },
        liderazgo: { unlocked: false },
        combate: { unlocked: false }
    },
    gameTimer: null
};

// Configuración de niveles y progresión
const levelConfig = {
    1: { 
        pointsRequired: 0, 
        unlocksAbility: 'oracion',
        characterSprite: {
            masculino: 'assets/personajes/nehemias_copero_masculino.png',
            femenino: 'assets/personajes/nehemias_copera_femenina.png'
        }
    },
    2: { 
        pointsRequired: 100, 
        unlocksAbility: 'diplomacia',
        characterSprite: {
            masculino: 'assets/personajes/nehemias_copero_masculino.png',
            femenino: 'assets/personajes/nehemias_copera_femenina.png'
        }
    },
    3: { 
        pointsRequired: 250, 
        unlocksAbility: 'analisis',
        characterSprite: {
            masculino: 'assets/personajes/nehemias_copero_masculino.png',
            femenino: 'assets/personajes/nehemias_copera_femenina.png'
        }
    },
    4: { 
        pointsRequired: 450, 
        unlocksAbility: 'liderazgo',
        characterSprite: {
            masculino: 'assets/personajes/nehemias_constructor_masculino.png',
            femenino: 'assets/personajes/nehemias_constructora_femenina.png'
        }
    },
    5: { 
        pointsRequired: 700, 
        unlocksAbility: 'combate',
        characterSprite: {
            masculino: 'assets/personajes/nehemias_constructor_masculino.png',
            femenino: 'assets/personajes/nehemias_constructora_femenina.png'
        }
    }
};

// Inicialización del juego
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    setupEventListeners();
    showScreen('start-screen');
}

function setupEventListeners() {
    // Selección de personaje
    document.querySelectorAll('.character-option').forEach(option => {
        option.addEventListener('click', function() {
            selectCharacter(this.dataset.character);
        });
    });

    // Botón de inicio
    document.getElementById('start-game-btn').addEventListener('click', startGame);

    // Botones de habilidades
    document.querySelectorAll('.ability-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            useAbility(this.dataset.ability);
        });
    });

    // Botones de resultados
    document.getElementById('next-level-btn').addEventListener('click', nextLevel);
    document.getElementById('replay-level-btn').addEventListener('click', replayLevel);
}

function selectCharacter(character) {
    gameState.selectedCharacter = character;
    
    // Actualizar UI
    document.querySelectorAll('.character-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[data-character="${character}"]`).classList.add('selected');
    
    // Habilitar botón de inicio
    document.getElementById('start-game-btn').disabled = false;
}

function startGame() {
    if (!gameState.selectedCharacter) return;
    
    // Inicializar estado del juego
    gameState.currentLevel = 1;
    gameState.playerPoints = 0;
    gameState.gameTime = 0;
    
    // Desbloquear habilidad inicial
    unlockAbility('oracion');
    
    // Mostrar pantalla de juego
    showScreen('game-screen');
    updateCharacterSprite();
    updateUI();
    startTimer();
    
    // Cargar primer nivel
    loadLevel(1);
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function updateCharacterSprite() {
    const config = levelConfig[gameState.currentLevel];
    if (config && config.characterSprite) {
        const sprite = config.characterSprite[gameState.selectedCharacter];
        document.getElementById('character-sprite').src = sprite;
    }
}

function updateUI() {
    // Actualizar información del nivel
    document.getElementById('current-level').textContent = `Nivel ${gameState.currentLevel}`;
    document.getElementById('player-points').textContent = gameState.playerPoints;
    
    // Actualizar habilidades
    updateAbilitiesUI();
}

function updateAbilitiesUI() {
    Object.keys(gameState.abilities).forEach(abilityKey => {
        const ability = gameState.abilities[abilityKey];
        const btn = document.getElementById(`${abilityKey.replace('analisis', 'analysis').replace('oracion', 'prayer').replace('liderazgo', 'leadership').replace('combate', 'combat').replace('diplomacia', 'diplomacy')}-btn`);
        
        if (btn) {
            btn.disabled = !ability.unlocked;
            btn.classList.toggle('available', ability.unlocked);
            
            // Actualizar usos para oración
            if (abilityKey === 'oracion' && ability.unlocked) {
                const usesSpan = btn.querySelector('.ability-uses');
                if (usesSpan) {
                    usesSpan.textContent = `(${ability.uses}/${ability.maxUses})`;
                }
            }
        }
    });
}

function unlockAbility(abilityKey) {
    if (gameState.abilities[abilityKey]) {
        gameState.abilities[abilityKey].unlocked = true;
        
        // Configurar usos para oración
        if (abilityKey === 'oracion') {
            gameState.abilities[abilityKey].uses = gameState.abilities[abilityKey].maxUses;
        }
        
        updateAbilitiesUI();
        
        // Mostrar notificación
        showNotification(`¡Nueva habilidad desbloqueada: ${getAbilityName(abilityKey)}!`);
    }
}

function getAbilityName(abilityKey) {
    const names = {
        oracion: 'Oración',
        diplomacia: 'Diplomacia',
        analisis: 'Análisis',
        liderazgo: 'Liderazgo',
        combate: 'Combate'
    };
    return names[abilityKey] || abilityKey;
}

function useAbility(abilityKey) {
    const ability = gameState.abilities[abilityKey];
    
    if (!ability || !ability.unlocked) return;
    
    // Verificar usos para oración
    if (abilityKey === 'oracion') {
        if (ability.uses <= 0) {
            showNotification('No tienes más usos de Oración disponibles.');
            return;
        }
        ability.uses--;
        updateAbilitiesUI();
    }
    
    // Ejecutar efecto de la habilidad
    executeAbilityEffect(abilityKey);
}

function executeAbilityEffect(abilityKey) {
    switch (abilityKey) {
        case 'oracion':
            showHint();
            break;
        case 'diplomacia':
            showNotification('Diplomacia activada: Opciones adicionales disponibles.');
            break;
        case 'analisis':
            highlightImportantElements();
            break;
        case 'liderazgo':
            showNotification('Liderazgo activado: Bonificación de velocidad.');
            break;
        case 'combate':
            showNotification('Combate activado: Preparado para la batalla.');
            break;
    }
}

function showHint() {
    const currentLevelData = levels[gameState.currentLevel];
    if (currentLevelData && currentLevelData.hint) {
        showNotification(`Pista: ${currentLevelData.hint}`);
    } else {
        showNotification('Confía en Dios y sigue adelante.');
    }
}

function highlightImportantElements() {
    // Resaltar elementos importantes en el nivel actual
    document.querySelectorAll('.word-blank:not(.filled)').forEach(blank => {
        blank.style.border = '3px solid #FFD700';
        blank.style.boxShadow = '0 0 10px rgba(255,215,0,0.5)';
        
        setTimeout(() => {
            blank.style.border = '';
            blank.style.boxShadow = '';
        }, 3000);
    });
}

function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255,215,0,0.95);
        color: #8B4513;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-weight: bold;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function startTimer() {
    gameState.levelStartTime = Date.now();
    gameState.gameTimer = setInterval(() => {
        gameState.gameTime = Math.floor((Date.now() - gameState.levelStartTime) / 1000);
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.gameTime / 60);
    const seconds = gameState.gameTime % 60;
    document.getElementById('game-timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function stopTimer() {
    if (gameState.gameTimer) {
        clearInterval(gameState.gameTimer);
        gameState.gameTimer = null;
    }
}

function addPoints(points) {
    gameState.playerPoints += points;
    updateUI();
    
    // Verificar si se desbloquea nueva habilidad
    const config = levelConfig[gameState.currentLevel + 1];
    if (config && gameState.playerPoints >= config.pointsRequired && config.unlocksAbility) {
        unlockAbility(config.unlocksAbility);
    }
}

function completeLevel() {
    stopTimer();
    
    // Calcular bonificaciones
    const timeBonus = calculateTimeBonus();
    const totalPoints = gameState.playerPoints + timeBonus;
    
    // Mostrar resultados
    document.getElementById('level-points').textContent = gameState.playerPoints;
    document.getElementById('level-time').textContent = document.getElementById('game-timer').textContent;
    document.getElementById('level-bonus').textContent = timeBonus;
    
    // Actualizar puntos totales
    gameState.playerPoints = totalPoints;
    
    showScreen('results-screen');
}

function calculateTimeBonus() {
    // Bonificación basada en tiempo (máximo 100 puntos)
    const optimalTime = 120; // 2 minutos
    if (gameState.gameTime <= optimalTime) {
        return Math.floor((optimalTime - gameState.gameTime) / optimalTime * 100);
    }
    return 0;
}

function nextLevel() {
    gameState.currentLevel++;
    
    if (gameState.currentLevel > 5) {
        // Juego completado
        showNotification('¡Felicidades! Has completado los primeros 5 niveles del juego.');
        showScreen('start-screen');
        return;
    }
    
    // Verificar si se desbloquea nueva habilidad
    const config = levelConfig[gameState.currentLevel];
    if (config && config.unlocksAbility) {
        unlockAbility(config.unlocksAbility);
    }
    
    showScreen('game-screen');
    updateCharacterSprite();
    updateUI();
    startTimer();
    loadLevel(gameState.currentLevel);
}

function replayLevel() {
    showScreen('game-screen');
    startTimer();
    loadLevel(gameState.currentLevel);
}

// Función para cargar nivel (se implementa en levels.js)
function loadLevel(levelNumber) {
    if (typeof loadLevelContent === 'function') {
        loadLevelContent(levelNumber);
    } else {
        console.error('loadLevelContent function not found');
    }
}

