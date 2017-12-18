import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {AddFriend} from '../AddFriend';

describe('Test Cases For AddFriend', () => {
    function setup(loading) {
        const props = {
            users: {},
            loading: loading,
            friendActions: {sendRequest: sinon.spy()},
            userActions: {searchUser: sinon.spy()}
        };

        return shallow(<AddFriend {...props} />);
    }

    function setupUndefinedUsers(loading) {
        const props = {
            loading: loading,
            friendActions: {sendRequest: sinon.spy()},
            userActions: {searchUser: sinon.spy()}
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
});
