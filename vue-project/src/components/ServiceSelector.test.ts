//Important info for testing
//uses Vitest - https://vitest.dev/guide/features.html
// and Chai https://www.chaijs.com/guide/styles
//tinyspy for mocking https://github.com/tinylibs/tinyspy
//vue test utils https://test-utils.vuejs.org/guide/

import {
    assert,
    describe,
    test
} from 'vitest';
import { mount } from '@vue/test-utils';

import ServiceSelector from './ServiceSelector.vue';

//example
describe("Service Selector", () => {
    //Arrange
    const wrapper = mount(ServiceSelector);
    //Act

    //Assert
    test("has elements", () => {
        //FOR REFERENCE
        //console.log(elem);
        expect(wrapper.findAll("*").length).toBeGreaterThan(0);
    });
});



//System Under Test
