import React from 'react'
import PropTypes from "prop-types";

const Cita = ({cita, eliminarCita}) => (
    //ASDG
    <div className='cita'>
        <p>Mascota:<span> {cita.mascota}</span></p>
        <p>Dueño:<span></span>{cita.propietario}</p>
        <p>Fecha:<span></span>{cita.fecha}</p>
        <p>Hora:<span></span>{cita.hora}</p>
        <p>Sintomas:<span>{cita.sintomas}</span></p>

        <button className='button eliminar u-full-width' onClick={()=>eliminarCita(cita.id)}>
            Eliminar
        </button>
    </div>

);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;