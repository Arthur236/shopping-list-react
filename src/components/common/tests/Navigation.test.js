import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {Navigation} from '../Navigation';

describe('Test Cases For Navigation', () => {
    function setup() {
        const props = {
            logout: () => {}
        };

        return shallow(<Navigation {...props} />);
    }

    it('renders a wrapper div', () => {
        const wrapper = setup();
        expect(wrapper.find('.borderless').length).toBe(1);
    });

    it('renders a logout link', () => {
        const wrapper = setup();
        expect(wrapper.find('#logout').length).toBe(1);
    });
});
