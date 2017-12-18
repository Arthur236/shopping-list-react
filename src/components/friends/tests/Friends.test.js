import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {Friends} from '../Friends';

describe('Test Cases For Friends', () => {
    function setupEmptyFriendList(loading) {
        const props = {
            friends: {},
            loading: loading,
            actions: {getFriends: sinon.spy()}
        };

        return shallow(<Friends {...props} />);
    }

    function setupFriendList(loading) {
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
                    }
                ]
            },
            loading: loading,
            actions: {getFriends: sinon.spy()}
        };

        return shallow(<Friends {...props} />);
    }

    it('renders PreLoader correctly', () => {
        const wrapper = setupEmptyFriendList(true);
        expect(wrapper.find('PreLoader').length).toBe(1);
    });
    it('renders a wrapper div', () => {
        const wrapper = setupEmptyFriendList(false);
        expect(wrapper.find('.content').length).toBe(1);
    });
    it('renders friend list correctly', () => {
        const wrapper = setupFriendList(false);
        expect(wrapper.find('FriendList').length).toBe(1);
    });
});
