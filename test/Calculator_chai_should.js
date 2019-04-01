var should = require("chai").should();
var calculator = require("../app/calculator");

describe("Test de la calculadora usando SHOULD (Debería) interface usando chai: ", function(){
    describe("Check la funcion calculator :", function(){
        before(function() {
            value = "text"
        });
        it.skip("Check del resultado usando: value.should.equal(value): ", function(){
            result = calculator.addTested(value);
            result.should.equal("text tested");
        });
        it("Check del resultado usando: value.should.be.a(value): ", function(){
            result = calculator.addTested(value);
            result.should.be.a('string');
        });
        it("Check del resultado usando: value.should.have.lengthOf(value): ", function(){
            result = calculator.addTested(value);
            result.should.have.lengthOf(11);
        });
    });
});