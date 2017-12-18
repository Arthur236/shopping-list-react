import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import PreLoader from '../PreLoader';

describe('Test Cases For PreLoader', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<PreLoader />);
    });

    it('renders the dimmer component', () => {
        console.log(wrapper.debug());
        expect(wrapper.find('Dimmer').length).toBe(1);
    });
});
