import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import DeleteItem from '../DeleteItem';

describe('Test Cases For DeleteItem', () => {
    function setup() {
        const props = {
            shoppingList: 2,
            item: {
                id: 1,
                name: "Item 1"
            },
            handleDelete: sinon.spy()
        };

        return shallow(<DeleteItem {...props} />);
    }

    it('renders modal div correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('Modal').length).toBe(1);
    });
});
