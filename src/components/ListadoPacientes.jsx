import Paciente from "./Paciente"


export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 m-7">

      {pacientes && pacientes.length ? (

        <>
          <h2 className="font-black text-2xl md:text-3xl text-center">Todos los Pacientes</h2>
          <p className="text-center text-xl mt-5 mb-5" >Administra tus <span className="text-indigo-600 font-bold" >Pacientes y citas</span></p>

          <div className="md:overflow-y-scroll md:h-screen ">

            {

              pacientes.map(paciente => (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente = {eliminarPaciente}
                />
              ))

            }

          </div>
        </>
      ) : (

        <>
          <h2 className="font-black text-2xl md:text-3xl text-center">No hay Pacientes</h2>
          <p className="text-center text-xl mt-5 mb-5" >Agrega <span className="text-indigo-600 font-bold" >Pacientes y citas</span> y se mostraran aquí</p>
        </>

      )}



    </div>
  )
}
