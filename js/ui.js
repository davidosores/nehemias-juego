// Funciones de interfaz de usuario y efectos visuales

// Efectos de partículas para celebraciones
function createParticleEffect(x, y, color = '#FFD700') {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 6px;
        height: 6px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: particle-float 2s ease-out forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 2000);
}

// Agregar animación CSS para partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes particle-float {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
        }
    }
    
    .prayer-item {
        background: rgba(255,215,0,0.2);
        border: 2px solid #FFD700;
        border-radius: 8px;
        padding: 1rem;
        margin: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        user-select: none;
    }
    
    .prayer-item:hover {
        background: rgba(255,215,0,0.4);
        transform: translateY(-2px);
    }
    
    .prayer-item.dragging {
        background: rgba(255,215,0,0.6);
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(255,215,0,0.5);
    }
    
    .drop-zone {
        min-height: 60px;
        border: 2px dashed #8B4513;
        border-radius: 8px;
        margin: 0.5rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,0.5);
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .drop-zone:hover {
        border-color: #FFD700;
        background: rgba(255,215,0,0.1);
    }
    
    .drop-zone:not(:empty) {
        border-style: solid;
        border-color: #228B22;
        background: rgba(34,139,34,0.1);
    }
    
    .stealth-message, .construction-message {
        text-align: center;
        padding: 2rem;
        background: rgba(255,255,255,0.9);
        border-radius: 10px;
        margin: 1rem 0;
    }
    
    .memory-item {
        background: rgba(139,69,19,0.1);
        border: 1px solid #8B4513;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        margin: 0.25rem;
        display: inline-block;
        font-weight: bold;
    }
    
    .memory-option {
        background: #F4A460;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        margin: 0.25rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .memory-option:hover {
        background: #8B4513;
    }
    
    .memory-option.selected {
        background: #228B22;
        transform: scale(1.05);
    }
    
    .start-memory-btn {
        background: linear-gradient(45deg, #FFD700, #FFA500);
        color: #8B4513;
        border: none;
        border-radius: 8px;
        padding: 1rem 2rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        margin: 1rem 0;
    }
    
    .start-memory-btn:hover {
        background: linear-gradient(45deg, #FFA500, #FFD700);
        transform: translateY(-2px);
    }
    
    .place-guard-btn {
        background: linear-gradient(45deg, #8B4513, #A0522D);
        color: #FFFFFF;
        border: none;
        border-radius: 8px;
        padding: 1rem 2rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        margin: 1rem;
    }
    
    .place-guard-btn:hover {
        background: linear-gradient(45deg, #A0522D, #8B4513);
        transform: translateY(-2px);
    }
    
    .notification {
        animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .level-progress {
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        z-index: 999;
    }
    
    .ability-cooldown {
        position: relative;
        overflow: hidden;
    }
    
    .ability-cooldown::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        transform: translateY(100%);
        transition: transform 3s linear;
    }
    
    .ability-cooldown.active::after {
        transform: translateY(0);
    }
    
    .character-evolution-effect {
        animation: characterGlow 2s ease-in-out;
    }
    
    @keyframes characterGlow {
        0%, 100% {
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
        }
        50% {
            filter: drop-shadow(0 0 20px rgba(255,215,0,0.8));
        }
    }
    
    .level-complete-celebration {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255,215,0,0.1);
        pointer-events: none;
        z-index: 998;
        animation: celebrationPulse 1s ease-in-out;
    }
    
    @keyframes celebrationPulse {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
    
    .verse-highlight {
        background: linear-gradient(45deg, transparent 30%, rgba(255,215,0,0.3) 50%, transparent 70%);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }
    
    .question-feedback {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-weight: bold;
        font-size: 0.9rem;
        animation: feedbackPop 2s ease-out forwards;
        pointer-events: none;
        z-index: 100;
    }
    
    .question-feedback.correct {
        background: #228B22;
        color: white;
    }
    
    .question-feedback.incorrect {
        background: #DC143C;
        color: white;
    }
    
    @keyframes feedbackPop {
        0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
        }
        20% {
            opacity: 1;
            transform: translateX(-50%) translateY(-10px) scale(1.1);
        }
        80% {
            opacity: 1;
            transform: translateX(-50%) translateY(-10px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px) scale(0.9);
        }
    }
`;
document.head.appendChild(style);

// Funciones de efectos visuales
function showLevelProgress(current, total) {
    const existing = document.querySelector('.level-progress');
    if (existing) {
        existing.remove();
    }
    
    const progress = document.createElement('div');
    progress.className = 'level-progress';
    progress.textContent = `Nivel ${current} de ${total}`;
    document.body.appendChild(progress);
    
    setTimeout(() => {
        if (progress.parentNode) {
            progress.parentNode.removeChild(progress);
        }
    }, 3000);
}

function showCharacterEvolution() {
    const characterSprite = document.getElementById('character-sprite');
    if (characterSprite) {
        characterSprite.classList.add('character-evolution-effect');
        
        // Crear partículas alrededor del personaje
        const rect = characterSprite.getBoundingClientRect();
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createParticleEffect(
                    rect.left + Math.random() * rect.width,
                    rect.top + Math.random() * rect.height,
                    '#FFD700'
                );
            }, i * 100);
        }
        
        setTimeout(() => {
            characterSprite.classList.remove('character-evolution-effect');
        }, 2000);
    }
}

function showLevelCompleteCelebration() {
    const celebration = document.createElement('div');
    celebration.className = 'level-complete-celebration';
    document.body.appendChild(celebration);
    
    // Crear múltiples partículas
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createParticleEffect(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight,
                ['#FFD700', '#32CD32', '#FF6347'][Math.floor(Math.random() * 3)]
            );
        }, i * 50);
    }
    
    setTimeout(() => {
        if (celebration.parentNode) {
            celebration.parentNode.removeChild(celebration);
        }
    }, 1000);
}

function highlightVerse() {
    const verseText = document.getElementById('verse-text');
    if (verseText) {
        verseText.classList.add('verse-highlight');
        setTimeout(() => {
            verseText.classList.remove('verse-highlight');
        }, 2000);
    }
}

function showQuestionFeedback(element, isCorrect) {
    const feedback = document.createElement('div');
    feedback.className = `question-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';
    
    element.style.position = 'relative';
    element.appendChild(feedback);
    
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 2000);
}

function startAbilityCooldown(abilityButton, duration = 3000) {
    abilityButton.classList.add('ability-cooldown', 'active');
    abilityButton.disabled = true;
    
    setTimeout(() => {
        abilityButton.classList.remove('ability-cooldown', 'active');
        abilityButton.disabled = false;
    }, duration);
}

// Funciones de sonido (simuladas con efectos visuales)
function playSuccessSound() {
    // Crear efecto visual de éxito
    const successEffect = document.createElement('div');
    successEffect.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        color: #228B22;
        pointer-events: none;
        z-index: 1001;
        animation: successPop 1s ease-out forwards;
    `;
    successEffect.textContent = '✓';
    
    document.body.appendChild(successEffect);
    
    setTimeout(() => {
        if (successEffect.parentNode) {
            successEffect.parentNode.removeChild(successEffect);
        }
    }, 1000);
}

function playErrorSound() {
    // Crear efecto visual de error
    const errorEffect = document.createElement('div');
    errorEffect.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        color: #DC143C;
        pointer-events: none;
        z-index: 1001;
        animation: errorShake 0.5s ease-out forwards;
    `;
    errorEffect.textContent = '✗';
    
    document.body.appendChild(errorEffect);
    
    setTimeout(() => {
        if (errorEffect.parentNode) {
            errorEffect.parentNode.removeChild(errorEffect);
        }
    }, 500);
}

// Agregar animaciones adicionales
const additionalStyle = document.createElement('style');
additionalStyle.textContent = `
    @keyframes successPop {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    
    @keyframes errorShake {
        0%, 100% {
            transform: translate(-50%, -50%);
        }
        25% {
            transform: translate(-45%, -50%);
        }
        75% {
            transform: translate(-55%, -50%);
        }
    }
`;
document.head.appendChild(additionalStyle);

// Funciones de accesibilidad
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        if (announcement.parentNode) {
            announcement.parentNode.removeChild(announcement);
        }
    }, 1000);
}

// Funciones de utilidad para mejorar la experiencia del usuario
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

function focusElement(element) {
    element.focus();
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Exportar funciones para uso en otros archivos
window.UIEffects = {
    createParticleEffect,
    showLevelProgress,
    showCharacterEvolution,
    showLevelCompleteCelebration,
    highlightVerse,
    showQuestionFeedback,
    startAbilityCooldown,
    playSuccessSound,
    playErrorSound,
    announceToScreenReader,
    smoothScrollTo,
    focusElement
};

