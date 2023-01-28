import React from "react";
import { showFormattedDate } from "../utils/data";

function NoteItemBody({ title, body, createdAt }) {
    return (
        <div className="note-item__body">
            <div className="note-item__header">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
            </div>
            <p className="note-item__note-body">{body}</p>
        </div>
    );
}

export default NoteItemBody;