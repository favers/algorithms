const { ListNode, LinkedList } = require('../lib/linkedList');
const expect = require('chai').expect;

describe('linkedList', function () {
    const l = new LinkedList('hello');
    it('初始化linkedList', function () {
        expect(l.head).to.eql({ "data": "hello", "next": null });
    });
    it('append操作', function () {
        expect(l.append('append').length).to.equal(2);
    })
    it('insert操作 超出限制', function () {
        l.insert('nihao', 100)
        expect(l.length).to.equal(2);
    })
    it('insert操作 正常操作', function () {
        l.insert('nihao', 1)
        expect(l.length).to.equal(3);
    })
    it('indexOf操作 存在', function () {
        expect(l.indexOf('append')).to.equal(2);
    })
    it('indexOf操作 不存在', function () {
        expect(l.indexOf('test')).to.equal(-1);
    })
    it('remove操作 存在', function () {
        l.remove('nihao');
        expect(l.length).to.equal(2);
    })
    it('remove操作 不存在', function () {
        l.remove('nihao');
        expect(l.length).to.equal(2);
    })
    it('clear操作', function () {
        l.clear();
        expect(l.head).to.null;
    })
    const b = new LinkedList();
    it('append head null', function () {
        expect(b.append('append').length).to.equal(1);
    })
    it('remove head', function () {
        expect(b.remove('append')).to.equal(true);
    })
    it('insert head', function () {
        expect(b.insert('append', 0)).to.equal(true);
    })
});