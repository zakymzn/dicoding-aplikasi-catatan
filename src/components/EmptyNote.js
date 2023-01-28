import React from "react";

function EmptyNote() {
    return (
        <div className="empty-note">
            <span class="material-symbols-outlined">
                error
            </span>
            <p>Tidak ada catatan</p>
        </div>
    );
}

export default EmptyNote;