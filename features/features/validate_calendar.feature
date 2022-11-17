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
       
