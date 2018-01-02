import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {Items} from '../Items';
import {mapStateToProps} from "../Items";

let getListItemsCalled, deleteItemCalled = false;

describe('Test Cases For Items', () => {
    function setupEmptyItemsList(loading) {
        const props = {
            activeList: {
                id: 1,
                name: "List 1",
                description: "Some text"
            },
            listItems: {
                listItems: {}
            },
            loading: loading,
            getListItems: () => { getListItemsCalled = true; },
            deleteItem: () => { deleteItemCalled = true; },
            match: {params: {id: 1}}
        };

        return shallow(<Items {...props} />);
    }

    function setupItemsList(loading) {
        const props = {
            activeList: {
                id: 1,
                name: "List 1",
                description: "Some text"
            },
            listItems: {
                listItems: {
                    "total": 1,
                    "next_page": "None",
                    "previous_page": "None",
                    "shopping_list_items": [
                        {
                            "date_created": "Tue, 19 Dec 2017 09:38:11 GMT",
                            "date_modified": "Tue, 19 Dec 2017 09:38:11 GMT",
                            "id": 1,
                            "name": "Item 1",
                            "quantity": 9.0,
                            "unit_price": 600.0
                        }
                    ]
                }
            },
            loading: loading,
            getListItems: () => { getListItemsCalled = true; },
            deleteItem: () => { deleteItemCalled = true; },
            match: {params: {id: 1}}
        };

        return shallow(<Items {...props} />);
    }

    it('renders PreLoader correctly', () => {
        const wrapper = setupEmptyItemsList(true);
        expect(wrapper.find('PreLoader').length).toBe(1);
    });

    it('renders a wrapper div', () => {
        const wrapper = setupEmptyItemsList(false);
        expect(wrapper.find('.content').length).toBe(1);
    });

    it('renders item list correctly', () => {
        const wrapper = setupItemsList(false);
        expect(wrapper.find('ItemList').length).toBe(1);
    });

    it('can delete an item', () => {
        const wrapper = setupItemsList(false);
        const btn = wrapper.find('ItemList').dive()
            .find('DeleteItem').dive()
            .find('.right');

        btn.simulate('click');

        expect(deleteItemCalled).toBe(true);
    });

    it('correctly maps state to props', () => {
        const state = {
            shoppingLists: {
                activeList: {}
            },
            listItems: {
                loading: false,
                listItems: {}
            }
        };
        const expected = {
            activeList: {},
            loading: false,
            listItems: {
                loading: false,
                listItems: {}
            }
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
