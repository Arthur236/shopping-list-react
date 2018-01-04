import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {LoginForm, mapStateToProps} from '../LoginForm';

describe('Test Cases For LoginForm', () => {
    function setup(loading) {
        const props = {
            login: () => {},
            loading: loading,
            loggedIn: false,
            handleSubmit: () => {}
        };

        return shallow(<LoginForm {...props} />);
    }

    it('renders a wrapper div', () => {
        const wrapper = setup(false);
        expect(wrapper.find('.landingContent').length).toBe(1);
    });

    it('renders form correctly', () => {
        const wrapper = setup(false);
        expect(wrapper.find('Form').length).toBe(1);
    });

    it('loads correctly when logging in', () => {
        const wrapper = setup(true);
        expect(wrapper.find('Button').prop('loading')).toEqual(true);
    });

    it('correctly maps state to props', () => {
        const state = {
            auth: {
                loading: false,
                loggedIn: false
            }
        };
        const expected = {
            loading: false,
            loggedIn: false
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
