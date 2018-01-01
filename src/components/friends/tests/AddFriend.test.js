import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {AddFriend, mapStateToProps} from '../AddFriend';

let sendRequestCalled, searchUserCalled = false;

describe('Test Cases For AddFriend', () => {
    function setup(loading) {
        const props = {
            users: {
                "friends": [
                    {
                        "id": 1,
                        "username": "User 1"
                    }
                ]
            },
            loading: loading,
            sendRequest: () => { sendRequestCalled = true; },
            searchUser: () => { searchUserCalled = true; }
        };

        return shallow(<AddFriend {...props} />);
    }

    function setupUndefinedUsers(loading) {
        const props = {
            loading: loading,
            sendRequest: () => { sendRequestCalled = true; },
            searchUser: () => { searchUserCalled = true; }
        };

        return shallow(<AddFriend {...props} />);
    }

    it('renders a wrapper div', () => {
        const wrapper = setup(false);
        expect(wrapper.find('.content').length).toBe(1);
    });

    it('renders user list correctly', () => {
        const wrapper = setup(true);
        expect(wrapper.find('UserList').length).toBe(1);
    });

    it('handles undefined users object', () => {
        const wrapper = setupUndefinedUsers(true);
        expect(wrapper.find('div').last().html()).toContain('Search for');
    });

    it('does not search for users without value', () => {
        const wrapper = setup(true);
        const input = wrapper.find('Search').dive().find('input');

        input.simulate('change', { target: {} });

        expect(searchUserCalled).toBe(false);
    });

    it('can send a friend request', () => {
        const wrapper = setup(true);
        const form = wrapper.find('UserList').dive().find('form');
        const input = form.find('input').props();

        form.simulate('submit', { target: { friend_id: input }, preventDefault() {} });

        expect(sendRequestCalled).toBe(true);
    });

    it('correctly maps state to props', () => {
        const state = {
            users: {
                loading: false,
                users: {}
            }
        };
        const expected = {
            loading: false,
            users: {"loading": false, "users": {}}
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
