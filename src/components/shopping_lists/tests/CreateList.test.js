import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {CreateList} from '../CreateList';

describe('Test Cases For CreateList', () => {
    function setup(loading) {
        const props = {
            handleSubmit: sinon.spy(),
            loading: loading,
            actions: { createList: sinon.spy() },
            history: { push: sinon.spy() }
        };

        return shallow(<CreateList {...props} />);
    }

    it('renders wrapper div correctly', () => {
        const wrapper = setup(false);
        expect(wrapper.find('.content').length).toBe(1);
    });
    it('renders a grid correctly', () => {
        const wrapper = setup(false);
        expect(wrapper.find('Grid').length).toBe(1);
    });
    it('changes loading status correctly', () => {
        const wrapper = setup(true);
        expect(wrapper.find('Button').prop('loading')).toEqual(true);
    });
});
