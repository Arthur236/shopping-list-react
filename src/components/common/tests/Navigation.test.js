import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import { Navigation } from '../Navigation';

describe('Test Cases For Navigation', () => {
    let wrapper = null;

    function setupShallow(login) {
        const props = {
            loggedIn: login,
            logout: sinon.spy()
        };

        return shallow(<Navigation {...props} />);
    }

    it('renders a wrapper div', () => {
        const wrapper = setupShallow(false);
        expect(wrapper.find('.borderless').length).toBe(1);
    });
});
