import * as React from 'react';
import {FizzBuzzScreen} from "./FizzBuzzScreen";
import {shallow} from "enzyme";
import {FizzBuzz} from "../components/FizzBuzz";

describe('FizzBuzzScreen', () => {
    it('should show fizz buzz', () => {
        const screen = shallow(<FizzBuzzScreen />);
        expect(screen.find(FizzBuzz).length).toBe(1);
    })
})