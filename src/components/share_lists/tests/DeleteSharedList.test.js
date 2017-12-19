import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import DeleteSharedList from '../DeleteSharedList';

describe('Test Cases For DeleteSharedList', () => {
    function setup() {
        const props = {
            sharedList: {
                id: 1,
                name: "Item 1",
                description: "Some text"
            },
            handleRemove: sinon.spy()
        };

        return shallow(<DeleteSharedList {...props} />);
    }

    it('renders modal div correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('Modal').length).toBe(1);
    });
});
