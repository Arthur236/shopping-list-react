import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {CreateItem, mapStateToProps} from '../CreateItem';

let createItemCalled, submitCalled = false;

describe('Test Cases For CreateItem', () => {
    function setup(loading) {
        const props = {
            match: { params: { id: 1 } },
            createItem: () => { createItemCalled = true; },
            handleSubmit: () => { submitCalled = true; },
            loading: loading
        };

        return shallow(<CreateItem {...props} />);
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
            listItems: {
                loading: false
            }
        };
        const expected = {
            loading: false
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
