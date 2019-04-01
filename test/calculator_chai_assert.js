var assert = require("chai").assert;
var calculator = require("../app/calculator");

describe("Test de la calculadora usando ASSERT (Afirma) interface usando chai: ", function(){
    describe("Check function calculator: ", function() {
        it("Check del resultado usando assert.equal(value, value): ", function() {
            result = calculator.addTested("text");
            assert.equal(result, "text tested");
        });
        it("Check del resultado usando assert.typeOf(value, value): ", function(){
            result = calculator.addTested("text");
            assert.typeOf(result, "string");
        });
        it("Check del resultado usando assert.lengthOf(value, value): ", function(){
            result = calculator.addTested("text");
            assert.lengthOf(result,11);
        });
    });
});