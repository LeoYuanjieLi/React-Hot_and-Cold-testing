import React from 'react';
import {shallow, mount} from 'enzyme';
import GameBody from './gameBody';
import GuessBox from './guessBox';
import Board from './board';

describe('<GuessBox />', () => {

    it('Render without crashing', () => {
        shallow(<GuessBox guessedArray={[1,2,3]}/>);
    })

})