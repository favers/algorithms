const { ListNode, LinkedList } = require('../lib/linkedList');

function addTwoNumbers(lA, lB) {
    let aLen = lA.length;
    let bLen = lB.length;
    let count = Math.max(aLen, bLen);
    let target = lA.head, plus = lB.head;
    if (aLen < bLen) {
        target = lB.head;
        plus = lA.head;
    }
    while (count--) {
        let sum = target.data + (plus && plus.data || 0);
        let bits = sum % 10;
        let tens = ~~(sum / 10);
        target.data = bits;
        if (tens && !target.next) {
            target.next = new ListNode(tens);
        } else if (tens) {
            target.next.data = target.next.data + tens;
        }
        target = target.next;
        plus = plus && plus.next || null;
    }
    return aLen < bLen ? lB : lA;
}

module.exports = addTwoNumbers;