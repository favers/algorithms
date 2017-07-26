'use strict';

const twoSum = require('../src/001-TwoSum');
const expect = require('chai').expect;

describe('twoSum', function () {
    it('nums[0] + nums[1] = [0,1]', function () {
        let nums = [2, 7, 11, 15], target = 9;
        expect(twoSum(nums, target)).to.eql([0, 1]);
    });
});
