import React from "react";

function UnarchiveButton({ id, onArchive }) {
    return <button className="note-item__unarchive" onClick={() => onArchive(id)} title="Keluarkan dari arsip">
        <span class="material-symbols-outlined">
            unarchive
        </span>
    </button>
}

export default UnarchiveButton;