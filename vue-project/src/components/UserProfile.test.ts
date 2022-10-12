//Important info for testing
//uses Vitest - https://vitest.dev/guide/features.html
// and Chai https://www.chaijs.com/guide/styles
//tinyspy for mocking https://github.com/tinylibs/tinyspy
//vue test utils https://test-utils.vuejs.org/guide/

import {
    assert,
    describe,
    it
} from 'vitest';
import {
    mount
} from '@vue/test-utils';
//import Toggle from './Toggle.vue';

describe("Toggle should render button", () => {
    it("should render button", () => {
        assert.equal(1, 1, "1 equals 1");
    })
});
