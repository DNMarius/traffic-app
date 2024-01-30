import React, { useState } from "react"
import { LikeIcon } from "./LikeIcon";

export function Like(props) {
    const [liked, setLiked] = useState(false);
    function handleLikeItem() {
        setLiked(!liked)
    }
    let likedButtonStyle = {
        padding: "3px 10px",
        borderRadius: "5px",
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        border: "1px solid #000",
        minHeigth: "100px"
    }
    return (
        <div className="mt-[100%]">
            <span className="flex items-center">
                <button style={likedButtonStyle} onClick={handleLikeItem}>J'aime</button>
                <LikeIcon liked={liked}/>
            </span>
        </div>
    )
}

