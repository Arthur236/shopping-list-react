import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {CreateItem} from '../CreateItem';

describe('Test Cases For CreateItem', () => {
    function setup(loading) {
        const id = 3;
        const props = {
            match: { params: { id } },
            actions: { createItem: sinon.spy() },
            handleSubmit: sinon.spy(),
            loading: loading
        };

        return shallow(<CreateItem {...props} />);
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
