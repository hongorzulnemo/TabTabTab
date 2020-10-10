
const ALL_WORDNODES = [];
const ALL_CATEGORIES = [];
const ALL_CATEGORY_WORDS = [];
const DATA_FOOD = [
    'apple', 'banana', 'chicken', 'milk', 'cabbage', 'drinks', 'fast-food',
    'orange', 'eggs', 'flour', 'bread', 'icecream', 'carrots',
    'potatos', 'tomatoes',
];
const DATA_SPORT = [
    'basketball', 'soccer', 'baseball', 'ping-pong', 'golf', 'swimming',
    'hiking', 'wrestling', 'running'
];
const DATA_LOCATION = [
    'beach', 'mall', 'airport', 'farm', 'bank', 'clinic',
    'school', 'post-office', 'hospital', 'desert', 'ocean', 'earth', 'bridge', 'mountain'
];
const DATA_FURNITURE = [
    'bookshelf', 'bunk-bed', 'table', 'wardrobe', 'door',
    'desk-lamp', 'cooler', 'fridge', 'chair', 'sink', 'bath-tub', 'bed', 'washing-machine'
];
const DATA_INSTRUMENT = [
    'acoustic-guitar', 'electric-guitar', 'bass', 'sitar', 'banjo', 'ukulele', 'mandolin', 'keytar',
    'violin', 'flute', 'harmonica', 'harp', 'saxophone', 'french-horn', 'trumpet', 'grand-piano', 'organ',
    'drum', 'marimba', 'kalimba', 'speaker'
]
const DATA_MEDICINE = [
    'aids', 'ambulance', 'atomic', 'bed', 'cardiogram', 'DNA', 
    'dropper', 'electrocardiogram', 'emergency-kit', 'flask', 
    'hospital', 'lungs', 'magnifying-glass', 'medical-kit', 
    'medicine', 'microscope', 'molecule', 'nurse', 'pills', 
    'placeholder', 'report', 'scalpel', 'stethoscope', 
    'strip', 'syringe', 'tablets', 'test-tube', 'thermometer', 
    'tooth', 'transfusion', 'water', 'x-rays'
];
const DATA_ANIMAL = [
    'cat', 'horse', 'gorilla', 'snake', 'toucan', 'jaguar', 'frog', 'lion', 'antilope', 'elephant', 'giraffe', 'dog', 'zebra', 'koala', 'coyote', 'ostrich', 'duck', 'shark', 'fish', 'octopus', 'sea star', 'goldfish', 'crocodile', 'turtle', 'bee', 'butterfly', 'bear', 'wolf', 'owl', 'rabbit', 'cow', 'pig', 'sheep'
];
const DATA_wordnodes = [
    ...DATA_FOOD, ...DATA_SPORT, ...DATA_LOCATION, ...DATA_FURNITURE, ...DATA_INSTRUMENT, ...DATA_MEDICINE, ...DATA_ANIMAL
];

const DATA_categories = ['food', 'sport', 'location', 'furniture', 'instrument', 'medicine', 'animal'];

DATA_wordnodes.forEach(d => ALL_WORDNODES.push(new WordNode(d)));
DATA_categories.forEach(d => ALL_CATEGORIES.push(new Category(d)));




DATA_FOOD.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item)[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'food')[0].id,
    ));
})
DATA_ANIMAL.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item)[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'animal')[0].id,
    ));
})
DATA_SPORT.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item)[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'sport')[0].id,
    ));
})
DATA_LOCATION.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item)[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'location')[0].id,
    ));
})  
DATA_FURNITURE.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item)[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'furniture')[0].id,
    ));
})
DATA_INSTRUMENT.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item)[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'instrument')[0].id,
    ));
})
DATA_MEDICINE.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item)[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'medicine')[0].id,
    ));
})










/*
Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/catkuro" title="catkuro">catkuro</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/mynamepong" title="mynamepong">mynamepong</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">turkkub</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
*/





