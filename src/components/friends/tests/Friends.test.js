import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {Friends, mapStateToProps} from '../Friends';

let getFriendsCalled, removeFriendCalled = false;

describe('Test Cases For Friends', () => {
    function setupEmptyFriendList(loading) {
        const props = {
            friends: {
                friends: {}
            },
            loading: loading,
            getFriends: () => { getFriendsCalled = true; },
            removeFriend: () => { removeFriendCalled = true; }
        };

        return shallow(<Friends {...props} />);
    }

    function setupFriendList(loading) {
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
                        }
                    ]
                }
            },
            loading: loading,
            getFriends: () => { getFriendsCalled = true; },
            removeFriend: () => { removeFriendCalled = true; }
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

    it('handles empty friend list', () => {
        const wrapper = setupEmptyFriendList(false);
        expect(wrapper.find('p').html()).toContain('You currently have no friends');
    });

    it('can remove a friend', () => {
        const wrapper = setupFriendList(false);
        const btn = wrapper.find('FriendList').dive()
            .find('CardGroup').dive()
            .find('RemoveFriend').dive()
            .find('.right');

        btn.simulate('click');

        expect(removeFriendCalled).toBe(true);
    });

    it('correctly maps state to props', () => {
        const state = {
            friends: {
                loading: false,
                users: {}
            }
        };
        const expected = {
            loading: false,
            friends: {"loading": false, "users": {}}
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
