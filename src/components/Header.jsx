function Header() {
    return (

        <div className=" md:flex items-center m-7">
            <div className="flex justify-end mb-2 md:mb-0">
                <img className=" h-16 w-16 md:w-24 md:h-24 md:mr-10" src="/huellas.png" alt="Huella" />
            </div>

            <h1 className="font-black text-3xl md:text-5xl text-center mx-auto md:w-2/3">Seguimiento de Pacientes {" "}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>

            <div className="mt-3 md:mt-0">
                <img className="h-16 w-16 md:w-24 md:h-24 md:ml-10" src="/huellas.png" alt="Huella" />
            </div>
        </div>
    )
}

export default Header;