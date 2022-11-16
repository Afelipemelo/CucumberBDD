import React,{Fragment,useState,useEffect} from "react";
import Formulario from "./Components/Formulario";
import Cita from "./Components/Cita";

function App() {
  //citas en local storage 
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if(!citasIniciales ){
    citasIniciales = [];
  }
  //arreglo citas
  const[citas,guardarCitas]= useState(citasIniciales)
  
  //USEFECT PARA REALIZAR CIERTAS OPRECIONES PARA CUNADO EL STATE CAMIBA
  useEffect(()=>{
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas))
    }else {
      localStorage.setItem('citas',JSON.stringify([]))
    }
  },[citas])

  //funcion que tome las citas actuales y tome la nueva
  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ])
  }
  //funcion que elimina una cita or su id 
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita =>cita.id !==id);
    guardarCitas(nuevasCitas)
  }
  //mensaje condisional 
  const titulo = citas.length == 0 ? "NO HAY CITAS" : "ADMINISTRA TUS CITAS";

  return (
    <Fragment>
    <h1>Administracion de pacientes</h1>
    <div className="container"> 
      <div className="row">
        <div className="one-half column">
        <Formulario
          crearCita = {crearCita}
        />
        </div>
        <div className="one-half column">
        <h2>{titulo}</h2>
        {citas.map(cita=>(
          <Cita
            key = {cita.id}
            cita={cita}
            eliminarCita ={eliminarCita}
          />
        ))}
        </div>
      </div>
    </div>

    </Fragment>
  );
}

export default App;
