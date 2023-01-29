import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            createdAt: +new Date()
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            if (event.target.value.length <= 50) {
                return {
                    title: event.target.value,
                }
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <p>Sisa karakter: {50 - this.state.title.length}</p>
                <input type="text" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea placeholder="Apa yang ingin Anda catat?" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Buat</button>
            </form>
        );
    }
}

export default NoteInput;