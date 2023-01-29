import React from "react";
import NoteItem from "./NoteItem";
import EmptyNote from "./EmptyNote";

function NoteList({ notes, onDelete, onArchive }) {
    if (notes.length !== 0) {
        return (
            <div className="note-list">
                {
                    notes.map((note) => (
                        <NoteItem key={note.id} id={note.id} archived={note.archived} onDelete={onDelete} onArchive={onArchive} {...note} />
                    ))
                }
            </div>
        );
    } else {
        return <EmptyNote />
    }

}

export default NoteList;