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
      this.validateForm =  validarCampos(string, string2, string3, string4, string5, string6)
    
    });
    Then('sabe si todos los campos estan completos {string}', function (respuesta) {
        assert.strictEqual(this.validateForm, respuesta);
      });

    //----------------------------------------------
      const fechasApartadas = ['20/10/2022','20/01/2022','20/08/2022','12/12/2022']
      
      const validadFecha = (fecha) => {
       return fechasApartadas.find((item)=> item == fecha)
      }

      When('Al seleccionar la fecha {string} se valida si está disponible', function (fecha) {
        this.validateDate = validadFecha(fecha)
      });
      Then('sabe si la fecha está disponible', function () {
          assert.ok(this.validateDate);
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