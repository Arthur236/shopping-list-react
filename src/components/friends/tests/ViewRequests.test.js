import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {ViewRequests} from '../ViewRequests';

describe('Test Cases For ViewRequests', () => {
    function setupEmptyRequestList(loading) {
        const props = {
            friendRequests: {},
            loading: loading,
            actions: {
                getFriendRequests: sinon.spy(),
                acceptRequest: sinon.spy()
            }
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
            actions: {
                getFriendRequests: sinon.spy(),
                acceptRequest: sinon.spy()
            }
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
});
