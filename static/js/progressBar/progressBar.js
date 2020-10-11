
class ProgressBar {
    constructor(input_id, barTarget) {
        this.input_id = input_id;
        this.barHeadPos = 0;
        this.barCycle = 0;
        this.barTarget = barTarget;
        this.progressComponent = createProgressComponent(input_id);
    }
    incrementBarHeadPos() {
        this.barHeadPos = this.barHeadPos + 1;
        return this.barHeadPos;
    }
    incrementBarCycle() {
        this.barCycle = this.barCycle + 1;
        return this.barCycle;
    }
}

function createProgressParent(input_id) {
    const div = document.createElement('div');
    div.id = input_id;
    div.className = "progress-parent";
    return div;
}


function createProgressComponent(input_id) {
    const parent = createProgressParent(input_id);
    parent.innerHTML = `
    <div class="progressBar-level-text">
        <div class="expandingBarText">
            Level: <span id="${input_id}-level" class="ml-1">0</span>
        </div>
    </div>
    <div class="expanding-bar-wrapper">
        <div id="${input_id}-expandingBar" class="expanding-bar"></div>
    </div>
    <div id="${input_id}-expandingBarText" class="expandingBarText">None</div>
    `
    return parent;
}

function ChangeProgressBar(pBar) {
    const expandingBarText = document.getElementById(`${pBar.input_id}-expandingBarText`);
    const expandingBar = document.getElementById(`${pBar.input_id}-expandingBar`);

    const barTarget = pBar.barTarget;
    let calcultedWidth = calcRelative(pBar.incrementBarHeadPos(), barTarget);
    if (calcultedWidth > 100) {
        LevelUp(pBar);
        calcultedWidth = 0;
    }
    expandingBarText.textContent = `${calcultedWidth}%`;
    expandingBar.style.width = `${calcultedWidth}%`;
}

function launchTrophyAnimation() {
    const trophy = document.getElementById('trophy');
    trophy.classList.add('descendAscend');
    setTimeout(() => {
        trophy.classList.remove('descendAscend');
        // unCoverTheWholeScreen();
    }, 5500);

    // coverTheWholeScreen();
}


function LevelUp(pBar) {
    launchTrophyAnimation();
    const input_id = pBar.input_id;
    const barCycle = pBar.incrementBarCycle();
    pBar.barHeadPos = 0;
    const cycleTextSpan = document.getElementById(`${input_id}-level`);
    cycleTextSpan.textContent = barCycle;

    const expandingBar = document.getElementById(`${input_id}-expandingBar`);
    expandingBar.style.width = `0`;
}











