
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
 Feature: validar disponibilidad del medico
   Este Feature es para validar la disponibilidad del medico con las citas agendadas


     Scenario Outline: validar disponibilidad de fechas 

         Given El usuario

         When Al seleccionar la fecha "<fecha>" se valida si está disponible

         Then sabe si la fecha está disponible

      Examples:

        | fecha        |
        | 20/10/2022  |
        | 20/10/2022   |
