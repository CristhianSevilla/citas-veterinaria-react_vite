import { useState, useEffect } from "react"
import { Formulario } from "./components/Formulario"
import Header from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Revisar si hay datos en el localStorage
  //Nota se puede usar multiples useEffects en un componente, pero estos se iran ejecutando cde arriba hacia abajo
  useEffect(() => {
    const obtenerLS = () => {
      //Devuelve un string y con json lo convertimos a un array
        const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
        setPacientes(pacientesLS);
    }

    obtenerLS();
  
  }, []); //Si el orchete se deja vacio significa que solo se va a ejecutar una sola vez


  //Almacenar datos en la local storage
  //Solo almacena strings
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  //eliminar paciente
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <Header />
      <div className="mt-16 md:flex">
        <Formulario
          // Se pasa el arreglo de pacientes a el formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
