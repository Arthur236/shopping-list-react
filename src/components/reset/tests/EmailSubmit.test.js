import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {EmailSubmit, mapStateToProps} from '../EmailSubmit';

describe('Test Cases For EmailSubmit', () => {
    function setup(loading) {
        const props = {
            sendResetRequest: () => {},
            loading: loading,
            handleSubmit: () => {}
        };

        return shallow(<EmailSubmit {...props} />);
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
                loading: false
            }
        };
        const expected = {
            loading: false
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
