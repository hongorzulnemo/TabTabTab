

// console.log(ALL_WORDNODES)
// console.log(ALL_CATEGORIES)
// console.log(ALL_CATEGORY_WORDS)


let diagram_data = copy(ALL_WORDNODES, 4);
let props = {
    data: diagram_data,
    padFactor: 2,
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