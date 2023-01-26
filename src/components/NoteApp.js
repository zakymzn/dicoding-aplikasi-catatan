import React from "react";
import { getData } from "../utils/data";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
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
                        createdAt: +new Date(),
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
                <h2>Tambah Catatan</h2>
                {/* Note Input */}
                <h2>Daftar Catatan</h2>
                {/* Note List */}
            </div>
        );
    }
}

export default NoteApp;