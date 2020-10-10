function generateRandomId() {
    return `ITEM_${Math.random().toString().slice(2,10)}`;
}
function generateRandomInteger(a, b) {
    return Math.floor(Math.random() * b) + a;
}

function randomlyChooseOneElement(input_array) {
    return copy(input_array)[generateRandomInteger(0, input_array.length)];
}
function shuffle_array(input_array) {
    const output_array = [...input_array];
    const length = output_array.length;
    for(let i=0; i<length; i++) {
        let rand_idx = Math.floor((i)*Math.random());
        let temp = output_array[i];
        output_array[i] = output_array[rand_idx];
        output_array[rand_idx] = temp;
    }
    return output_array;
}

function copy(input_array, num = input_array.length) {
    return [...input_array].splice(0, num).map(d => {return {...d}})
}

function incrementStage(stage) {
    const newStage = (stage >= 3) ? 3 : stage + 1;
    return newStage;
}

function updateTrackerDataArray(input_array, d) {
    input_array.forEach(wt => {
        if(wt.id === d.id) {
            wt.stage = incrementStage(wt.stage);
        }
    });
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


    // console.log('---------------------------')
    // ALL_WORDNODES.forEach(dd => console.log(dd.stage))
    return copy(shuffle_array(wordnodes), numNodes);
}
function findDifferentWordNodes(word_id, cat_id, numDifferent) {
    const catWords = ALL_CATEGORY_WORDS.filter(cw => !(cw.word_id === word_id || cw.category_id === cat_id));
    const wordnodes = catWords.map(cw => {
        return ALL_WORDNODES.filter(wd => wd.id === cw.word_id)[0];
    });
    return copy(shuffle_array(wordnodes), numDifferent);
}


// 0. Create a new one
// 1. Find out one of its categories
// 2. Get n-2 number of words of that category
// 3. Get 1 different word of different category
// 4. Rewrite global array with these n elements;
function generateGraphData(selectedWordNode) {
    // selectedWordNode.stage = 3;

    const selectedCategory = findOneCategory(selectedWordNode.id);
    const newWordNodes = generateNewWordNodes(selectedWordNode.id, selectedCategory.id, TOTAL_NUMBER_OF_NODES - 1);
    const differentWordNodes = findDifferentWordNodes(selectedWordNode.id, selectedCategory.id, TOTAL_NUMBER_OF_DIFFERENT);
    differentWordNodes.forEach(dn => dn.stage = 3);
    const diagram_data = [...newWordNodes, ...differentWordNodes];
    return diagram_data;
}