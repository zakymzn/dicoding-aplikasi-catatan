import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ title, body, createdAt, id, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} body={body} createdAt={createdAt} />
            <div className="note-item__buttons">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton id={id} onArchive={onArchive} />
            </div>
        </div>
    );
}

export default NoteItem;