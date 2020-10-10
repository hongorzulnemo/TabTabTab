

// console.log(ALL_WORDNODES)
// console.log(ALL_CATEGORIES)
// console.log(ALL_CATEGORY_WORDS)

// const selected = getExactSameWordNodeFromArray(ALL_WORDNODES, d);
// selected.stage = 2;
// diagram_data = copy(shuffle_array([...ALL_WORDNODES]), 3);
// diagram_data = [...diagram_data, selected];


const TOTAL_NUMBER_OF_NODES = 4;


// function fetch_categories_from_cw_array(input_cw_array) {
//     const categories = input_cw_array.map(cw => {
//         return ALL_CATEGORIES.filter(wd => wd.id === cw.category_id)[0];
//     });
//     return categories;
// }

// function fetch_Catwords_BasedOnWordNode(chosen_wordNode) {
//     const result_cw = ALL_CATEGORY_WORDS.filter(cw => cw.word_id === chosen_wordNode.id);
//     return result_cw;
// }


// function fetch_Catwords_BasedOnCategory(chosen_category) {
//     const result_cw = ALL_CATEGORY_WORDS.filter(cw => cw.category_id === chosen_category.id);
//     return result_cw;
// }

// function fetch_wordnodes_from_cw_array(input_cw_array) {
//     const wordnodes = input_cw_array.map(cw => {
//         return ALL_WORDNODES.filter(wd => wd.id === cw.word_id)[0];
//     });
//     return wordnodes;
// }

// function generateSomeDataOfSameCategory(selected_wordNode) {
//     const result_cw_wn = fetch_Catwords_BasedOnWordNode(selected_wordNode);
//     const chosen_category = shuffle_array(fetch_categories_from_cw_array(result_cw_wn))[0];
//     const result_cw_ct = fetch_Catwords_BasedOnCategory(chosen_category);
//     const result_data = fetch_wordnodes_from_cw_array(result_cw_ct);
//     return  result_data.filter(rd => rd.id !== selected_wordNode.id);
// }



function randomlyChooseOneElement(input_array) {
    return input_array[generateRandomInteger(0, input_array.length)];
}
function findOneCategory(word_id) {
    const catWords = ALL_CATEGORY_WORDS.filter(cw => cw.word_id === word_id);
    const categories = catWords.map(cw => {
        return ALL_CATEGORIES.filter(wd => wd.id === cw.category_id)[0];
    });
    const category = randomlyChooseOneElement(categories);
    return category;
}
function generateNewWordNodes(word_id, cat_id, numNodes) {
    const catWords = ALL_CATEGORY_WORDS.filter(cw => cw.category_id === cat_id && cw.word_id !== word_id);
    const wordnodes = catWords.map(cw => {
        return ALL_WORDNODES.filter(wd => wd.id === cw.word_id)[0];
    });
    return copy(wordnodes, numNodes);
}
function findDifferentWordNodes(word_id, cat_id, numDifferent) {
    const catWords = ALL_CATEGORY_WORDS.filter(cw => !(cw.word_id === word_id || cw.category_id === cat_id));
    const wordnodes = catWords.map(cw => {
        return ALL_WORDNODES.filter(wd => wd.id === cw.word_id)[0];
    });
    return copy(shuffle_array(wordnodes), numDifferent);
}


// 0. Create a new one
const selectedWordNode = randomlyChooseOneElement(ALL_WORDNODES);
// 1. Find out one of its categories
const selectedCategory = findOneCategory(selectedWordNode.id);
// 2. Get n-2 number of words of that category
const newWordNodes = generateNewWordNodes(selectedWordNode.id, selectedCategory.id, TOTAL_NUMBER_OF_NODES - 2);
// 3. Get 1 different word of different category
const differentWordNodes = findDifferentWordNodes(selectedWordNode.id, selectedCategory.id, 1);
// 4. Rewrite global array with these n elements;
diagram_data = [...newWordNodes, ...differentWordNodes, selectedWordNode];

// let random_wordNode = ALL_WORDNODES[generateRandomInteger(0, ALL_WORDNODES.length)];
// let random_wordNode_not_equal = ALL_WORDNODES.filter(wd => wd.id !== random_wordNode.id)[generateRandomInteger(0, ALL_WORDNODES.length)];
// let diagram_data = copy(generateSomeDataOfSameCategory(random_wordNode), 3);
// diagram_data = [...diagram_data, random_wordNode_not_equal];
let props = {
    data: diagram_data,
    padFactor: 50,
    svgLength: 1200
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




