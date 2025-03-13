import {RegistrationFormClassic, RegistrationFormModern, RegistrationFormSquares} from "../ui/forms/formVariants";



export default function Page() {
    
    return(
        <>
        <div className="w-full pt-36">
            <div className="w-full">
                <h1 className="text-3xl text-center mb-4">Registrační formuláře</h1>
                <div className="w-full mx-auto flex flex-col md:flex-row lg:w-8/12 justify-evenly items-center">
                <div>
                <RegistrationFormClassic></RegistrationFormClassic>
                </div>
                <div>
                <RegistrationFormModern></RegistrationFormModern>
                </div>
                </div>
                
            </div>
        </div>
        </>
    );
}