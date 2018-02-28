import {shallow} from 'enzyme';
import * as React from 'react';

import { FizzBuzz } from './FizzBuzz';

describe('Components:FizzBuzz', () => {
    it('should get fizz buzz value', () => {
        let gotValue = false;

        const fizzBuzz = shallow(<FizzBuzz getValue={() => gotValue = true}/>);
        fizzBuzz.find('Button').simulate('press', null);
        expect(gotValue).toBe(true);
    });

    it('should display value', () => {
        const fizzBuzz = shallow(<FizzBuzz value="Fizz"/>);
        const text = fizzBuzz.find('Text');
        expect(text.dive().text()).toContain('Fizz');
    });
});
