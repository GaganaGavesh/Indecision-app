// name = 'gagana';

// const obj = {
//     name: 'gagana',
//     getName(){
//         return this.name;
//         //return 'no this';
//     }
// };

// const getName = obj.getName.bind(obj);

// // console.log(getName);

// console.log(getName());    

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeteleOptions = this.handleDeteleOptions.bind(this);//bind the handleDeleteOptions with the current instance
        this.handlePic = this.handlePic.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []//props.options ////meken default props or provided props gannawa options proerty ekata//'opt1', 'opt2', 'opt3'
        }
    }

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
    handleDeteleOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePic() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {//returns -1 if not exists or return the index of the value 0,1,2,.........
            return 'This option is already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])//concat merge 2 arrays and produce new array
        //     };
        // });
    }

    render() {
        // const title = 'Indecision App';
        const subTitle = 'Put your life in the hands of a computer !';
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePic={this.handlePic} />
                <Options
                    options={this.state.options}
                    handleDeteleOptions={this.handleDeteleOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOptions={this.handleAddOption} />
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component {
//     render() {
//         // console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePic}
                disabled={!props.hasOptions}>
                What should I do !
            </button>
        </div>);
};

// class Action extends React.Component {
//     //me class eke wada walata ona wena method me class ekema liyanawa
//     //global method widiyata liwwath kisima aulak ne
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePic}
//                     disabled={!this.props.hasOptions}>
//                     What should I do !
//                 </button>
//             </div>);
//     }
// }


// class Options extends React.Component {
//     render() {
//         console.log(this.props.options.length);
//         return (
//             <div>
//                 {this.props.options.map((option) => <p key={option}>{option}</p>)}
//                 <Option />
//             </div>);
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeteleOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started !</p>}
            <ol>
                {props.options.map((option) =>
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />)}
            </ol>
        </div>);
};

// class Options extends React.Component {

//     //render() kiyana eke correct binding eka tynawa, e nisa ekata apu this ma handleRemoveAll refer karana thanata bind kala nam hari
//     //mokada handleRemoveAll eka this ekak refer karanawa ekata context ekak or object ekak api yawanna ona
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeteleOptions}>Remove All</button>
//                 <ol>
//                     {this.props.options.map((option) => <Option key={option} optionText={option} />)}
//                 </ol>
//             </div>);
//     }
// }

const Option = (props) => {
    return (
        <li>
            {props.optionText}
            <button
                onClick={(e) => {//click event eka enawa methenta
                    props.handleDeleteOption(props.optionText);//meka nikan thiwwoth props.handleDeleteOption event eka thama pass wenne
                }}
            >Remove</button>
        </li>);
};

// class Option extends React.Component {
//     render() {
//         return (<li>{this.props.optionText}</li>);
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);//pass the props up to super
        this.handleOption = this.handleOption.bind(this);
        this.state = {//error kiyana state eka me AddOption ekata adala ekak, e nisa thama meke dala tynne
            error: undefined//by default there is noerror
        }
    }

    handleOption(e) {
        e.preventDefault();//stop the full page reload

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);//parent eke tyna method ekata data tika danawaa

        this.setState(() => ({ error }))//error eka undefined nam render wen nee monawath
        // this.setState(() => {
        //     return {
        //         //error : error//state eke error ekata const error eka denawa
        //         //ES6 short hand - when a property whose value comes from a variable with the exact same name as the property
        //         //we can only put the one name
        //         //error = error: error
        //         error
        //     };
        // });
        if(!error){
            e.target.elements.option.value = '';//error ekak nathnam field eka clear karanwa
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOption}>
                    <input type="text" name="option" />
                    <button> Add option</button>
                </form>
            </div>);
    }
}

// const User = (prop) => {
//     return (
//         <div>
//             <p>Name: {prop.name}</p>
//         </div>
//     );
// };


// const jsx = (
//     <div>
//         <IndecisionApp />
//     </div>
// );

//thani app component eke render wenna ona serama tyna nisa const ekakata dala ganna ona nee
//kelinma ReactDOM.render jsx eka wenuwata <IndecisionApp/> danna pluwan

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));