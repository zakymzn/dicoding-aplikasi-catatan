import React from "react";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils/data";
import NoteInput from "./NoteInput";
import NavBar from "./NavBar";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    }

    onAddNoteHandler({ title, body, archived }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: showFormattedDate(),
                        archived,
                    }
                ]
            }
        })
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    render() {
        return (
            <div className="note-app">
                <h1>Aplikasi Catatan</h1>
                <NavBar />
                <h2 id="tambah-catatan">Tambah Catatan</h2>
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2 id="daftar-catatan">Daftar Catatan</h2>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteNoteHandler} />
                <h2 id="arsip-catatan">Arsip Catatan</h2>
            </div>
        );
    }
}

export default NoteApp;