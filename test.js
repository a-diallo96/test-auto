

const assert = require('chai').assert;

function somme(nombre1 = 0, nombre2 = 0) {
    if (typeof nombre1 !== 'number' || typeof nombre2 !== 'number') {
      throw new Error("paramètre invalide");
    }
    return nombre1 + nombre2;
  }
  

describe('somme', function() {
  it('Avec les valeurs de paramètres 2 et 3, la fonction somme() est sensée retourner la valeur 5', function() {
    assert.equal(somme(2, 3), 5);
  });

  it('Avec les valeurs de paramètres 5 et undefined, la fonction somme() est sensée retourner la valeur 5', function() {
    assert.equal(somme(5, undefined), 5);
  });

  it('Avec les valeurs de paramètres "a" et 2, la fonction somme() est sensée lever une exception avec le message "paramètre invalide"', function() {
    assert.throws(() => somme("a", 2), Error, "paramètre invalide");
  });
});
