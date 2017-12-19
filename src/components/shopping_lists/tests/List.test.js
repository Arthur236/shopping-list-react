import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import List from '../List';

describe('Test Cases For List', () => {
    function setup() {
        const props = {
            shoppingLists: {
                "total": 1,
                "next_page": "None",
                "previous_page": "None",
                "shopping_lists": [
                    {
                        "date_created": "Tue, 19 Dec 2017 09:38:11 GMT",
                        "date_modified": "Tue, 19 Dec 2017 09:38:11 GMT",
                        "id": 1,
                        "name": "Item 1",
                        "description": "Some text"
                    }
                ]
            },
            handleDelete: sinon.spy()
        };

        return shallow(<List {...props} />);
    }

    it('renders card group div correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('CardGroup').length).toBe(1);
    });
    it('renders a card div correctly', () => {
        const wrapper = setup();
        expect(wrapper.dive().find('.cards').length).toBe(1);
    });
});
