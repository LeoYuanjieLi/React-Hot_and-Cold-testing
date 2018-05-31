import React from 'react';
import {shallow, mount} from 'enzyme';

import GameBody from './gameBody';

describe('<GameBody />', () => {
    it('Render without crashing', () => {
        shallow(<GameBody />);
    })
})
