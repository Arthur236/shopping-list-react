import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {ShareList} from '../ShareList';

describe('Test Cases For ShareList', () => {
    function setupWithFriends(loading) {
        const props = {
            friends: {
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
                }
            },
            loading: loading,
            shareActions: { shareList: sinon.spy() },
            friendActions: { getFriends: sinon.spy() },
            match: { params: { id: 1} }
        };

        return shallow(<ShareList {...props} />);
    }

    function setupWithNoFriends(loading) {
        const props = {
            friends: {
                friends: {
                    "total": 0,
                    "next_page": "None",
                    "previous_page": "None",
                    "friends": []
                }
            },
            loading: loading,
            shareActions: { shareList: sinon.spy() },
            friendActions: { getFriends: sinon.spy() },
            match: { params: { id: 1} }
        };

        return shallow(<ShareList {...props} />);
    }

    it('changes PreLoader correctly', () => {
        const wrapper = setupWithFriends(true);
        expect(wrapper.find('PreLoader').length).toBe(1);
    });
    it('renders wrapper div correctly', () => {
        const wrapper = setupWithFriends(false);
        expect(wrapper.find('.content').length).toBe(1);
    });
    it('renders friend list correctly', () => {
        const wrapper = setupWithFriends(false);
        expect(wrapper.find('FriendList').length).toBe(1);
    });
    it('handles empty friend list', () => {
        const wrapper = setupWithNoFriends(false);
        expect(wrapper.find('p').html()).toContain('You currently');
    });
});
