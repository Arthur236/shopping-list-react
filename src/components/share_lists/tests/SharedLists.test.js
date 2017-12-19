import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from "sinon";
import {SharedLists} from '../SharedLists';

describe('Test Cases For SharedLists', () => {
    function setupEmptySharedLists(loading) {
        const props = {
            share: {},
            loading: loading,
            actions: {
                getSharedLists: sinon.spy(),
                removeSharedList: sinon.spy()
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
            actions: {
                getSharedLists: sinon.spy(),
                removeSharedList: sinon.spy()
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
});
