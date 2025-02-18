import { Lexend_Giga } from "next/font/google";
import { useId } from "react";

const lexend = Lexend_Giga({
  weight : ['100', '400'],
  subsets : ['latin'],
  display: 'swap',
});

//implementovat react useId() na forms

export function RegistrationFormClassic(){

    return(
        <>
        <div className="w-72 h-fit bg-neutral-100 rounded-md mx-auto border border-stone-200 my-4">
            <div className="bg-sky-300 h-fit p-2 rounded-md">
                <h1 className="text-xl text-white text-center">Zaregistrujte se u nás!</h1>
            </div>
            <form action="" className="flex flex-col p-4" method="post">
                <label htmlFor="firstName1">Jméno:</label>
                <input size={10} className="px-2 w-full mb-4 rounded-md mx-auto" type="text" id="firstName1" name="firstName1"/>
                <label htmlFor="lastName1">Příjmení:</label>
                <input size={10} className="px-2 w-full mb-4 rounded-md" type="text" id="lastName1" name="lastName1"/>
                <label htmlFor="email1">E-mailová adresa</label>
                <input size={10} className="px-2 w-full mb-4 rounded-md" type="email" id="email1" name="email1"/>
                <label htmlFor="password1">Heslo:</label>
                <input size={10} className="px-2 w-full mb-4 rounded-md" type="password1" id="password1" name="password1"/>
                <div className="flex inline-flex mb-4">
                    <input type="checkbox" id="tos1"/><label htmlFor="tos1" className="pl-2 text-sm">Souhlasím s podmínkami použití.</label>
                </div>
                <div className="w-max px-2 rounded-md text-white py-1 bg-sky-300 mx-auto">
                    <input type="submit" value="Registrovat"/>
                </div>
                
                
            </form>
        </div>
        </>
    );
}

export function RegistrationFormModern(){

    return(
        <>
        <div className={`w-72 h-fit bg-neutral-100 mx-auto border border-black my-4 ${lexend.className}`}>
            <div className="bg-black h-fit p-2">
                <h1 className="text-xl text-center text-white">Zaregistrujte se u nás!</h1>
            </div>
            <form action="" className="" method="post">
                <div className="flex flex-col p-4">

                
                <label htmlFor="firstName2">Jméno:</label>
                <input size={10} className="px-2 w-full mb-4" type="text" id="firstName2" name="firstName2"/>
                <label htmlFor="lastName2">Příjmení:</label>
                <input size={10} className="px-2 w-full mb-4" type="text" id="lastName2" name="lastName2"/>
                <label htmlFor="email2">E-mailová adresa:</label>
                <input size={10} className="px-2 w-full mb-4" type="email" id="email2" name="email2"/>
                <label htmlFor="password2">Heslo:</label>
                <input size={10} className="px-2 w-full mb-4" type="password" id="password2" name="password2"/>
                <div className="flex inline-flex mb-4">
                    <input type="checkbox" id="tos2"/><label htmlFor="tos2" className="pl-2 text-sm">Souhlasím s podmínkami použití.</label>
                </div>
                <div className="w-max px-2 text-white py-1 bg-black mx-auto">
                    <input type="submit" value="Registrovat"/>
                </div>
                </div>
                
            </form>
        </div>
        
        </>
    );
}

export function RegistrationFormSquares(){

    return(
        <>
        <div className="w-72 h-fit bg-neutral-100 rounded-md mx-auto border border-stone-200 my-4">
            <div className="bg-sky-300 h-fit p-2 rounded-md">
                <h1 className="text-xl text-white text-center">Zaregistrujte se u nás!</h1>
            </div>
            <form action="" className="flex flex-col p-4" method="post">
                <label htmlFor="firstName3">Jméno:</label>
                <input size={10} className="px-2 w-full mb-4 rounded-md mx-auto" type="text" id="firstName3" name="firstName3"/>
                <label htmlFor="lastName3">Příjmení:</label>
                <input size={10} className="px-2 w-full mb-4 rounded-md" type="text" id="lastName3" name="lastName3"/>
                <label htmlFor="email3">E-mailová adresa:</label>
                <input size={10} className="px-2 w-full mb-4 rounded-md" type="email" id="email3" name="email3"/>
                <label htmlFor="password3">Heslo:</label>
                <input size={10} className="px-2 w-full mb-4 rounded-md" type="password" id="password3" name="password3"/>
                <div className="flex inline-flex mb-4">
                    <input type="checkbox" id="tos3"/><label htmlFor="tos3" className="pl-2 text-sm">Souhlasím s podmínkami použití.</label>
                </div>
                <div className="w-max px-2 rounded-md text-white py-1 bg-sky-300 mx-auto">
                    <input type="submit" value="Registrovat"/>
                </div>
                
                
            </form>
        </div>
        </>
    );
}