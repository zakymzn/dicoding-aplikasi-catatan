import React from "react";
import SearchNote from "./SearchNote";
import MenuList from "./MenuList";

function NavBar({ onSearch }) {
    return (
        <nav id="navbar">
            <SearchNote onSearch={onSearch} />
            <ul>
                <MenuList directLink="#tambah-catatan" linkDesc={<p>Tambah Catatan</p>} />
                <MenuList directLink="#daftar-catatan" linkDesc={<p>Daftar Catatan</p>} />
                <MenuList directLink="#arsip-catatan" linkDesc={<p>Arsip Catatan</p>} />
            </ul>
        </nav>
    );
}

export default NavBar;