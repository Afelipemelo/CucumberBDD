const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

    // const validarCampos = (string, string2, string3, string4, string5) => {
    //     if(string.trim() == "" || string2.trim() == "" || int == 0 || int2 == 0 || string3.trim() == ""){
    //             return "false"
    //     }else {
    //             return "true"
    //     }
    // }
    // Given('El usuario', function () {
    // // Write code here that turns the phrase above into concrete actions
    //     return 'pending';
    // });

    // When('Genera una cita y envia {string} {string} {string} {string} {string}', function (string, string2, string3, string4, string5) {
    //   this.ejemplo =  validarCampos(string, string2, string3, string4, string5)
    // });
    // Then('sabe si todos los campos estan completos {string}', function (string) {
    //     assert.strictEqual(this.actualAnswer, expectedAnswer);
    //   });
    function isItFriday(today) {
        if (today === "Friday") {
          return "TGIF";
        } else {
          return "Nope";
        }
      }
      
      Given('today is {string}', function (givenDay) {
        this.today = givenDay;
      });
      
      When('I ask whether it\'s Friday yet', function () {
        this.actualAnswer = isItFriday(this.today);
      });
      
      Then('I should be told {string}', function (expectedAnswer) {
        assert.strictEqual(this.actualAnswer, expectedAnswer);
      });