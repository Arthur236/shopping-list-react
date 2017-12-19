import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {Items} from '../Items';

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
            actions: {
                getListItems: sinon.spy(),
                deleteItem: sinon.spy()
            },
            match: { params: { id: 1 } }
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
            actions: {
                getListItems: sinon.spy(),
                deleteItem: sinon.spy()
            },
            match: { params: { id: 1 } }
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
});
