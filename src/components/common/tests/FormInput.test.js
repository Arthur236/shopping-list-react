import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import FormInput, {renderField} from '../FormInput';

const props = {
    type: 'text',
    name: 'username',
    placeholder: 'Username',
    icon: 'user',
    required: 'required'
};

describe('Run tests on FormInput component', () => {
    const wrapper = shallow(<FormInput {...props} />);

    it('renders input correctly', () => {
       expect(wrapper.length).toBe(1);
    });
    it('has correct type', () => {
       expect(wrapper.props().type).toBe("text");
    });
    it('has correct name', () => {
        expect(wrapper.props().name).toBe("username");
    });
    it('has correct placeholder', () => {
        expect(wrapper.props().placeholder).toBe("Username");
    });
    it('has correct icon', () => {
        expect(wrapper.props().icon).toBe("user");
    });
    it('has correct required', () => {
        expect(wrapper.props().required).toBe("required");
    });
});
