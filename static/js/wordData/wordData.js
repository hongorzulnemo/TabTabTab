const ALL_WORDNODES = [];
const ALL_CATEGORIES = [];
const ALL_CATEGORY_WORDS = [];

const DATA_HUMAN = [
    ['ikatteiru', 'angry'], ['happe', 'happy'], ['padowasu', 'confused'], ['shinpai', 'concerned'], ['kangae', 'thinking'], ['suwatte', 'sitting'],
    ['tomodachi', 'friends'], ['shura', 'fighting']
];

const DATA_BUILDING = [
    ['rouka', 'hallway'], ['daigaku', 'university'], ['ateru', 'empty'], ['te o arau', 'washing-hands'], ['ie', 'house'], ['dueringu', 'apartment'],
    ['takai', 'high'], ['segatakai', 'tall'], ['tatemono', 'building'], ['soofa', 'couch'], ['ima', 'living-room'], ['taberu', 'table'],
    ['mado', 'window'], ['suwatte', 'sitting'], ['kage', 'shadow'], ['tori', 'street']
];

const DATA_NATURE = [
    ['midori', 'green'], ['eda', 'branches'], ['shokubutsu', 'plant'], ['shinrin', 'forest'], ['yuki', 'snow'], ['fuyu-no-mori', 'winter-forest'],
    ['heia', 'cold'], ['fuyu', 'winter'], ['koori', 'ice'], ['ki', 'tree'], ['hi', 'fire'], ['mizu', 'water'],
    ['inshu', 'drinking'], ['suwatte', 'sitting'], ['kage', 'shadow']
];

const DATA_OFFICE = [
    ['honbon', 'call'], ['geitaidenwa', 'cell-phone'], ['jikan', 'time'], ['shitsumon', 'question'], ['kangae', 'thinking'], ['ateru', 'empty'], ['toron', 'discussion'],
    ['shishou', 'mentoring'], ['keiyaku', 'agreement'], ['buntai-sagyo', 'team-work'], ['bun-sagyo', 'group-work'],
    ['bun-toron', 'group-discussion'], ['hoyomi', 'calendar'], ['suwatte', 'sitting']
];

const DATA_CAMPUS = [
    ['jikan', 'time'], ['rouka', 'hallway'], ['semina', 'seminar'], ['kogi', 'lecture'], ['shitsumon', 'question'],
    ['wariate', 'assignment'], ['daigaku', 'university'], ['nooto', 'notebook'], ['padowasu', 'confused'], ['kangae', 'thinking'],
    ['oshieru', 'teaching'], ['ateru', 'empty'], ['kokuban', 'blackboard'], ['shiki', 'formula'], ['toron', 'discussion'], ['kamera', 'camera'], ['hoyomi', 'calendar'], ['suwatte', 'sitting']
];


const DATA_wordnodes = [
    ...DATA_HUMAN, 
    ...DATA_BUILDING, 
    ...DATA_NATURE, 
    ...DATA_OFFICE, 
    ...DATA_CAMPUS,
];

const DATA_categories = ['human', 'building', 'nature', 'office', 'campus'];

DATA_wordnodes.forEach(d => ALL_WORDNODES.push(new WordNode(d)));
DATA_categories.forEach(d => ALL_CATEGORIES.push(new Category(d)));


DATA_HUMAN.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item[1])[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'human')[0].id,
    ));
});

DATA_BUILDING.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item[1])[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'building')[0].id,
    ));
});

DATA_NATURE.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item[1])[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'nature')[0].id,
    ));
});  

DATA_OFFICE.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item[1])[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'office')[0].id,
    ));
});

DATA_CAMPUS.forEach(item => {
    ALL_CATEGORY_WORDS.push(new Category_word(
        ALL_WORDNODES.filter(d => d.name == item[1])[0].id,
        ALL_CATEGORIES.filter(d => d.name == 'campus')[0].id,
    ));
});



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





