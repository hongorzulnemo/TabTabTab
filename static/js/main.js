

// console.log(ALL_WORDNODES)
// console.log(ALL_CATEGORIES)
// console.log(ALL_CATEGORY_WORDS)

const TOTAL_NUMBER_OF_NODES = 9;
const TOTAL_NUMBER_OF_DIFFERENT = 1;
const selectedWordNode = randomlyChooseOneElement(ALL_WORDNODES);

let diagram_data = generateGraphData(selectedWordNode);
let props = {
    data: diagram_data,
    padFactor: 20,
    svgLength: 700
}
function updateWordMap() {
    word_map({...props, data: diagram_data});
}
updateWordMap()
updateWordMap()









let wordTracker_data = copy(ALL_WORDNODES);
let wordTrackerProps = {
    data: wordTracker_data,
    padFactor: 2,
    svgLength: 400
}
function updateWordTracker() {
    word_tracker({...wordTrackerProps, data: wordTracker_data});
}

updateWordTracker()
updateWordTracker()




