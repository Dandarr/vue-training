//Important info for testing
//uses Vitest - https://vitest.dev/guide/features.html
// and Chai https://www.chaijs.com/guide/styles
//tinyspy for mocking https://github.com/tinylibs/tinyspy
//vue test utils https://test-utils.vuejs.org/guide/

import fetch from 'node-fetch';
import {
    assert,
    describe,
    test
} from 'vitest';
import { mount } from '@vue/test-utils';

import UserProfile from './UserProfile.vue';

//import test users list
import usersList from '../TestData/users.js';


//example
describe("Toggle should render button", () => {
    test("should render button", () => {
        assert.equal(1, 1, "1 equals 1");
    })
});


describe("User Profile Component", () => {
    console.log("Enter User Profile Component tests");
    //arrange, act, assert

    let userProfile = systemUnderTestGetOneUser();
    //Arrange
    const wrapper = mount(UserProfile, {
        props: {
            UserProfile: userProfile
        }
    });

    //Act

    //Assert
    test("returns 3 td elements", () => {
        //FOR REFERENCE
        //console.log(elem);
        console.log("testing returns 3 td elements");
        expect(wrapper.findAll("td")).toHaveLength(3);
    })
});

describe("User Profile Component First User", () => {
    console.log("Enter User Profile Component First User");
    //arrange, act, assert

    let userProfile = systemUnderTestGetOneUser();
    //Arrange
    const wrapper = mount(UserProfile, {
        props: {
            UserProfile: userProfile
        }
    });

    //Act

    //Assert
    //"1-770-736-8031 x56442"
    test("first td returns correct phone number", () => {
        console.log("testing first td returns correct phone number");
        expect(wrapper.find('td').text()).toBe("1-770-736-8031 x56442");
    })
});


//System Under Test

function systemUnderTest() {
    //get all
    return usersList;
}

function systemUnderTestGetOneUser() {
    //get the first user
    return usersList[0];
}
