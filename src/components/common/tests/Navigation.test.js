import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { Navigation } from '../Navigation';

describe('Test Cases For Navigation', () => {
    let wrapper = null;

    function setup(login) {
        const props = {
            loggedIn: login,
            logout: () => {}
        };

        return wrapper = shallow(<Navigation {...props} />);
    }

    it('renders a wrapper div', () => {
        const wrapper = setup(false);
        expect(wrapper.find('.borderless').length).toBe(1);
    });
});
