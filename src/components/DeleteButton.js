import React from "react";

function DeleteButton({ id, onDelete }) {
    return <button className="note-item__delete" onClick={() => onDelete(id)}>
        <span class="material-symbols-outlined">
            delete
        </span>
    </button>
}

export default DeleteButton;