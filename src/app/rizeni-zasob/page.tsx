import { Lexend_Giga } from "next/font/google";

const lexend = Lexend_Giga({
  weight : ['100', '400'],
  subsets : ['latin'],
  display: 'swap',
});


export default function Page()
{
    return(
        <>
        <div className="flex pt-36">
            <div className="mx-auto">
            <div className={`w-72 h-fit bg-neutral-100 mx-auto border border-black my-4 ${lexend.className}`}>
            <div className="bg-black h-fit p-2">
                <h1 className="text-xl text-center text-white">Přihlásit se</h1>
            </div>
            <form action="" className="" method="post">
                <div className="flex flex-col p-4">

                
                <label htmlFor="email2">Uživatelské jméno:</label>
                <input size={10} className="px-2 w-full mb-4" type="text" id="email2" name="email2"/>
                <label htmlFor="password2">Heslo:</label>
                <input size={10} className="px-2 w-full mb-4" type="password" id="password2" name="password2"/>
                <div className="flex inline-flex mb-4">
                    <input type="checkbox" id="tos2"/><label htmlFor="tos2" className="pl-2 text-sm">Zapamatovat si mě.</label>
                </div>
                <div className="w-max px-2 text-white py-1 bg-black mx-auto">
                    <input type="submit" value="Přihlásit"/>
                </div>
                </div>
                
            </form>
            </div>
            </div>
        </div>  
        </>
    );
}