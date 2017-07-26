
const { ListNode, LinkedList } = require('../lib/linkedList');
const addTwoNumbers = require('../src/002-AddTwoNumbers');
const expect = require('chai').expect;

describe('linkedList', function () {
    const lA = new LinkedList(2);
    lA.append(4);
    lA.append(3);
    const lB = new LinkedList(5);
    lB.append(6);
    lB.append(4);
    it('addTwoNumbers', function () {
        let l = addTwoNumbers(lA, lB);
        expect(l.head.data).to.equal(7);
        expect(l.head.next.data).to.equal(0);
        expect(l.head.next.next.data).to.equal(8);
    });
});

