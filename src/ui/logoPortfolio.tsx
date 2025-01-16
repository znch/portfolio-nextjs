import { Afacad_Flux } from "next/font/google"
import { FunctionComponent } from "react";


const afacadFlux = Afacad_Flux({
  subsets : ['latin'],
  display : 'swap',
})

interface Props {
 textSize: string;
 borderStyle: string;
}

export const LogoPortfolio : FunctionComponent<Props> = (props) =>
{

    const textSize = props.textSize;
    const borderStyle = props.borderStyle;

    return(
        <>
        <div className={`${afacadFlux.className} flex`} style={{userSelect: 'none'}}>
            <div className="flex-wrap w-100 mx-auto">
                <h1 className={`${textSize} font-thin tracking-[1ch]`}>PORT</h1>
                <h1 className={`${textSize} tracking-[1.15ch] ${borderStyle}`}>FOL</h1>
                <h1 className={`${textSize} font-thin tracking-[1.5ch]`}>IO.</h1>
            </div>
        </div>
        </>
    );
}