import {evaluate, getCurrent} from './fizz-buzz';

describe('fizz-buzz', () => {
  describe('evaluate', () => {
    it('should return value as string', () => {
      const actual = evaluate(4);
      expect(actual).toBe('4');
    });

    it('should return Fizz', () => {
      const actual = evaluate(3);
      expect(actual).toBe('Fizz');
    });

    it('should return Buzz', () => {
      const actual = evaluate(5);
      expect(actual).toBe('Buzz');
    });

    it('should return FizzBuzz', () => {
      const actual = evaluate(15);
      expect(actual).toBe('FizzBuzz');
    });

    it('should return Fizz if divisible by three', () => {
      const actual = evaluate(6);
      expect(actual).toBe('Fizz');
    });

    it('should return Buzz if divisible by five', () => {
      const actual = evaluate(10);
      expect(actual).toBe('Buzz');
    });

    it('should return FizzBuzz if divisible by three and five', () => {
      const actual = evaluate(30);
      expect(actual).toBe('FizzBuzz');
    });

    it('should return value if not divisible by three or five', () => {
      const actual = evaluate(8);
      expect(actual).toBe('8');
    });
  });

  describe('getCurrent', () => {
    it('should return value from server', async () => {
      fetch.mockResponse(JSON.stringify({ Value: 7 }));

      const actual = await getCurrent();
      expect(fetch).toHaveBeenCalledWith('http://10.3.10.244:9000/');
      expect(actual).toEqual({ Value: 7 });
    });

    it('should return error if server call fails', async () => {
      fetch.mockReject('not good');

      const actual = await getCurrent();
      expect(actual).toEqual('not good');
    });
  });
});
