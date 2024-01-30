import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function PublierOffre() {
    /* const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const formattedTime = `${hour}:${minute}`; */

    const [paymentMode, setPaymentMode] = useState("espece")
    const [date, setDate] = useState("")
    const [departureTime, setDepartureTime] = useState("")
    const [data, setData] = useState({
        "type": ["Course", "Ramassage", "Depot", "Aeroport"],
        "localisation": ["polytech", "emia", "poste centrale", "Total Melen", "Marché centrale"]
    });
    const [type, setType] = useState(data.type[0])
    const [places, setPlaces] = useState(0)
    const [itineraire, setItineraire] = useState(data.localisation[0])
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [acceptedPayments, setAcceptedPayments] = useState([]);
    const [acceptedTransport, setAcceptedTransport] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleTransportChange = (transport) => {
        if (acceptedTransport.includes(transport)) {
            setAcceptedTransport(acceptedTransport.filter((item) => item !== transport));
        } else {
            setAcceptedTransport([...acceptedTransport, transport]);
        }
    };

    const handlePaymentChange = (payment) => {
        if (acceptedPayments.includes(payment)) {
            setAcceptedPayments(acceptedPayments.filter((item) => item !== payment));
        } else {
            setAcceptedPayments([...acceptedPayments, payment]);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:9000/hellok')//http://localhost:9000/mainData
            .then(response => {
                // Les données JSON sont disponibles dans response.data
                /* const response = await fetch('URL_DE_L_API');
                const jsonData = await response.json();
                setData(jsonData); 
                console.log(response.data); */
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => {
                // Gérer les erreurs
                console.error('Erreur lors de la récupération des données: 111111', error);
            });
    }, []);

    const handleOptionChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    let handleSubmit = (event) => {
        event.preventDefault()
        let commande = {
            "type": type,
            "itineraire": itineraire,
            "date": date,
            "departureTime": departureTime,
            "paymentMode": paymentMode,//
            "places": places,
            "name": name,
            "number": number

        }
        console.log(JSON.stringify(commande))
    }
    let APPLICATION_NAME = "py-course"
    return (
        <html>
            <head>
                <link
                    href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
                    rel="stylesheet"
                />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,maximum-scale=1"
                />
            </head>

            <body className="h-screen w-screen bg-gray-100 text-gray-900 flex justify-center" id="bodySignIn">
                <div className="max-w-screen-xl m-0 bg-white sm:rounded-lg flex justify-center flex-1 ">
                    <div className="lg:w-1/2 xl:w-5/12 p-2 sm:p-12 flex flex-col h-max">
                        <div>
                            <img
                                className="w-32 mx-auto"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold mt-8">
                                Proposer des places dans un véhicule
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="flex items-center items-center justify-evenly w-full">

                                </div>
                                <form className="mx-auto text-[17px]" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="nom" className="mr-2">Nom :</label>
                                        <input type="text" name="nom" id="nom"
                                            className="mt-2 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            onChange={(event) => { setName(event.target.value) }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="number" className="mr-2">Contact :</label>
                                        <input type="number" name="number" id="number"
                                            className="mt-2 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            onChange={(event) => { setNumber(event.target.value) }}
                                        />
                                    </div>
                                    <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-blue-gray-900">Services proposés</h6>
                                    <div className="flex gap-4 items-center justify-between w-full px-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                                        {
                                            data.type.map((value) => (
                                                <label className="flex gap-4 items-center my-4">
                                                    <input
                                                        type="checkbox"
                                                        value={value}
                                                        checked={acceptedTransport.includes(value)}
                                                        onChange={() => handleTransportChange(value)}
                                                    />{value}
                                                </label>
                                            ))
                                        }
                                    </div>
                                    <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-blue-gray-900 cursor-pointer py-4" onClick={handleClick}>Zones desservies &#9660;</h6>
                                    <div className="gap-4 items-center justify-center">
                                        {isExpanded && (
                                            <div className="grid grid-col-3 grid-row-3 accordion-content gap-2 mb-4 gap-4 py-4 justify-between px-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                                                {data.localisation.map((value) => {
                                                    return (
                                                        <label className="flex items-center gap-4">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedOptions.includes(value)}
                                                                onChange={() => handleOptionChange(value)}
                                                            />
                                                            {value}
                                                        </label>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex gap-4 items-center justify-between">
                                        <label htmlFor="date">Jour de disponibilite:</label>
                                        <input
                                            className="mt-2 w-[150px] px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="date"
                                            id="date"
                                            value={date}
                                            onChange={(event) => { setDate(event.target.value) }}
                                        />
                                    </div>
                                    <div className="flex gap-4 items-center justify-between">
                                        <label htmlFor="departureTime">Heure de debut de service:</label>
                                        <input
                                            className="mt-2 w-[80px] px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="time"
                                            id="departureTime"
                                            value={departureTime}
                                            onChange={(event) => { setDepartureTime(event.target.value) }}
                                        />
                                    </div>
                                    <div>
                                        <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-blue-gray-900 my-4">Modes de paiement acceptés</h6>
                                        <div className="flex gap-8 flex gap-4 items-center justify-between w-full px-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white px-8 py-4">
                                            <label className="flex items-center gap-4">
                                                <input
                                                    type="checkbox"
                                                    value="espèces"
                                                    checked={acceptedPayments.includes('espèces')}
                                                    onChange={() => handlePaymentChange('espèces')}
                                                /><span>Espèces</span>
                                            </label>
                                            <label className="flex items-center gap-4">
                                                <input
                                                    type="checkbox"
                                                    value="mobile money"
                                                    checked={acceptedPayments.includes('mobile money')}
                                                    onChange={() => handlePaymentChange('mobile money')}
                                                />
                                                <span>Mobile Money</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center justify-between">
                                        <label htmlFor="places" className="w-full">Nombre de place:</label>
                                        <input
                                            className="mt-2 w-[80px] px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            id="places"
                                            type="number"
                                            name="nombre de places"
                                            value={places}
                                            onChange={(event) => { setPlaces(event.target.value) }}
                                        />
                                    </div>

                                    {/* <input
                                        className="mt-2 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="password"
                                        placeholder="Taille des baggages"
                                    /> */}
                                    {/* <input
                                        className="mt-2 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="password"
                                        placeholder="Commentaires"
                                    /> */}
                                    <button
                                        className="py-2 mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                        type="submit"
                                    >
                                        <span className="ml-3">
                                            Publier Offre
                                        </span>
                                    </button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                    </p>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div
                            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}
                        ></div>
                    </div>
                </div>
            </body>
            <div style={{ "display": "none" }}>
                departureTime: {date}
                heure de debut: {departureTime}
                
                selectedOptions: {JSON.stringify(selectedOptions)}
                acceptedPayments: {JSON.stringify(acceptedPayments)}
                acceptedTransport: {JSON.stringify(acceptedTransport)}
            </div>
        </html>
    )
}