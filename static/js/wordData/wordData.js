
const ALL_WORDNODES = [];
const ALL_CATEGORIES = [];
const ALL_CATEGORY_WORDS = [];

const DATA_wordnodes = ['apple', 'banana', 'chicken', 'milk', 'cabbage', 'basketball',
'soccer', 'baseball', 'tennis', 'golf', 'beach', 'gym', 'mall', 'airport', 'farm',
'mobile phone', 'camera', 'bus', 'car', 'ticket', 'airplane', 'train'];
const DATA_categories = ['food', 'sport', 'location', 'technology', 'transportation'];

DATA_wordnodes.forEach(d => ALL_WORDNODES.push(new WordNode(d)));
DATA_categories.forEach(d => ALL_CATEGORIES.push(new Category(d)));



ALL_CATEGORY_WORDS.push(new Category_word(
    ALL_WORDNODES.filter(d => d.name == 'apple')[0].id,
    ALL_WORDNODES.filter(d => d.name == 'banana')[0].id,
    ALL_CATEGORIES.filter(d => d.name == 'food')[0].id,
));
ALL_CATEGORY_WORDS.push(new Category_word(
    ALL_WORDNODES.filter(d => d.name == 'milk')[0].id,
    ALL_WORDNODES.filter(d => d.name == 'farm')[0].id,
    ALL_CATEGORIES.filter(d => d.name == 'location')[0].id,
));
ALL_CATEGORY_WORDS.push(new Category_word(
    ALL_WORDNODES.filter(d => d.name == 'basketball')[0].id,
    ALL_WORDNODES.filter(d => d.name == 'golf')[0].id,
    ALL_CATEGORIES.filter(d => d.name == 'sport')[0].id,
));
ALL_CATEGORY_WORDS.push(new Category_word(
    ALL_WORDNODES.filter(d => d.name == 'tennis')[0].id,
    ALL_WORDNODES.filter(d => d.name == 'golf')[0].id,
    ALL_CATEGORIES.filter(d => d.name == 'sport')[0].id,
));
ALL_CATEGORY_WORDS.push(new Category_word(
    ALL_WORDNODES.filter(d => d.name == 'tennis')[0].id,
    ALL_WORDNODES.filter(d => d.name == 'gym')[0].id,
    ALL_CATEGORIES.filter(d => d.name == 'location')[0].id,
));
ALL_CATEGORY_WORDS.push(new Category_word(
    ALL_WORDNODES.filter(d => d.name == 'tennis')[0].id,
    ALL_WORDNODES.filter(d => d.name == 'beach')[0].id,
    ALL_CATEGORIES.filter(d => d.name == 'location')[0].id,
));
ALL_CATEGORY_WORDS.push(new Category_word(
    ALL_WORDNODES.filter(d => d.name == 'basketball')[0].id,
    ALL_WORDNODES.filter(d => d.name == 'beach')[0].id,
    ALL_CATEGORIES.filter(d => d.name == 'location')[0].id,
));
ALL_CATEGORY_WORDS.push(new Category_word(
    ALL_WORDNODES.filter(d => d.name == 'train')[0].id,
    ALL_WORDNODES.filter(d => d.name == 'airplane')[0].id,
    ALL_CATEGORIES.filter(d => d.name == 'transportation')[0].id,
));
ALL_CATEGORY_WORDS.push(new Category_word(
    ALL_WORDNODES.filter(d => d.name == 'camera')[0].id,
    ALL_WORDNODES.filter(d => d.name == 'airplane')[0].id,
    ALL_CATEGORIES.filter(d => d.name == 'technology')[0].id,
));
ALL_CATEGORY_WORDS.push(new Category_word(
    ALL_WORDNODES.filter(d => d.name == 'camera')[0].id,
    ALL_WORDNODES.filter(d => d.name == 'beach')[0].id,
    ALL_CATEGORIES.filter(d => d.name == 'location')[0].id,
));
ALL_CATEGORY_WORDS.push(new Category_word(
    ALL_WORDNODES.filter(d => d.name == 'camera')[0].id,
    ALL_WORDNODES.filter(d => d.name == 'airplane')[0].id,
    ALL_CATEGORIES.filter(d => d.name == 'location')[0].id,
));



