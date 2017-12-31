import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { Navigation, mapStateToProps } from '../Navigation';

let logoutCalled = false;

describe('Test Cases For Navigation', () => {
    function setupShallow(login) {
        const props = {
            loggedIn: login,
            logout: () => { logoutCalled = true; }
        };

        return shallow(<Navigation {...props} />);
    }

    it('renders a wrapper div', () => {
        const wrapper = setupShallow(false);
        expect(wrapper.find('.borderless').length).toBe(1);
    });

    it('renders a logout link', () => {
        const wrapper = setupShallow(true);
        expect(wrapper.find('#logout').length).toBe(1);
    });

    it('can logout if user clicks on logout link', () => {
        const wrapper = setupShallow(true);
        wrapper.find('#logout').simulate('click', { preventDefault() {} });
        expect(logoutCalled).toBe(true);
    });

    it('correctly maps state to props', () => {
        const state = {
            auth: {
                loggedIn: false
            }
        };
        const expected = {
            loggedIn: false
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
