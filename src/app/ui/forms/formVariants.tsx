

export function RegistrationFormClassic(){

    return(
        <>
        <div className="w-64 h-72 bg-neutral-100 rounded-md mx-auto border border-stone-200">
            <div className="bg-sky-300 h-fit p-2 rounded-md">
                <h1 className="text-xl text-white text-center">Registrace</h1>
            </div>
            <form action="" className="flex flex-col p-4">
                <label htmlFor="firstName">Jméno:</label>
                <input size={10} className="w-48 mb-4 rounded-sm" type="text" id="firstName" name="firstName"/>
                <label htmlFor="lastName">Příjmení:</label>
                <input size={10} className="w-48 mb-4 rounded-sm" type="text" id="lastName" name="lastName"/>
                <label htmlFor="email">E-mailová adresa:</label>
                <input size={10} className="w-48 mb-4 rounded-sm" type="text" id="email" name="email"/>
                <label htmlFor=""></label>
            </form>
        </div>
        </>
    );
}

export function RegistrationFormModern(){

    return(
        <>
        <div>
            <form action=""></form>
        </div>
        </>
    );
}

export function RegistrationFormSquares(){

    return(
        <>
        <div>
            <form action=""></form>
        </div>
        </>
    );
}