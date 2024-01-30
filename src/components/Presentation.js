export default function Presentation() {
    return (
        <div className="">
            <div className="flex w-full flex-wrap px-4 justify-center gap-y-12 gap-x-16">
                <div className="w-[450px] h-[480px] bg-zinc-200 relative PresentationImageContainer">
                    <div className="absolute w-[250px] h-[120px] border rounded-md -right-36 -bottom-9 bg-white">
                        <div className="flex items-center justify-itemsècenter p-4 bg-[#eee] absolute rounded-full w-14 h-14 text-white bg-blue-600 -left-5 -top-6">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-[450px] h-[480px] px-4 PresentationTextContainer">
                    <h1 className="text-3xl font-bold">Accéder aux réseaux de clients et de partenaires</h1>
                    <h2 className="text-xs py-4 pr-8 text-zinc-400 leading-6">Se connecter à des réseaux externes de manière cohérente, sécurisée et reproductible sans nécessiter de modifications des configurations réseau.</h2>
                    <div className="flex items-center py-3 text-black">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                        </svg>
                        <p className="px-3 text-black">Accès à des environnements de développement distants</p>
                    </div>
                    <div className="flex items-center py-3 text-black">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                        </svg>
                        <p className="px-3 text-black">Génération d'url rapide et efficasse</p>
                    </div>
                    <div className="flex items-center py-3 text-black">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                        </svg>
                        <p className="px-3 text-black">Payez en quelques click</p>
                    </div>
                    <button className="text-white mt-4 px-12 py-3 bg-blue-600 rounded-md flex items-center">
                        Get started
                    </button>
                </div>
            </div>
            <div className="flex gap-24 pt-24 w-full justify-center PresentationChiffresContainer">
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-[700px]">4M</h2>
                    <p className="text-center text-zinc-500 py-2">4 million faily active users</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-[700px]">12K</h2>
                    <p className="text-center text-zinc-500 py-2">Over 12K open job positions</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-[700px]">20M</h2>
                    <p className="text-center text-zinc-500 py-2">Over 20 million stories shared</p>
                </div>
            </div>
        </div>
    );
}