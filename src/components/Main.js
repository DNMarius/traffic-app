export default function Main() {
    return (
        <main className="w-full h-[550px] bg-gray flex px-[17%] flex-col justify-center Main">
            <div className="w-[600px] MainTitle">
                <h1 className="text-5xl leading-[4rem]">
                    The are 93,178 Posting here for you!{" "}
                </h1>
                <p className="text-gray mt-3">
                    Find jobs, Employement & Career Opportunities
                    </p>
            </div>
            <div className="mt-12 w-[600px] h-[80px] justify-between border flex items-center py-3 bg-white px-4 rounded-md shadow-md rounded-md FindBar">
                <div className="flex items-center">
                    {/* prettier-ignore */}
                    <svg className="mr-3" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02 z">
                            </path>
                        </g>
                    </svg>
                    {/* prettier-ignore */}
                    <input type="text" className="text-gray" placeholder="Job title, keywords, or company" />
                </div>
                <div className="bg-[#000] w-[1px] h-[30px] mx-4">
                </div>
                <div className="flex items-center">
                    {/* prettier-ignore */}
                    <svg className="mr-3" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <input type="text" className="text-gray w-full" placeholder="City or post code" />
                </div>
                <div className="w-[150px] flex justify-center">
                    <button className="px-8 py-3 text-white blue rounded-md">Find Jobs</button>
                </div>
            </div>
            <div class="flex items-center mt-4"><h2>Popular searches :</h2><p class="ml-5 text-neutral-500"> Designer, Developper, Web, IOS, PHP, Senior, Egineer</p></div>
        </main>
    );
};