import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import App from './App';

describe('Test Cases For App', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('renders correctly', () => {
        expect(wrapper.length).toBe(1);
    });
    it('has a wrapper div with the class landingContent', () => {
        expect(wrapper.find('.landingContent').length).toBe(1);
    });
    it('has an overlay div', () => {
        expect(wrapper.find('.overlay').length).toBe(1);
    });
    it('has a logo div', () => {
        expect(wrapper.find('.logo').length).toBe(1);
    });
});