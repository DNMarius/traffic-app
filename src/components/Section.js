export default function Section(props) {
    let classeFinale = "flex pt-12 pb-24 justify-center bg-[#fff] w-full border-b overflow-hidden " + props.className;
    return (
        <section className={classeFinale} style = {props.style}>
            <div className="m-0 p-0 flex items-center flex-col">
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-semibold text-black text-center">{props.title}</h1>
                    <p className="text-xs mt-3 text-center">{props.subtitle}</p>
                </div>
                <div className="pt-12">
                    {props.children}
                </div>
            </div>
        </section>
    );
}
