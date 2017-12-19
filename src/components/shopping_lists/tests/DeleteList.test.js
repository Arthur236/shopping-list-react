import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import DeleteList from '../DeleteList';

describe('Test Cases For DeleteList', () => {
    function setup() {
        const props = {
            shoppingList: {
                id: 1,
                name: "Item 1",
                description: "Some text"
            },
            handleDelete: sinon.spy()
        };

        return shallow(<DeleteList {...props} />);
    }

    it('renders modal div correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('Modal').length).toBe(1);
    });
});
