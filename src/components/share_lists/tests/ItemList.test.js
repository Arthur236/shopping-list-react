import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import ItemList from '../ItemList';

describe('Test Cases For ItemList', () => {
    function setup() {
        const props = {
            listItems: {
                "total": 1,
                "next_page": "None",
                "previous_page": "None",
                "shared_list_items": [
                    {
                        "date_created": "Tue, 19 Dec 2017 09:38:11 GMT",
                        "date_modified": "Tue, 19 Dec 2017 09:38:11 GMT",
                        "id": 1,
                        "name": "Item 1",
                        "quantity": 9.0,
                        "unit_price": 600.0
                    }
                ]
            },
            handleDelete: sinon.spy()
        };

        return shallow(<ItemList {...props} />);
    }

    function setupEmpty() {
        const props = {
            listItems: {
                "total": 1,
                "next_page": "None",
                "previous_page": "None",
                "shared_list_items": []
            },
            handleDelete: sinon.spy()
        };

        return shallow(<ItemList {...props} />);
    }

    it('renders tr correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('tr').length).toBe(2);
    });

    it('renders td correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('td').length).toBe(4);
    });

    it('handles empty list items', () => {
        const wrapper = setupEmpty();
        expect(wrapper.find('td').html()).toContain('This list has no items');
    });
});
