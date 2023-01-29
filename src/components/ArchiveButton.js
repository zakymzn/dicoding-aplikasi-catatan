import React from "react";

function ArchiveButton({ id, onArchive }) {
    return <button className="note-item__archive" onClick={() => onArchive(id)} title="Arsipkan catatan">
        <span class="material-symbols-outlined">
            archive
        </span>
    </button>
}

export default ArchiveButton;