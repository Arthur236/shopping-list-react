import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import RemoveFriend from '../RemoveFriend';

describe('Test Cases For RemoveFriend', () => {
    function setup() {
        const props = {
            friend: {
                "email": "user3@gmail.com",
                "id": 20,
                "username": "User 3"
            },
            removeFriend: sinon.spy()
        };

        return shallow(<RemoveFriend {...props} />);
    }

    it('renders modal div correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('Modal').length).toBe(1);
    });
});
