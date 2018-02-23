import 'react-native';
import React from 'react';
import FizzBuzz from './FizzBuzz';
import {shallow} from "enzyme";

describe('FizzBuzz', () => {
    it('should get fizz buzz value', () => {
        let gotValue = false;

        const rendered = shallow(<FizzBuzz getValue={() => gotValue = true}/>);
        console.log(rendered);
        rendered.find('Button').simulate('click', null);
        expect(gotValue).toBe(true);
    })
})

