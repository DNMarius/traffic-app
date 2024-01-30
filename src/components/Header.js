function menuVertical(etat) {
    let menu = document.getElementById("menuToDisplay");
    if (etat == "visible") {
        menu.style.display = 'flex';
        menu.style.flexDirection = "column";
        menu.style.gap = "1.5rem";
        menu.style.position = "absolute";
        menu.style.left = '149px';
        menu.style.top = "70px";
    } else {
        menu.style.display = "none";
    }
}
function meuInitial() {
    let menu = document.getElementById("menuToDisplay");
    menu.style.display = 'flex';
    menu.style.flexDirection = "row";
    menu.style.gap = "0px";
    menu.style.position = "relative";
    menu.style.left = '0px';
    menu.style.top = "0px";
}
function petitMenu() {
    let menuToDisplay = document.getElementById("menuToDisplay");
    menuToDisplay.style.left = '0px';
}
let togleMenuDisplay = (event) => {
    let menu = document.getElementById("menuToDisplay");
    let menuDisplay;
    let elementClique;
    menuDisplay = menu.style.display;
    if (menuDisplay != "flex") {
        menuVertical("visible");
        elementClique = event.target.nodeName;
        if (elementClique == "svg" || elementClique == "path") {
            menu.style.left = "0px";
        }
    } else {
        menu.style.display = "none";
    }
};

export default function Header() {
    return (
        <header className="px-12 pt-4 shadow-md">
            <nav className="flex justify-between">
                <div className="flex gap-4">
                    <a href="" className="flex items-center py-4">
                        <div className="grid h-8 w-8 text-white rounded-[10px] blue justify-items-center items-center">
                            JoS
                        </div>
                        <p className="px-2 ml-2 font-bold text-sm text-black">Jobstack</p>
                    </a>
                    <button onClick={togleMenuDisplay} className="flex items-center hidden" id="Menu">
                        Menu
                    </button>
                    <div className="flex py-4 bg-white" id="menuToDisplay">
                        <button className="flex items-center px-6">
                            Find Jobs
                            {/* prettier-ignore */}
                            <svg className="ml-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="ml-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"></path></svg>
                        </button>
                        <button className="flex items-center px-6">
                            Employers
                        </button>
                        <button className="flex items-center px-6">
                            Candidates
                        </button>
                        <button className="flex items-center px-6">Blog</button>
                        <button className="flex items-center px-6">
                            Pages
                            {/* prettier-ignore */}
                            <svg className="ml-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="ml-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"></path></svg>
                        </button>
                        <button className="hidden px-6 ButtonSmallScreen">
                            Upload your cv
                        </button>
                        <button className="hidden px-6 ButtonSmallScreen">
                            Login / Register
                        </button>
                        <button className="hidden px-6 ButtonSmallScreen">
                            Job Post
                        </button>
                    </div>
                </div>
                <div className="flex items-center MenuSuplementaire">
                    <button className="px-6 py-[14px] ml-5 rounded-[8px] text-blue-500">
                        Upload your cv
                    </button>
                    <button className="px-6 py-[14px] ml-5 rounded-[8px] bg-[#e3eafa] text-blue-500">
                        Login / Register
                    </button>
                    <button className="px-6 py-[14px] ml-5 rounded-[8px] blue text-white">
                        Job Post
                    </button>
                </div>
                <div className="hidden flex items-center" id="SVGHeaderContainer">
                    <svg onClick={togleMenuDisplay} stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z" fill="currentColor"></path>
                        <path d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z" fill="currentColor"></path>
                        <path d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z" fill="currentColor"></path>
                    </svg>
                </div>
            </nav>
        </header>
    );
}

function handleResize() {
    if (window.innerWidth > 1192) {
        meuInitial();
    } else if (window.innerWidth >= 785 && window.innerWidth <= 1192) {
        menuVertical(0);
    } else {
        petitMenu();
    }
}

window.addEventListener("resize", handleResize);
