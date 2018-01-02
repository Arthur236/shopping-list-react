import expect from 'expect';
import {shallow, mount} from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import {default as EditIT, EditItem, mapStateToProps} from '../EditItem';
import configureStore from '../../../store/configureStore';

const store = configureStore();
let getSingleItemCalled, editItemCalled, changeCalled, onSaveCalled, submitCalled = false;

describe('Test Cases For EditItem', () => {
    function setup(loading) {
        const id = 3;
        const props = {
            activeItem: {
                id: 2,
                name: "Item 1",
                quantity: 90,
                unit_price: 100
            },
            getSingleItem: () => { getSingleItemCalled = true; },
            editItem: () => { editItemCalled = true; },
            match: { params: { id } },
            change: () => { changeCalled = true; },
            initialValues: {
                id: 2,
                name: "Item 1",
                quantity: 90,
                unit_price: 100
            },
            handleSubmit: () => { submitCalled = true; },
            loading: loading,
            onSave: () => { onSaveCalled = true; }
        };

        return shallow(<EditItem {...props} />);
    }

    function setupMount(loading) {
        const id = 3;
        const props = {
            activeItem: {
                id: 2,
                name: "Item 1",
                quantity: 90,
                unit_price: 100
            },
            getSingleItem: () => { getSingleItemCalled = true; },
            editItem: () => { editItemCalled = true; },
            match: { params: { id } },
            change: () => { changeCalled = true; },
            initialValues: {
                id: 2,
                name: "Item 1",
                quantity: 90,
                unit_price: 100
            },
            handleSubmit: () => { submitCalled = true; },
            loading: loading,
            onSave: () => { onSaveCalled = true; }
        };

        return mount(<Provider store={store}>
            <div>
                <Notifications />
                <Router>
                    <EditIT {...props} />
                </Router>
            </div>
        </Provider>);
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
            listItems: {
                loading: false,
                activeItem: {},
                initialValues: {}
            }
        };
        const expected = {
            loading: false,
            activeItem: {},
            initialValues: {}
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
