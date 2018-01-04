import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import FriendList from '../FriendList';

describe('Test Cases For FriendList', () => {
    function setup() {
        const props = {
            friends: {
                "total": 1,
                "next_page": "None",
                "previous_page": "None",
                "friends": [
                    {
                        "email": "user3@gmail.com",
                        "id": 20,
                        "username": "User 3"
                    },
                    {
                        "email": "user4@gmail.com",
                        "id": 21,
                        "username": "User 4"
                    }
                ]
            },
            removeFriend: sinon.spy()
        };

        return shallow(<FriendList {...props} />);
    }

    it('renders item group div correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('ItemGroup').length).toBe(1);
    });

    it('renders an item div correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('ItemGroup').dive()
            .find('.items').length).toBe(1);
    });
});
