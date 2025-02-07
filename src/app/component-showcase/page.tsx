import {RegistrationFormClassic, RegistrationFormModern, RegistrationFormSquares} from "../ui/forms/formVariants";

export default function Page() {
    
    return(
        <>
        <div className="w-full pt-36">
            <div className="w-full">
                <h1 className="text-3xl text-center mb-4">Registrační formuláře</h1>
                <RegistrationFormClassic></RegistrationFormClassic>
                <RegistrationFormModern></RegistrationFormModern>
                <RegistrationFormSquares></RegistrationFormSquares>
            </div>
        </div>
        </>
    );
}