export default function Infos1(props) {
    return (
        <div className="flex flex-wrap py-2 Infos1">
            {props.segment != false ? (
                <div className="flex items-center mr-2 text-gray">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z"></path><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"></path></svg>
                    <p className="ml-2">{props.segment}</p>
                </div>
            ) : (
                <></>
            )}
            {props.ville != false ? (
                <div className="flex items-center mr-2 text-gray">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <p className="ml-2">{props.ville}r</p>
                </div>
            ) : (
                <></>
            )}
            {props.datePublication != false ? (
                <div className="flex items-center mr-2 text-gray">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path></svg>
                    <p className="ml-2">{props.datePublication}</p>
                </div>
            ) : (
                <></>
            )}
            {props.somme != 0 ? (
                <div className="flex items-center mr-2 text-gray">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z"></path></svg>
                    <p className="ml-2">{props.somme}</p>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
