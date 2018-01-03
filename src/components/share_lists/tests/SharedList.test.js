import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import SharedList from '../SharedList';

describe('Test Cases For SharedList', () => {
    function setup() {
        const props = {
            sharedLists: {
                sharedLists: {
                    "total": 2,
                    "next_page": "None",
                    "previous_page": "None",
                    "friends": [
                        {
                            "email": "ace@gmail.com",
                            "id": 2,
                            "username": "Ace"
                        },
                        {
                            "email": "user1@gmail.com",
                            "id": 15,
                            "username": "User 1"
                        }
                    ],
                }
            },
            handleRemove: () => {}
        };

        return shallow(<SharedList {...props} />);
    }

    it('renders item group div correctly', () => {
        const wrapper = setup();
        expect(wrapper.find('ItemGroup').length).toBe(1);
    });

    it('renders an item div correctly', () => {
        const wrapper = setup();
        expect(wrapper.dive().find('.items').length).toBe(1);
    });
});
