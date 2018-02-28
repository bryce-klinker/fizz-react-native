import {shallow} from 'enzyme';
import * as React from 'react';
import {FizzBuzz} from '../components/FizzBuzz';
import {FizzBuzzScreen} from './FizzBuzzScreen';

describe('FizzBuzzScreen', () => {
    it('should show fizz buzz', () => {
        const screen = shallow(<FizzBuzzScreen navigator={null} />);
        expect(screen.find(FizzBuzz).length).toBe(1);
    });
});
