import React from 'react';
import AddOption from './AddOption';//AddOption.js damme nnathi unata aulak ne webpack eka namen witharak hoyagannawa
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleClearSelectreOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeteleOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePic = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        //alert(option);
        this.setState(() => ({ selectedOption: option }));
    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {//returns -1 if not exists or return the index of the value 0,1,2,.........
            return 'This option is already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    // constructor(props) {
    //     super(props);
    //     this.handleDeteleOptions = this.handleDeteleOptions.bind(this);//bind the handleDeleteOptions with the current instance
    //     this.handlePic = this.handlePic.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     // this.state = {
    //     //     options: []//props.options ////meken default props or provided props gannawa options proerty ekata//'opt1', 'opt2', 'opt3'
    //     // }
    // }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //if the json data is invalid we do nithing
            //there can be errors when JSON.parse,that is why we put a try catch
        }
    }

    componentDidUpdate(prevProps, prevState) {//component state eka update una gaman ma auto fire wenawa wela local storage ekata
        //this.state.options tika danawa, kalin options eka uda aluth options tika override wenawa
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');//IndecisionApp component eka screen eken gya gaman ma fire wenawa
    }
    // handleDeteleOptions() {
    //     this.setState(() => ({ options: [] }));
    // }

    // handleDeleteOption(optionToRemove) {
    //     this.setState((prevState) => ({
    //         options: prevState.options.filter((option) => optionToRemove !== option)
    //     }));
    // }

    // handlePic() {
    //     const randomNum = Math.floor(Math.random() * this.state.options.length);
    //     const option = this.state.options[randomNum];
    //     alert(option);
    // }

    // handleAddOption(option) {

    //     if (!option) {
    //         return 'Enter a valid value to add item';
    //     } else if (this.state.options.indexOf(option) > -1) {//returns -1 if not exists or return the index of the value 0,1,2,.........
    //         return 'This option is already exists';
    //     }

    //     this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    // }

    render() {
        // const title = 'Indecision App';
        const subTitle = 'Put your life in the hands of a computer !';
        return (
            <div>
                <Header
                    subTitle={subTitle}
                />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePic={this.handlePic}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeteleOptions={this.handleDeteleOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOptions={this.handleAddOption}
                        />
                        <OptionModal
                            selectedOption={this.state.selectedOption}
                            handleClearSelectreOption={this.handleClearSelectreOption}
                        />
                    </div>
                </div>

            </div>
        );
    }
}