const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

    // function validarCampos = () => {

    // }

    Given('El usuario', function () {
    // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    When('Genera una cita y envia {string} {string} {int} {int} {string}', function (string, string2, int, int2, string3) {
        if(string.trim() == "" || string2.trim() == "" || int == 0 || int2 == 0 || string3.trim() == ""){
            console.log('entre')
        }else {
            console.log('sali')
        }
    });
    Then('sabe si todos los campos estan completos {string}', function (string) {
       return string;
      });