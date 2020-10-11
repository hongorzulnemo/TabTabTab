

// console.log(ALL_WORDNODES)
// console.log(ALL_CATEGORIES)
// console.log(ALL_CATEGORY_WORDS)










// Progrees Bar
// ChangeProgressBar(pBar1)
const progressBarContainer = document.getElementById('progressBarContainer');
const pBar1 = new ProgressBar('word-swimming1', 5);
progressBarContainer.appendChild(pBar1.progressComponent);




function updateProgress() {
    ChangeProgressBar(pBar1);
}











const TOTAL_NUMBER_OF_NODES = 4;
const TOTAL_NUMBER_OF_DIFFERENT = 1;
const selectedWordNode = randomlyChooseOneElement(ALL_WORDNODES);

let DIAGRAM_DATA = generateGraphData(selectedWordNode);
let props = {
    data: DIAGRAM_DATA,
    padFactor: 20,
}
function updateWordMap() {
    // const diagram_input = ;
    word_map({...props, data: DIAGRAM_DATA});

    updateProgress();
}
updateWordMap()
updateWordMap()









let wordTracker_data = copy(ALL_WORDNODES);
let wordTrackerProps = {
    data: wordTracker_data,
    padFactor: 2,
}
function updateWordTracker() {
    word_tracker({...wordTrackerProps, data: wordTracker_data});
}

updateWordTracker()
updateWordTracker()
