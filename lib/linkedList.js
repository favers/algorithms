function ListNode(data, next) {
    this.data = data;
    this.next = next || null;
}

function LinkedList(ele) {
    this.head = null;
    this.length = 0;
    if (ele) {
        this.head = new ListNode(ele);
        this.length++;
    }
}

LinkedList.prototype.append = function (ele) {
    let node = new ListNode(ele);
    if (this.head == null) {
        this.head = node;
    } else {
        let cursor = this.head;
        while (cursor.next) {
            cursor = cursor.next;
        }
        cursor.next = node;
    }
    this.length++;
    return this;
}

LinkedList.prototype.insert = function (ele, pos) {
    if (pos < 0 || pos > this.length) return false;
    let node = new ListNode(ele);
    this.length++;
    if (pos === 0) {
        node.next = this.head;
        this.head = node;
        return true;
    }
    let cursor = 0;
    let target = this.head;
    while (pos > ++cursor) {
        console.log('测试', target, pos > cursor);
        target = target.next;
    }
    node.next = target.next;
    target.next = node;
    return true;
}

LinkedList.prototype.removeAt = function (pos) {
    if (!this.length) return false;
    if (pos < 0 || pos > this.length) return false;
    this.length--;
    if (pos === 0) {
        this.head = this.head.next;
        return true;
    }
    let cursor = 0;
    let target = this.head;
    while (pos - 1 > cursor++) {
        target = target.next;
    }
    target.next = target.next.next;
    return true;
}

LinkedList.prototype.indexOf = function (ele) {
    let target = this.head;
    let cursor = 0;
    while (target.next) {
        if (target.data === ele) {
            return cursor;
        }
        cursor++;
        target = target.next;
    }
    if (target.data === ele) {
        return cursor;
    }
    return -1;
}

LinkedList.prototype.remove = function (ele) {
    let index = this.indexOf(ele);
    return this.removeAt(index);
}

LinkedList.prototype.clear = function () {
    this.head = null;
    this.length = 0;
}

module.exports = {
    ListNode,
    LinkedList
}