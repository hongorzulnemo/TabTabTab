
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
const DATA_wordnodes = [
    ...DATA_FOOD, ...DATA_SPORT, ...DATA_LOCATION, ...DATA_FURNITURE, ...DATA_INSTRUMENT
];

const DATA_categories = ['food', 'sport', 'location', 'furniture', 'instrument'];

DATA_wordnodes.forEach(d => ALL_WORDNODES.push(new WordNode(d)));
DATA_categories.forEach(d => ALL_CATEGORIES.push(new Category(d)));




DATA_FOOD.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item)[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'food')[0].id,
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

console.log(ALL_CATEGORY_WORDS)








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


// const DATA_TECHNOLOGY = [
//     'mobile-phone', 'camera', ''
// ];
// const DATA_ACADEMIC = [
//     'diploma', 'university', 'school'
// ];

// const DATA_HYGIENE = [
//     'cleaning', 'soap', 'shampoo', 'deoderant', 'tooth-brush'
// ];
// const DATA_HEALTH = [
//     'clinic', 'hospital', 'medicine'
// ];
// const DATA_SHOPPING = [
//     'shopping-cart', 'mall', 'shop', 'shopping-bag', 'discount'
// ];
// const DATA_FINANCE = [
//     'bank', 'atm-machine', 'money', 'tax'
// ];
// const DATA_TRANSPORTATION = [
//     'bus', 'car', 'ticker', 'airplane', 'train', 'bus-ticket'
// ];

// ALL_CATEGORY_WORDS.push(new Category_word(
//     ALL_WORDNODES.filter(d => d.name == 'apple')[0].id,
//     ALL_CATEGORIES.filter(d => d.name == 'food')[0].id,
// ));
// ALL_CATEGORY_WORDS.push(new Category_word(
//     ALL_WORDNODES.filter(d => d.name == 'banana')[0].id,
//     ALL_CATEGORIES.filter(d => d.name == 'food')[0].id,
// ));
// ALL_CATEGORY_WORDS.push(new Category_word(
//     ALL_WORDNODES.filter(d => d.name == 'chicken')[0].id,
//     ALL_CATEGORIES.filter(d => d.name == 'food')[0].id,
// ));
// ALL_CATEGORY_WORDS.push(new Category_word(
//     ALL_WORDNODES.filter(d => d.name == 'milk')[0].id,
//     ALL_CATEGORIES.filter(d => d.name == 'food')[0].id,
// ));
// ALL_CATEGORY_WORDS.push(new Category_word(
//     ALL_WORDNODES.filter(d => d.name == 'cabbage')[0].id,
//     ALL_CATEGORIES.filter(d => d.name == 'food')[0].id,
// ));
// ALL_CATEGORY_WORDS.push(new Category_word(
//     ALL_WORDNODES.filter(d => d.name == 'farm')[0].id,
//     ALL_CATEGORIES.filter(d => d.name == 'food')[0].id,
// ));




