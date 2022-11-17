const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

    const validarCampos = (campo1, campo2 , campo3, campo4, campo5, campo6) => {
        if(campo1 == "" || campo2 == "" || campo3 == "" || campo4 == "" || campo5 == "" || campo6  == ""){
            return 'false'
        }else {
            return 'true'
        }
    }

    Given('El usuario', function () {    
    });

    When('Genera una cita y envia {string} {string} {string} {string} {string} {string}', function (string, string2, string3, string4, string5, string6) {
      this.ejemplo =  validarCampos(string, string2, string3, string4, string5, string6)
    
    });
    Then('sabe si todos los campos estan completos {string}', function (respuesta) {
        assert.strictEqual(this.ejemplo, respuesta);
      });


      Given('El usuario', function () {    
      });
  
      When('Selecciona una fecha para validar {string}', function (string) {
        //this.ejemplo =  validarCampos(string, string2, string3, string4, string5, string6)
      
      });
      Then('sabe si todos los campos estan completos {string}', function (respuesta) {
          assert.strictEqual(this.ejemplo, respuesta);
        });
















    // function isItFriday(today) {
    //     if (today === "Friday") {
    //       return "TGIF";
    //     } else {
    //       return "Nope";
    //     }
    //   }
      
    //   Given('today is {string}', function (givenDay) {
    //     this.today = givenDay;
    //   });
      
    //   When('I ask whether it\'s Friday yet', function () {
    //     this.actualAnswer = isItFriday(this.today);
    //   });
      
    //   Then('I should be told {string}', function (expectedAnswer) {
    //     assert.strictEqual(this.actualAnswer, expectedAnswer);
    //   });