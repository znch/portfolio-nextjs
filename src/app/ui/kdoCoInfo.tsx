import TechStackShowcase from "./techStackShowcase";

export default function KdoCoInfo(){
    return(
        <>
            <div className="flex flex-wrap flex-column text-justify pt-36 h-screen" id="infoAbout">
                <div className="w-screen xl:w-1/3"><h1 className="text-center text-3xl">Kdo <span className="font-thin">jsem.</span></h1>
                    <p className="w-2/3 pt-8 mx-auto text-justify">Pokud si tohle čtete, tak se Vám nejspíš již pod ruku dostal můj životopis, se kterým jste se určitě dobře seznámily. Nicméně sumarizace do kondenzovaného bloku textu ještě nikomu neublížila.
                    </p>
                    <p className="w-2/3 pt-8 mx-auto text-justify">K psaní webovek jsem se nejprve dostal na Obchodní Akademii v Uherském Hradišti, když jsem studoval program informačních technologií.
                    Od té doby můj zájem o navrhování a tvorbu responzivních webových aplikací dál rostl, prostřídal jsem řadu PHP frameworků, až jsem se v průběhu svých dalších studií, které pokračovali na UTB dostal k JavaScriptu. Po roce studií na fakultě aplikované informatiky, jsem se rozhodl přejít na fakultu logistiky za účelem získání více praktických informací v oblasti e-commerce. Tento krok mi pomohl porozumět každodenním výzvám, kterým podniky v tomto oboru čelí, a to nejen na teoretické, ale i procesní úrovni. Mimo e-commerce jsem se posunul také v oblastech projektového řízení, udržitelnosti, procesního inženýrství a integrovaných systémů řízení.
                    </p>
                    <p className="w-2/3 pt-8 mx-auto text-justify">V průběhu svých studií jsem taky získal hromadu praktických zkušeností při part-time pracích nebo odborných stážích, z nichž nejpřínosnější pro mě byla odborná stáž pro českého e-commerce giganta Alza.cz 
                    </p>



                </div>
                <div className="w-screen pt-8 xl:pt-0 xl:w-2/3"><h1 className="text-center text-3xl">Co <span className="font-thin">ovládám.</span></h1>
                <p className="w-2/3 pt-8 mx-auto"><span className="font-bold">TO DO: Krátký popis o technologiích, které zvládám a používám. Následuje za ním seznam s jednotlivými kategoriemi.</span> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam rhoncus aliquam metus. Pellentesque arcu. Etiam quis quam. Phasellus et lorem id felis nonummy placerat. Integer malesuada. Integer vulputate sem a nibh rutrum consequat. Sed convallis magna eu sem. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>
                
                <TechStackShowcase />
                
                
                </div>
            </div>
        </>
    );
}