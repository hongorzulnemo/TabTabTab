

const path_to_images_wordNode = `../static/media/images/words/`;
const path_to_images_category = `../static/media/images/categories/`;
const file_extension = `.svg`;
class WordNode {
    constructor(name) {
        this.id = generateRandomId();
        this.name = name;
        this.imgUrl = `${path_to_images_wordNode}${name}${file_extension}`;
        this.stage = 1;
    }
}

class Category {
    constructor(name) {
        this.id = generateRandomId();
        this.name = name;
        this.imgUrl = `${path_to_images_category}${name}${file_extension}`;
    }
}

class Category_word {
    constructor(word_id, category_id) {
        this.id = generateRandomId();
        this.word_id = word_id;
        this.category_id = category_id;
        this.stage = 1;
    }
}








class ContainerGroup {
    constructor(containerGroupJoin, classSelected) {
        this.containerGroupJoin = containerGroupJoin;
        this.classSelected = classSelected;
        this.group = this.containerGroupJoin.selectAll(`#${this.classSelected}-g`);
        this.groupData = this.group.data([null]);
        this.groupEnter = this.groupData.enter();
        this.groupJoin = this.groupEnter.append('g').attr('id', `${this.classSelected}-g`);
        this.groupMerge = this.groupEnter.merge(this.groupData);
        this.groupExit = this.groupData.exit().remove();
    }
}

class GeneralUpdatePattern {
    constructor(classSelected, dataToBind, toAppend, containerGroupJoin) {
        this.classSelected = classSelected;
        this.dataToBind = dataToBind;
        this.toAppend = toAppend;

        this.container = new ContainerGroup(containerGroupJoin, classSelected);

        this.itself = this.container.groupData.merge(this.container.groupJoin).selectAll(`.${this.classSelected}`).data(this.dataToBind);
        this.enter = this.itself.enter();
        this.join = this.enter.append(this.toAppend).attr('class', `${this.classSelected}`);
        this.merge = this.itself.merge(this.join);
        this.exit = this.itself.exit();
    }
}

