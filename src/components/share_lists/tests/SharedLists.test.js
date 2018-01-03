import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {SharedLists, mapStateToProps} from '../SharedLists';

let getSharedListsCalled, removeSharedListCalled = false;

describe('Test Cases For SharedLists', () => {
    function setupEmptySharedLists(loading) {
        const props = {
            share: {},
            loading: loading,
            getSharedLists: () => {
                getSharedListsCalled = true;
            },
            removeSharedList: () => {
                removeSharedListCalled = true;
            }
        };

        return shallow(<SharedLists {...props} />);
    }

    function setupSharedLists(loading) {
        const props = {
            share: {
                "total": 1,
                "next_page": "None",
                "previous_page": "None",
                "shared_lists": [
                    {
                        "id": 1,
                        "name": "List 1",
                        "description": "Some text"
                    }
                ]
            },
            loading: loading,
            getSharedLists: () => {
                getSharedListsCalled = true;
            },
            removeSharedList: () => {
                removeSharedListCalled = true;
            }
        };

        return shallow(<SharedLists {...props} />);
    }

    it('renders PreLoader correctly', () => {
        const wrapper = setupEmptySharedLists(true);
        expect(wrapper.find('PreLoader').length).toBe(1);
    });

    it('renders a wrapper div', () => {
        const wrapper = setupEmptySharedLists(false);
        expect(wrapper.find('.content').length).toBe(1);
    });

    it('renders friend list correctly', () => {
        const wrapper = setupSharedLists(false);
        expect(wrapper.find('SharedList').length).toBe(1);
    });

    it('correctly maps state to props', () => {
        const state = {
            share: {
                loading: false,
                share: {}
            }
        };
        const expected = {
            loading: false,
            share: {}
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
