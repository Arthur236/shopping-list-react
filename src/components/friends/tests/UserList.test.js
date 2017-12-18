import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import UserList from '../UserList';

describe('Test Cases For UserList', () => {
    function setup() {
        const props = {
            users: {
                "total": 2,
                "next_page": "None",
                "previous_page": "None",
                "friends": [
                    {
                        "email": "ace@gmail.com",
                        "id": 2,
                        "username": "Ace"
                    },
                    {
                        "email": "user1@gmail.com",
                        "id": 15,
                        "username": "User 1"
                    }
                ],
            },
            handleAdd: sinon.spy()
        };

        return shallow(<UserList {...props} />);
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
