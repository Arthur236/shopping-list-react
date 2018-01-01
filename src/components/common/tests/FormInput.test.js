import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import FormInput, {renderField} from '../FormInput';

let touched, error, handleSubmit;

describe('Run tests on FormInput component', () => {
    beforeEach(() => {
        touched = false;
        error = null;
        handleSubmit = () => {
        };
    });

    const buildSubject = () => {
        const props = {
            type: 'text',
            name: 'username',
            placeholder: 'Username',
            icon: 'user',
            required: 'required',
            // The real redux form has many properties for each field,
            // including onChange and onBlur handlers. We only need to provide
            // the ones that will change the rendered output.
            fields: {
                username: {
                    value: '',
                    touched: touched,
                    error: error
                }
            },
            handleSubmit
        };
        return shallow(<FormInput {...props}/>);
    };

    it('renders input correctly', () => {
        let wrapper = buildSubject();
        expect(wrapper.length).toBe(1);
    });

    it('has correct type', () => {
        let wrapper = buildSubject();
        expect(wrapper.props().type).toBe("text");
    });

    it('has correct name', () => {
        let wrapper = buildSubject();
        expect(wrapper.props().name).toBe("username");
    });

    it('has correct placeholder', () => {
        let wrapper = buildSubject();
        expect(wrapper.props().placeholder).toBe("Username");
    });

    it('has correct icon', () => {
        let wrapper = buildSubject();
        expect(wrapper.props().icon).toBe("user");
    });

    it('has correct required', () => {
        let wrapper = buildSubject();
        expect(wrapper.props().required).toBe("required");
    });
});

describe('Render Field', () => {
    let subject;

    context('when not in an error state', () => {
        it('renders the input without error message', () => {
            const input = { name: 'email', value: 'user1@gmail.com' };
            const label = 'Email';
            const meta = { touched: true };
            const element = renderField({ input, label, meta });
            subject = shallow(element);
            const errorBlock = subject.find('.errorText').first();

            expect(errorBlock.text()).toBe('');
        });
    });

    context('when in an error state', () => {
        it('renders an error message for the input', () => {
            const input = { name: 'email', value: '' };
            const label = 'Email';
            const meta = { touched: true, error: 'Required' };
            const element = renderField({ input, label, meta });
            subject = shallow(element);
            const errorBlock = subject.find('.errorText').first();

            expect(meta.error).toContain('Required');
            expect(errorBlock.text()).toContain('Required');
        });
    });
});
