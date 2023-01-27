import React from "react";
import MenuList from "./MenuList";

function NavBar() {
    return (
        <nav id="navbar">
            <div id="tab-menu">
                <ul>
                    <MenuList directLink="#tambah-catatan" linkDesc={<p>Tambah Catatan</p>} />
                    <MenuList directLink="#daftar-catatan" linkDesc={<p>Daftar Catatan</p>} />
                    <MenuList directLink="#arsip-catatan" linkDesc={<p>Arsip Catatan</p>} />
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;