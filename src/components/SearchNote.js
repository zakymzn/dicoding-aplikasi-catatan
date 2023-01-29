import React from "react";

function SearchNote({ onSearch }) {
    const onSearchChange = (event) => {
        onSearch(event.target.value);
    }

    return (
        <div className="search-note">
            <span class="material-symbols-outlined">
                search
            </span>
            <input type="text" placeholder="Cari catatan" onChange={onSearchChange} />
        </div>
    );
}

export default SearchNote;