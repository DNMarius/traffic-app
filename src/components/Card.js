export default function Card(props) {
    return (
        <div className="flex flex-col rounded-md bg-white min-w-[298px] h-[272px] my-4 mx-8 px-4 py-8 relative hover:shadow-lg Card">
            <div class="absolute right-4 top-4 flex justify-center items-center text-zinc-500">
                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="44" width="44" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.13456 9H12.1346L10 14.6075H7L9.13456 9Z" fill="currentColor"></path><path d="M14.1346 9H17.1346L15 14.6075H12L14.1346 9Z" fill="currentColor"></path>
                </svg>
            </div>
            <h3 className="font-[600] text-[15px] py-2">{props.title}</h3>
            <p className="w-full py-4 mb-4 text-xs h-1fr break-words grow overflow-hidden">
                {props.children}
            </p>
            <div className="flex">
                <div className="h-16 w-16 rounded-[50%] bg-zinc-200"></div>
                <div className="px-4">
                    <h1 className="text-black font-[600] text-[15px]">{props.name}</h1>
                    <p className="py-2">{props.subtitle}</p>
                </div>
            </div>
        </div>
    );
}