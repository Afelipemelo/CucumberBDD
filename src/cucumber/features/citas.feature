
Feature: agendar citas de una veterinaria
  Este Feature es para validar el funcionamineto de un modulo para agendar citas y 
  ver el historial 


    Scenario Outline: verificar campos del formulario

        Given El formulario

        When Se envie 

        Then validar que todos los campos esten llenos

        Examples: 
            | campos          | valores |
            | mascota         | nombre   |
            | propietario     | Nope   |
            | fecha           | Nope   |
            | hora            | Nope   |
            | sistomas        | Nope   |
#   #Scenario es un ejemplo concerto de como debe comportarse el escenario o una descripcion de la historia de usuario 
#   Scenario Outline: El domingo no es viernes 
#     #Given = dado
#     Given Hoy es domingo
#     #when = cuadno
#     When Pregunto si ya es viernes 
#     #Then = Despues
#     Then Deberian decirme "No"

#     Examples:
#           | day            | answer |
#           | adres         | nombre   |
#           | Sunday         | Nope   |
#           | anything else! | Nope   |