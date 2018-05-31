import React from 'react';
import {shallow, mount} from 'enzyme';

import Card from './card';

describe('<Card />', () => {
    it('Render without crashing', () => {
        shallow(<Card />);
    })
})
