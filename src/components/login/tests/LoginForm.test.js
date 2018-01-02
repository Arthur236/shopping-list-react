import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {LoginForm} from '../LoginForm';
import {mapStateToProps} from "../LoginForm";

describe('Test Cases For LoginForm', () => {
    function setup(loading) {
        const props = {
            actions: { login: sinon.spy() },
            loading: loading,
            loggedIn: false,
            handleSubmit: sinon.spy()
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
