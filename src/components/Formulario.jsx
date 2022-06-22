import { useState, useEffect } from "react"
import Error from "./Error";

// aplicamos destructuring a set pacientes
export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  //Crear state
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {

    //Si el objeto tiene mas de una llave entonces seteamos las funciones
    //para llevarals al formulario
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }

  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar Formulario
    if ([mascota, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    //Objeto Paciente
    const objPaciente = {
      mascota,
      propietario,
      email,
      fecha,
      sintomas,
    };

    //Condicional para saber si se va aeditar un registro o a crer uno nuevo
    if (paciente.id) {
      //Editar paciente
      objPaciente.id = paciente.id;
      // pacientesActualizados = nuevo paciente actualizado
      // pacienteState = paciente actualizado en memoria
      // objPaciente = objeto con el paciente actualizado
      // entonces comparamos si el id del paciente iterado es igual al del paciente editado retornamos el obj con el paciente editado y si no lo encuentra retorna todo tal cueal estaba
      const pacientesActualizados= pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState);

      //Agregamos todos los pacientes actualizados
      setPacientes(pacientesActualizados);

      //seteamos a un obj vacioa al statePaciente para limpiarlo
      setPaciente({});

    } else {
      //Nuevo Registro
      //Generar el id del nuevo paciente
      objPaciente.id = generarId();
      //Llenar el arreglo de pacientes
      setPacientes([...pacientes, objPaciente]);

    }


    //reiniciar el formulario
    setMascota('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 m-7 ">
      <h2 className="font-black text-2xl md:text-3xl text-center">Nuevo Paciente</h2>

      <p className="text-center text-xl mt-5">Agrega <span className="text-indigo-600 font-bold">Pacientes</span> para
        Administralos
      </p>

      <form
        onSubmit={handleSubmit}
        className=" bg-gray-200 shadow-xl rounded-lg py-10 px-5 mt-5 mb-16">

        {/* Un ternario, si error = true entonces
          pasa el prop con todo el html, otra forma de pasar un prop */}
        {error && <Error><p>Llena todos los campos</p></Error>}

        <div className="mb-5">
          <label htmlFor="mascota" className="block font-bold text-gray-700 uppercase">Nombre Mascota:</label>
          <input
            id="mascota"
            type="text"
            placeholder="Ej. Pepina"
            className=" px-2 py-1 border-2 w-full mt-2 placeholder-amber-600 text-amber-600 rounded-md"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block font-bold text-gray-700 uppercase">Nombre Propietario:</label>
          <input
            id="propietario"
            type="text"
            placeholder="Ej. Cristhian"
            className="px-2 py-1 border-2 w-full mt-2 placeholder-amber-600 text-amber-600 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block font-bold text-gray-700 uppercase">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Ej. ejemplo@gmail.com"
            className="px-2 py-1 border-2 w-full mt-2 placeholder-amber-600 text-amber-600 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block font-bold text-gray-700 uppercase">Fecha de Alta:</label>
          <input
            id="alta"
            type="date"
            className="px-2 py-1 border-2 w-full mt-2 placeholder-amber-600 text-amber-600 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block font-bold text-gray-700 uppercase">Síntomas:</label>
          <textarea
            id="sintomas"
            className="px-2 py-1 border-2 w-full mt-2 placeholder-amber-600 text-amber-600 rounded-md"
            placeholder="Ej. No quiere comer, no toma agua y se la pasa durmiendo"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 rounded-md cursor-pointer transition-all"
          value={paciente.id ? 'Editar Paciete' : 'Agregar Paciente'} />
      </form>
    </div>
  )
}
