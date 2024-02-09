let score = 0;
let unlockedObjects = [];

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

let clickCounts = {};

function unlockObject(object, x) {
    clickCounts[object] = (clickCounts[object] || 0) + x;
    if (clickCounts[object] >= 3 && !unlockedObjects.includes(object)) {
        unlockedObjects.push(object);
        document.getElementById(object).classList.add('unlocked');
        alert(`Congratulations! You've unlocked the ${object}!`);
    }
}

function checkUnlockables() {
    if (score >= 10) {
        unlockObject('planet', 4);
    }
    if (score >= 20) {
        unlockObject('rocket', 4);
    }
    if (score >= 30) {
        unlockObject('alien', 4);
    }

    const spaceObjects = Array.from(document.querySelectorAll('.space-object'));
    const filteredSpaceObjects = spaceObjects.filter(object => object.id !== 'moon');

    if (areAllObjectsUnlocked(filteredSpaceObjects)) {
        unlockObject('moon', 4);
        document.getElementById('moon').classList.remove('hidden');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const spaceObjects = document.querySelectorAll('.space-object');
    
    spaceObjects.forEach(function(object) {
        object.addEventListener('click', function() {
            let currentScale = parseFloat(getComputedStyle(object).getPropertyValue('transform').split(',')[3]);
            if (isNaN(currentScale)) {
                currentScale = 1;
            }
            if (object.classList.contains('unlocked')) {
                object.style.transform = `scale(${currentScale + 0.2})`;
            }
        });
    });
});

function areAllObjectsUnlocked(spaceObjects) {
    for (let i = 0; i < spaceObjects.length; i++) {
        if (!spaceObjects[i].classList.contains('unlocked')) {
            return false; // If any object is not unlocked, return false
        }
    }
    return true; // If all objects are unlocked, return true
}
