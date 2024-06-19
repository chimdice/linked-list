class Node {
    constructor() {
        this.value = null;
        this.link = null;
    };
};

class LinkList {
    constructor () {
        this.linkList = {};
        this.lastPosition = null
        this.firstEmpty = true
    };

    append (value) {
        if (this.firstEmpty) {
            const node = new Node();
            node.value = value;
            this.linkList.link = node;
            this.firstEmpty = false
        } else {
            let tempList = this.linkList.link;

            while (tempList.link != null) {
                tempList = tempList.link;
            };

            const node = new Node();
            node.value = value;
            tempList.link = node;
        };
    };

    prepend (value) {
        if (this.firstEmpty) {
            const node = new Node()
            node.value = value;
            this.linkList.link = node;
            this.firstEmpty = false;
        } else {
            const node = new Node();
            node.value = value;
            node.link = this.linkList.link;
            this.linkList.link = node;
        };
    };

    size () {
        let size = 0;
        let tempList = this.linkList.link;

        if (typeof tempList === 'undefined') {
            return size;
        }

        while (! (tempList.link === null)) {
            tempList = tempList.link;
            size += 1;
        };

        size += 1;
        return size
    };

    head () {
        return this.linkList.link;
    };

    tail () {
        let tempList = this.linkList.link;

        while (! (tempList.link === null)) {
            tempList = tempList.link;
        };

        return tempList;
    };

};

const link = new LinkList();
link.append(3);
link.prepend(12);
link.append(45);
console.log(link.tail());