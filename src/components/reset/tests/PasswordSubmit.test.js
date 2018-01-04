import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {PasswordSubmit, mapStateToProps} from '../PasswordSubmit';

describe('Test Cases For PasswordSubmit', () => {
    function setup(loading) {
        const props = {
            passwordReset: () => {},
            loading: loading,
            handleSubmit: () => {}
        };

        return shallow(<PasswordSubmit {...props} />);
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
            reset: {
                loading: false
            }
        };
        const expected = {
            loading: false
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
