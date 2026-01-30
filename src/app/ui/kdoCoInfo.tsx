import TechStackShowcase from "./techStackShowcase";

export default function KdoCoInfo(){
    return(
        <>
            <div className="flex flex-wrap flex-column text-justify pt-36 h-max" id="infoAbout">
                <div className="w-screen xl:w-2/5"><h1 className="text-center text-3xl">Kdo <span className="font-thin">jsem.</span></h1>
                    
                    <p className="w-2/3 pt-8 mx-auto text-justify">K psaní webovek jsem se poprvé dostal na Obchodní Akademii v Uherském Hradišti, když jsem studoval program informačních technologií.
                    Od té doby můj zájem o navrhování a tvorbu responzivních webových aplikací dál rostl, prostřídal jsem řadu PHP frameworků, až jsem se v průběhu svých dalších studií, které pokračovali na UTB dostal k JavaScriptu. Po roce studií na fakultě aplikované informatiky, jsem se rozhodl přejít na fakultu logistiky s účelem získat více praktických informací v oblasti e-commerce. Tento krok mi pomohl porozumět každodenním výzvám, kterým podniky v tomto oboru čelí na procesní úrovni. Mimo e-commerce jsem se posunul také v oblastech projektového řízení, udržitelnosti, procesního inženýrství a integrovaných systémů řízení.
                    </p>
                    <p className="w-8/12 pt-8 mx-auto text-justify">V průběhu svých studií jsem taky získal hromadu praktických zkušeností při part-time jobech a odborných stážích, z nichž nejpřínosnější pro mě byla odborná stáž pro Alza.cz 
                    </p>



                </div>
                <div className="w-screen pt-8 xl:pt-0 xl:w-3/5"><h1 className="text-center text-3xl">Co <span className="font-thin">ovládám.</span></h1>
                <p className="w-8/12 pt-8 mx-auto">Můj tech-stack lze shrnout následovně... <strong>Styluju</strong> v CSS, Tailwindu a Bootstrapu. Webovky <strong>píšu</strong> v HTML a JavaScriptu, pracuji s různými knihovnami a frameworky jako třeba React a NextJS (takže taky JSX/TSX). Neztratím se ani v SQL databázích a integraci REST API, používám technologie jako PostgreSQL nebo SQLite.</p>
                
                
                <TechStackShowcase />
                
                
                </div>
            </div>
        </>
    );
}