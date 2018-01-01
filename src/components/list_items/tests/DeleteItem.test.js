import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import DeleteItem from '../DeleteItem';

let handleDeleteCalled = false;

describe('Test Cases For DeleteItem', () => {
    function setup() {
        const props = {
            shoppingList: 2,
            item: {
                id: 1,
                name: "Item 1"
            },
            handleDelete: () => { handleDeleteCalled = true; }
        };

        return shallow(<DeleteItem {...props} />);
    }

    it('renders modal div correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('Modal').length).toBe(1);
    });

    it('calls handleDelete', () => {
        const wrapper = setup();
        wrapper.find('.right').simulate('click');
        
        expect(handleDeleteCalled).toBe(true);
    });
});
