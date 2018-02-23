const {setValue} = require('./fake-web-service/fake-server');

describe('Show Fizz Buzz', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

  describe('Given a number web service that returns 6 in a JSON object', () => {
    beforeEach(() => {
      setValue(6)
    })

    describe('When I tap the FizzBuzz button', () => {

      beforeEach(async () => {
        await element(by.text('FizzBuzz')).tap();
      })

      it('Then I see Fizz', async () => {
        await expect(element(by.id('FizzBuzzLabel'))).toHaveText('Fizz');
      })
    })
  });
})