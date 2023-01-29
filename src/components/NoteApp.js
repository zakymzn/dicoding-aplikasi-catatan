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
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
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
                pureNotes: [
                    ...prevState.pureNotes,
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
        const pureNotes = this.state.pureNotes.filter(note => note.id !== id);
        this.setState({ notes, pureNotes });
    }

    onArchiveNoteHandler(id) {
        const noteToModify = this.state.notes.filter(note => note.id === id)[0];
        const pureNoteToModify = this.state.pureNotes.filter(note => note.id === id)[0];
        const modifiedNote = {
            ...noteToModify,
            archived: !noteToModify.archived
        };
        const modifiedPureNote = {
            ...pureNoteToModify,
            archived: !pureNoteToModify.archived
        }
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes.filter(note => note.id !== id),
                    modifiedNote
                ],
                pureNotes: [
                    ...prevState.pureNotes.filter(note => note.id !== id),
                    modifiedPureNote
                ]
            }
        });
    }

    onSearchNoteHandler(query) {
        if (query.length !== 0 && query.trim() !== '') {
            this.setState({
                notes: this.state.pureNotes.filter(note => note.title.toLowerCase().includes(query.toLowerCase())),
            });
        } else {
            this.setState({
                notes: this.state.pureNotes,
            })
        }
    }

    render() {
        return (
            <div className="note-app">
                <header>
                    <h1>Aplikasi Catatan</h1>
                    <NavBar onSearch={this.onSearchNoteHandler} />
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