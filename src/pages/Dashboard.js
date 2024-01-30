import React from "react";

export default function Dashboard(props) {
    return (
        <div class="flex h-screen fixed w-screen">
            <div class="w-1/5 bg-gray-200 ">
                <ul class="py-4">
                    <li class="px-4 py-2">Menu 1</li>
                    <li class="px-4 py-2">Menu 2</li>
                    <li class="px-4 py-2">Menu 3</li>
                </ul>
            </div>
            <div class="w-4/5 bg-white px-4">
                <h1 class="text-4xl font-bold px-4 py-2 h-16 bg-red-500 w-full">Page vide</h1>
                <div class="overflow-y-auto mt-4" >
                    {props.children}
                </div>
            </div>
        </div>
    );
}