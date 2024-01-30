export default function Article(props) {
    return (
        <div className="w-[380px] h-[400px] bg-white p-3 rounded-lg flex flex-col">
            <div className="w-full h-[195px] rounded-lg bg-zinc-200">
            </div>
            <div className="flex items-center my-4 text-[11px]">
                <p className="">{props.date}</p>
                <div className="inline-block w-2 h-2 rounded-full bg-zinc-500 mx-3"></div>
                <p className="">Comment</p>
            </div>
            <h1 className="my-4">{props.title}</h1>
            <p className="text-zinc-500 mt-4 mb-3 text-[11px] leading-5">
                {props.children}
            </p>
            <a class="flex items-center text-blue-600" href=""><span class="mr-4">Read more</span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    );
}