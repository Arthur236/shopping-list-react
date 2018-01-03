import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import DeleteList from '../DeleteList';

let handleDeleteCalled = false;

describe('Test Cases For DeleteList', () => {
    function setup() {
        const props = {
            shoppingList: {
                id: 1,
                name: "Item 1",
                description: "Some text"
            },
            handleDelete: () => { handleDeleteCalled = true; }
        };

        return shallow(<DeleteList {...props} />);
    }

    it('renders modal div correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('Modal').length).toBe(1);
    });

    it('calls handle delete', () => {
        const wrapper = setup();
        wrapper.find('Button').last().simulate('click');

        expect(handleDeleteCalled).toBe(true);
    });
});
