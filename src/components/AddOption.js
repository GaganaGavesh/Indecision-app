import React from 'react';

export default class AddOption extends React.Component {

    state = {
        error: undefined//by default there is noerror
    }
    // constructor(props) {
    //     super(props);//pass the props up to super
    //     this.handleOption = this.handleOption.bind(this);
    //     // this.state = {//error kiyana state eka me AddOption ekata adala ekak, e nisa thama meke dala tynne
    //     //     error: undefined//by default there is noerror
    //     // }
    // }

    handleOption = (e) => {
        e.preventDefault();//stop the full page reload
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);//parent eke tyna method ekata data tika danawaa

        this.setState(() => ({ error }))//error eka undefined nam render wen nee monawath

        if (!error) {
            e.target.elements.option.value = '';//error ekak nathnam field eka clear karanwa
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form
                    className="add-option"
                    onSubmit={this.handleOption}>
                    <input
                        className="add-option__input"
                        type="text"
                        name="option" />
                    <button className="button"> Add option</button>
                </form>
            </div>);
    }
}

