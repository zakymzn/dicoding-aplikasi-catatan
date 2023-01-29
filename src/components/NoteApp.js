import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/data";
import NoteInput from "./NoteInput";
import NavBar from "./NavBar";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            pureNotes: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        // this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: Date(),
                        archived: false,
                    }
                ],
            }
        })
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        console.log(notes);
        this.setState({ notes });
    }

    onArchiveNoteHandler(id) {
        const noteToModify = this.state.pureNotes.filter(note => note.id === id)[0];
        const modifiedNote = {
            ...noteToModify,
            archived: !noteToModify.archived
        };
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes.filter(note => note.id !== id),
                    modifiedNote
                ],
                pureNotes: [
                    ...prevState.pureNotes.filter(note => note.id !== id),
                    modifiedNote
                ]
            }
        });
    }

    render() {
        console.log(this.state.notes);
        console.log(this.state.pureNotes);
        return (
            <div className="note-app">
                <header>
                    <h1>Aplikasi Catatan</h1>
                    <NavBar />
                </header>
                <main>
                    <h2 id="tambah-catatan">Tambah Catatan</h2>
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2 id="daftar-catatan">Daftar Catatan</h2>
                    <NoteList notes={this.state.notes.filter(note => note.archived === false)} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler} />
                    <h2 id="arsip-catatan">Arsip Catatan</h2>
                    <NoteList notes={this.state.notes.filter(note => note.archived === true)} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler} />
                </main>
            </div>
        );
    }
}

export default NoteApp;