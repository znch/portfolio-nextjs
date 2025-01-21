import TechStackShowcase from "./techStackShowcase";

export default function KdoCoInfo(){
    return(
        <>
            <div className="flex flex-wrap flex-column text-justify pt-36 h-screen" id="infoAbout">
                <div className="w-screen lg:w-1/3"><h1 className="text-center text-3xl">Kdo <span className="font-thin">jsem.</span></h1>
                <p className="w-2/3 pt-8 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam rhoncus aliquam metus. Pellentesque arcu. Etiam quis quam. Phasellus et lorem id felis nonummy placerat. Integer malesuada. Integer vulputate sem a nibh rutrum consequat. Sed convallis magna eu sem. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>
                </div>
                <div className="w-screen pt-8 lg:pt-0 lg:w-2/3"><h1 className="text-center text-3xl">Co <span className="font-thin">ovládám.</span></h1>
                <p className="w-2/3 pt-8 mx-auto"><span className="font-bold">TO DO: Krátký popis o technologiích, které zvládám a používám. Následuje za ním seznam s jednotlivými kategoriemi.</span> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam rhoncus aliquam metus. Pellentesque arcu. Etiam quis quam. Phasellus et lorem id felis nonummy placerat. Integer malesuada. Integer vulputate sem a nibh rutrum consequat. Sed convallis magna eu sem. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>
                
                <TechStackShowcase />
                
                
                </div>
            </div>
        </>
    );
}