class WordNode {
    constructor(name) {
        this.id = generateRandomId();
        this.name = name;
    }
}

class Category {
    constructor(name) {
        this.id = generateRandomId();
        this.name = name;
    }
}

class Category_word {
    constructor(word_one_id, word_two_id, category_id) {
        this.id = generateRandomId();
        this.word_one_id = word_one_id;
        this.word_two_id = word_two_id;
        this.category_id = category_id;
    }
}
