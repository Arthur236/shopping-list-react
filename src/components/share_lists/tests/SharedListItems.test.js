import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {SharedListItems, mapStateToProps} from '../SharedListItems';

let getSharedListItemsCalled = false;

describe('Test Cases For SharedListItems', () => {
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
            getSharedListItems: () => { getSharedListItemsCalled = true; },
            match: { params: { id: 1 } }
        };

        return shallow(<SharedListItems {...props} />);
    }

    function setupItemsList(loading) {
        const props = {
            activeList: {
                id: 1,
                name: "List 1",
                description: ""
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
            getSharedListItems: () => { getSharedListItemsCalled = true; },
            match: { params: { id: 1 } }
        };

        return shallow(<SharedListItems {...props} />);
    }

    it('renders PreLoader correctly', () => {
        const wrapper = setupEmptyItemsList(true);
        expect(wrapper.find('PreLoader').length).toBe(1);
    });

    it('renders a wrapper div', () => {
        const wrapper = setupEmptyItemsList(false);
        expect(wrapper.find('.content').length).toBe(1);
    });

    it('handles empty description', () => {
        const wrapper = setupItemsList(false);
        expect(wrapper.find('p').html()).toContain('No description');
    });

    it('renders item list correctly', () => {
        const wrapper = setupItemsList(false);
        expect(wrapper.find('ItemList').length).toBe(1);
    });

    it('correctly maps state to props', () => {
        const state = {
            shoppingLists: {
                activeList: {}
            },
            share: {
                loading: false,
                listItems: {}
            }
        };
        const expected = {
            loading: false,
            listItems: {},
            activeList: {}
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
