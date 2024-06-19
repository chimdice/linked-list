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

}

const link = new LinkList();
link.append(3);
link.append(10);
link.prepend(8);
link.prepend(12);
console.log(link.linkList);