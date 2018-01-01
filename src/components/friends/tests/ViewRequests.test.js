import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {ViewRequests, mapStateToProps} from '../ViewRequests';

let getFriendRequestsCalled, acceptRequestCalled = false;

describe('Test Cases For ViewRequests', () => {
    function setupEmptyRequestList(loading) {
        const props = {
            friendRequests: {},
            loading: loading,
            getFriendRequests: () => { getFriendRequestsCalled = true; },
            acceptRequest: () => { acceptRequestCalled = true; }
        };

        return shallow(<ViewRequests {...props} />);
    }

    function setupRequestList(loading) {
        const props = {
            friendRequests: {
                "total": 2,
                "next_page": "None",
                "previous_page": "None",
                "friend_requests": [
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
                ]
            },
            loading: loading,
            getFriendRequests: () => { getFriendRequestsCalled = true; },
            acceptRequest: () => { acceptRequestCalled = true; }
        };

        return shallow(<ViewRequests {...props} />);
    }

    it('renders PreLoader correctly', () => {
        const wrapper = setupRequestList(true);
        expect(wrapper.find('PreLoader').length).toBe(1);
    });

    it('renders a wrapper div', () => {
        const wrapper = setupRequestList(false);
        expect(wrapper.find('.content').length).toBe(1);
    });

    it('renders request list correctly', () => {
        const wrapper = setupRequestList(false);
        expect(wrapper.find('RequestList').length).toBe(1);
    });

    it('handles empty request list correctly', () => {
        const wrapper = setupEmptyRequestList(false);
        expect(wrapper.find('p').html()).toContain('You currently');
    });

    it('accepts friend requests', () => {
        const wrapper = setupRequestList(false);
        const btn = wrapper.find('RequestList').dive()
            .find('CardGroup').dive()
            .find('button').first();
        btn.simulate('click');

        expect(acceptRequestCalled).toBe(true);
        expect(getFriendRequestsCalled).toBe(true);
    });

    it('correctly maps state to props', () => {
        const state = {
            friends: {
                loading: false,
                friendRequests: {}
            }
        };
        const expected = {
            loading: false,
            friendRequests: {}
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
