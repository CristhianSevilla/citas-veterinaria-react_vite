
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {mascota, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('¿Desea eliminar este paciete?');

    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
  <div className="mb-7 bg-gray-200 shadow-lg rounded-lg px-5 py-10">

        <p className="m-3 font-bold uppercase text-amber-600">Mascota: {" "} 
          <span className="font-normal normal-case text-gray-700">{mascota}</span>
        </p>
        
        <p className="m-3 font-bold uppercase text-amber-600">Propietario: {" "} 
          <span className="font-normal normal-case text-gray-700">{propietario}</span>
        </p>

        <p className="m-3 font-bold uppercase text-amber-600">Email: {" "} 
          <span className="font-normal normal-case text-gray-700">{email}</span>
        </p>

        <p className="m-3 font-bold uppercase text-amber-600">Fecha de alta: {" "} 
          <span className="font-normal normal-case text-gray-700">{fecha}</span>
        </p>

        <p className="m-3 font-bold uppercase text-amber-600">Síntomas: {" "} 
          <span className="font-normal normal-case text-gray-700">{sintomas}</span>
        </p>

        <div className="flex flex-col md:flex-row md:justify-between md:px-5 mt-10">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold rounded-lg mb-5 md:mb-0"
              // Se pone un arrow function porque se manda llamar la funcion y le pasamos un argumente, sino le ponemos el arrow la function se llama sin esperar el click, y si la funcion no llevara argumento se manda a llamar sin el arrow
              onClick={() => setPaciente(paciente)}
            >
              Editar
            </button>

          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white uppercase font-bold rounded-lg"
            onClick={handleEliminar}
            >
              Eliminar
            </button>
        </div>

      </div>
  )
}

export default Paciente