import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {RegistrationForm, mapStateToProps} from '../RegistrationForm';

describe('Test Cases For RegistrationForm', () => {
    function setup(loading) {
        const props = {
            register: () => {},
            loading: loading,
            registered: false,
            handleSubmit: () => {}
        };

        return shallow(<RegistrationForm {...props} />);
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
                registered: false
            }
        };
        const expected = {
            loading: false,
            registered: false
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
