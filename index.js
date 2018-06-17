const app = "I don't do much."

var kittens = [
  'Milo',
  'Otis',
  'Garfield'
]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var newKittens = [...kittens, name];
}

function prependKitten(name) {
  var newKittens = [name, ...kittens];
}

function removeLastKitten(name) {
  var newKittens = kittens.slice(-1);
}

function removeFirstKitten(name) {
  var newKittens =  kittens.slice(0);
}
