function isFizz(value) {
  return value % 3 === 0;
}

function isBuzz(value) {
  return value % 5 === 0;
}

export function evaluate(value) {
  if (isFizz(value) && isBuzz(value))
    return 'FizzBuzz';

  if (isBuzz(value)) {
    return 'Buzz';
  }
  return isFizz(value) ? 'Fizz': `${value}`;
}

export async function getCurrent() {
  return await fetch('http://localhost:9000/')
    .then(res => res.body);
}