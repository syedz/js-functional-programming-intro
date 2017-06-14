/*
  High-order functions are functions that can take other functions as inputs.
  Or a function that can return a function as it's output.

  Functions are treated as objects.
*/

function makeAdjectifier(adjective) {
  return function(string) {
    return adjective + ' ' + string;
  };
}

var coolifier = makeAdjectifier('cool');
console.log(coolifier('conference'));