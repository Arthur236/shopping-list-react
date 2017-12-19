import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {ShoppingLists} from '../ShoppingLists';

describe('Test Cases For ShoppingLists', () => {
    function setupEmptyShoppingLists(loading) {
        const props = {
            shoppingLists: {},
            loading: loading,
            actions: {
                getLists: sinon.spy(),
                deleteList: sinon.spy()
            }
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
            actions: {
                getLists: sinon.spy(),
                deleteList: sinon.spy()
            }
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
});
