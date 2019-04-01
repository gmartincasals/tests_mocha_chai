var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("Test de la calculadora usando EXPECT (Espera) interface usando chai: ", function(){
    describe("Check la funcion calculator :", function(){
        it("Check del resultado usando: expect(value).to.equal('value'): ", function(){
            result = calculator.addTested("text");
            expect(result).to.equal("text tested");
        });
        it("Check del resultado usando: expect(value).to.be.a('value'): ", function(){
            result = calculator.addTested("text");
            expect(result).to.be.a('string');
        });
        it("Check del resultado usando: expect(value).to.have.lengthOf('value'): ", function(){
            result = calculator.addTested("text");
            expect(result).to.have.lengthOf(11);
        });
    });
});