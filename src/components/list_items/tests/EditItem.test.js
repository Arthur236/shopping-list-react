import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {EditItem, mapStateToProps} from '../EditItem';

let getSingleItemCalled, editItemCalled, changeCalled, submitCalled = false;

describe('Test Cases For EditItem', () => {
    function setup(loading) {
        const id = 3;
        const props = {
            activeItem: {
                id: 2,
                name: "Item 1",
                quantity: 90,
                unit_price: 100
            },
            getSingleItem: () => { getSingleItemCalled = true; },
            editItem: () => { editItemCalled = true; },
            match: { params: { id } },
            change: () => { changeCalled = true; },
            initialValues: {
                id: 2,
                name: "Item 1",
                quantity: 90,
                unit_price: 100
            },
            handleSubmit: () => { submitCalled = true; },
            loading: loading
        };

        return shallow(<EditItem {...props} />);
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
                loading: false,
                activeItem: {},
                initialValues: {}
            }
        };
        const expected = {
            loading: false,
            activeItem: {},
            initialValues: {}
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
