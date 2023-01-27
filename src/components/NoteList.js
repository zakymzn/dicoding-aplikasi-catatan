import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    return (
        <div className="note-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
                ))
            }
        </div>
    );
    // if (notes != null) {
    //     return (
    //         <div className="note-list">
    //             {
    //                 notes.map((note) => (
    //                     <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
    //                 ))
    //             }
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className="note-list">
    //             <p>Tidak ada catatan</p>
    //         </div>
    //     );
    // }
}

export default NoteList;