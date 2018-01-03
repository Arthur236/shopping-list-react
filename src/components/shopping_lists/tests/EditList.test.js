import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {EditList, mapStateToProps} from '../EditList';

let getSingleListCalled, editListCalled, changeCalled, submitCalled = false;

describe('Test Cases For EditList', () => {
    function setup(loading) {
        const id = 3;
        const props = {
            activeList: {
                id: 2,
                name: "Item 1",
                description: "Some text"
            },
            getSingleList: () => { getSingleListCalled = true; },
            editList: () => { editListCalled = true; },
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

        return shallow(<EditList {...props} />);
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
            shoppingLists: {
                loading: false,
                activeList: {},
                initialValues: {}
            }
        };
        const expected = {
            loading: false,
            activeList: {},
            initialValues: {}
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
