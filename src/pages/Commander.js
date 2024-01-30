import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Commander() {
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
    const [startPoint, setStartPoint] = useState(data.localisation[0])
    const [endPoint, setEndPoint] = useState(data.localisation[0])
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    
    const [paymentCurrency, setPaymentCurrency] = useState({
        "50": 0,
        "100": 0,
        "500": 0,
        "1000": 0,
        "2000": 0,
        "5000": 0,
        "10000": 0
    });

    const handleCurrencyChange = (event) => {
        const { name, value } = event.target;
        setPaymentCurrency(prevCurrency => ({
            ...prevCurrency,
            [name]: parseInt(value)
        }));
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

    let handleSubmit = (event) => {
        event.preventDefault()
        let commande = {
            "type": type,
            "startPoint": startPoint,
            "endPoint": endPoint,
            "date": date,
            "departureTime": departureTime,
            "paymentMode": paymentMode,//
            "paymentCurrency": paymentCurrency,
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
                <div className="max-w-screen-xl m-0 bg-white  sm:rounded-lg flex justify-center flex-1 ">
                    <div className="lg:w-1/2 xl:w-5/12 p-2 sm:p-12 flex flex-col h-max">
                        <div>
                            <img
                                className="w-32 mx-auto"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold mt-8">
                                Commander un vehicule
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="flex items-center items-center justify-evenly w-full">

                                </div>
                                <form className="mx-auto max-w-[300px] text-[17px]" onSubmit={handleSubmit}>
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
                                    <div className="flex gap-4 items-center justify-between">
                                        <label htmlFor="type" className="mr-2">Type :</label>
                                        <select id="type" onChange={(event) => { setType(event.target.value) }}
                                            className="mt-2 w-[150px] px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        >
                                            {
                                                data.type.map((value) => (
                                                    <option value={value}>{value}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="flex gap-4 items-center justify-between">
                                        <label htmlFor="startPoint" className="mr-2">Point de départ :</label>
                                        <select id="startPoint" onChange={(event) => { setStartPoint(event.target.value) }}
                                            className="mt-2 w-[150px] px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        >
                                            {
                                                data.localisation.map((value) => (
                                                    <option value={value}>{value}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="flex gap-4 items-center justify-between">
                                        <label htmlFor="endPoint" className="mr-2">Point d'arrivée :</label>
                                        <select id="endPoint" onChange={(event) => { setEndPoint(event.target.value) }}
                                            className="mt-2 w-[150px] px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                                            {
                                                data.localisation.map((value) => (
                                                    <option value={value}>{value}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="flex gap-4 items-center justify-between">
                                        <label htmlFor="date">Jour:</label>
                                        <input
                                            className="mt-2 w-[150px] px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="date"
                                            id="date"
                                            value={date}
                                            onChange={(event) => { setDate(event.target.value) }}
                                        />
                                    </div>
                                    <div className="flex gap-4 items-center justify-between">
                                        <label htmlFor="departureTime">Heure de depart:</label>
                                        <input
                                            className="mt-2 w-[80px] px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="time"
                                            id="departureTime"
                                            value={departureTime}
                                            onChange={(event) => { setDepartureTime(event.target.value) }}
                                        />
                                    </div>
                                    <div className="flex gap-4 items-center justify-between">
                                        <label htmlFor="mode">Mode de paiement:</label>
                                        <select id="mode" value={paymentMode} onChange={(event) => { setPaymentMode(event.target.value) }}
                                            className="mt-2 w-[150px] px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
>
                                            <option value="espece">Espèce</option>
                                            <option value="mobileMoney">Mobile Money</option>
                                        </select>
                                    </div>
                                    {(paymentMode != "espece") ? <div></div> :
                                        <div className="grid grid-cols-2 gap-x-8">
                                            {Object.entries(paymentCurrency).map(([denomination, quantity]) => (
                                                <div key={denomination} className="flex gap-4 items-center justify-between justify-end">
                                                    <span>{denomination}:</span>
                                                    <input
                                                        className="mt-2 w-[80px] px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                        type="number"
                                                        name={denomination}
                                                        value={quantity}
                                                        onChange={handleCurrencyChange}
                                                    />
                                                </div>
                                            ))}
                                        </div>}

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
                                            Commander
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
                type: {type}
                startPoint: {startPoint}
                endPoint: {endPoint}
                date: {date}
                departureTime: {departureTime}
                mode: {paymentMode}
                Monaie: {JSON.stringify(paymentCurrency)}
                places: {places}
            </div>
        </html>
    )
}