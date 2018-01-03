import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {ShoppingLists, mapStateToProps} from '../ShoppingLists';

let getListsCalled, deleteListCalled = false;

describe('Test Cases For ShoppingLists', () => {
    function setupEmptyShoppingLists(loading) {
        const props = {
            shoppingLists: {},
            loading: loading,
            getLists: () => { getListsCalled = true; },
            deleteList: () => { deleteListCalled = true; }
        };

        return shallow(<ShoppingLists {...props} />);
    }

    function setupShoppingLists(loading) {
        const props = {
            shoppingLists: {
                "total": 1,
                "next_page": "None",
                "previous_page": "None",
                "shared_lists": [
                    {
                        "id": 1,
                        "name": "List 1",
                        "description": "Some text"
                    }
                ]
            },
            loading: loading,
            getLists: () => { getListsCalled = true; },
            deleteList: () => { deleteListCalled = true; }
        };

        return shallow(<ShoppingLists {...props} />);
    }

    it('renders PreLoader correctly', () => {
        const wrapper = setupEmptyShoppingLists(true);
        expect(wrapper.find('PreLoader').length).toBe(1);
    });

    it('renders a wrapper div', () => {
        const wrapper = setupEmptyShoppingLists(false);
        expect(wrapper.find('.content').length).toBe(1);
    });

    it('renders friend list correctly', () => {
        const wrapper = setupShoppingLists(false);
        expect(wrapper.find('List').length).toBe(1);
    });

    it('correctly maps state to props', () => {
        const state = {
            shoppingLists: {
                loading: false,
                shoppingLists: {}
            }
        };
        const expected = {
            loading: false,
            shoppingLists: {}
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
