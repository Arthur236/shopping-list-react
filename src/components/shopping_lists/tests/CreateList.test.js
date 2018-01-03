import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {CreateList, mapStateToProps} from '../CreateList';

let submitCalled, createListCalled, pushCalled = false;

describe('Test Cases For CreateList', () => {
    function setup(loading) {
        const props = {
            handleSubmit: () => { submitCalled = true; },
            loading: loading,
            createList: () => { createListCalled = true; },
            history: { push: () => { pushCalled = true; } }
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

    it('correctly maps state to props', () => {
        const state = {
            shoppingLists: {
                loading: false
            }
        };
        const expected = {
            loading: false
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
