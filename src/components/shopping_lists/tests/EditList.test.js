import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {EditList} from '../EditList';

describe('Test Cases For EditList', () => {
    function setup(loading) {
        const id = 3;
        const props = {
            activeList: {
                id: 2,
                name: "Item 1",
                description: "Some text"
            },
            actions: {
                getSingleList: sinon.spy(),
                editList: sinon.spy()
            },
            match: { params: { id } },
            change: sinon.spy(),
            initialValues: {
                id: 2,
                name: "Item 1",
                quantity: 90,
                unit_price: 100
            },
            handleSubmit: sinon.spy(),
            loading: loading
        };

        return shallow(<EditList {...props} />);
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
