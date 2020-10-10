function generateRandomId() {
    return `ITEM_${Math.random().toString().slice(2,10)}`;
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

function getExactSameWordNodeFromArray(input_array, d) {
    return copy(input_array).filter(elem => elem.id === d.id)[0];
}