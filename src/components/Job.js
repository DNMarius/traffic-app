import Infos1 from './Infos1';
import Infos2 from './Infos2';
export default function Job(props) {
    let fullTime;
    let isprivate;
    let Urgent;
    let segment;
    let ville;
    let datePublication;
    let somme;
    let title;
    props.fullTime == 'true' ? (fullTime = true) : (fullTime = false);
    props.isprivate == 'true' ? (isprivate = true) : (isprivate = false);
    props.Urgent == 'true' ? (Urgent = true) : (Urgent = false);
    props.segment ? (segment = props.segment) : (segment = false);
    props.ville ? (ville = props.ville) : (ville = false);
    props.datePublication ? (datePublication = props.datePublication) : (datePublication = false);
    props.somme ? (somme = props.somme) : (somme = 0);
    props.title ? (title = props.title) : (title = "Undefined");
    return (
        <div className="flex px-4 py-8 w-full rounded-lg hover:shadow-md border">
            <div className="w-10 h-10 rounded-md bg-[#ECEDF2] ImageJobContainer"></div>
            <div className="px-4">
                <h2 className="text-[12px] font-[700] text-black Jobtitle">
                    {title}
                </h2>
                <Infos1 segment={segment} ville={ville} datePublication={datePublication} somme={somme}/>
                <Infos2 fullTime={fullTime} isprivate={isprivate} Urgent={Urgent}/>
            </div>
        </div>
    );
}
