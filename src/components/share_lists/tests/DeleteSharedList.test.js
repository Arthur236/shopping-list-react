import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import DeleteSharedList from '../DeleteSharedList';

let handleRemoveCalled = false;

describe('Test Cases For DeleteSharedList', () => {
    function setup() {
        const props = {
            sharedList: {
                id: 1,
                name: "Item 1",
                description: "Some text"
            },
            handleRemove: () => { handleRemoveCalled = true; }
        };

        return shallow(<DeleteSharedList {...props} />);
    }

    it('renders modal div correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('Modal').length).toBe(1);
    });

    it('calls handle remove', () => {
        const wrapper = setup();
        wrapper.find('Button').last().simulate('click');

        expect(handleRemoveCalled).toBe(true);
    });
});
