import React from "react";

function MenuList({ directLink, linkDesc }) {
    return (
        <li>
            <a href={directLink}>{linkDesc}</a>
        </li>
    );
}

export default MenuList;