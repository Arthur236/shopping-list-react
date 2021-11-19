import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {Profile, mapStateToProps} from '../Profile';

let getProfileCalled, updateProfileCalled, changeCalled, submitCalled = false;

describe('Test Cases For Profile', () => {
    function setup(loading) {
        const props = {
            activeUser: {
                id: 2,
                username: "User 1",
                email: "user1@gmail.com"
            },
            getProfile: () => { getProfileCalled = true; },
            updateProfile: () => { updateProfileCalled = true; },
            change: () => { changeCalled = true; },
            initialValues: {
                id: 2,
                username: "User 1",
                email: "user1@gmail.com"
            },
            handleSubmit: () => { submitCalled = true; },
            loading: loading
        };

        return shallow(<Profile {...props} />);
    }

    it('renders wrapper div correctly', () => {
        const wrapper = setup(false);
        expect(wrapper.find('.content').length).toBe(1);
    });

    it('renders a grid correctly', () => {
        const wrapper = setup(false);
        expect(wrapper.find('Grid').length).toBe(1);
    });

    it('changes loading status correctly', () => {
        const wrapper = setup(true);
        expect(wrapper.find('Button').prop('loading')).toEqual(true);
    });

    it('correctly maps state to props', () => {
        const state = {
            users: {
                loading: false,
                activeUser: {},
                initialValues: {}
            }
        };
        const expected = {
            loading: false,
            activeUser: {},
            initialValues: {}
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
