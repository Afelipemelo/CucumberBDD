
 Feature: agendar citas de una veterinaria
   Este Feature es para validar el funcionamineto de un modulo para agendar citas y 
   ver el historial 


     Scenario Outline: verificar campos del formulario 

         Given El usuario

         When Genera una cita y envia "<mascota>" "<propietario>" "<fecha>" "<hora>" "<Sintomas>" "<estado>"

         Then sabe si todos los campos estan completos "<estado>"

      Examples:

        | mascota | propietario | fecha        |hora   | Sintomas |estado |
        | REX     | pepito     | 20/10/2022  |  7:00 | malito       |true   |
        | pepa    |            | 20/10/2022   | 7:00 | bueno    |false  |
       

#-------------------

