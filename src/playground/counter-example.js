class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0//props.count
        };
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
        //console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        // this.state.count = this.state.count + 1;
        console.log(this.state);
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
        console.log('handleMinusOne');
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        // this.setState(
        //     {
        //         count : 0 
        //     }
        // )
        // this.setState(
        //     {
        //         count : this.state.count + 1
        //     }
        // )
        // console.log('handleReset');
    }

    render() {
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}> +1 </button>
                <button onClick={this.handleMinusOne}> -1 </button>
                <button onClick={this.handleReset}> Reset </button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count : 0
// };

// ReactDOM.render(<Counter count={15} /> , document.getElementById('app'));
ReactDOM.render(<Counter />, document.getElementById('app'));

//let count = 0; //wenas karana nisa let damme

// const name_me = (
//     <div>
//         <h1>{userObj.name ? userObj.name : 'Anonymous'}</h1>
//         {(userObj.age && userObj.age >= 18) && <p>Age: {userObj.age}</p> }
//         {getLocation(userObj.location)}
//     </div>
// );

// const addOne = ()=> {
//     count++;
//     renderCounterApp();
//     console.log('addOne '+ count );
// }

// const minusOne = ()=> {
//     count--;
//     renderCounterApp()
//     console.log('minusOne');
// }

// const reset = ()=> {
//     count = 0;
//     renderCounterApp()
//     console.log('reset');
// }

// // <button id="my-id" className="button"> +1 </button> 

// const appRoot = document.getElementById('app');

// const renderCounterApp = () =>{
//     const templateThree = (// templateThree kiyanne object ekak
//         //JSX eka convert wenawa react element calls walata, eliyata enneth object ekaka ma thama
//         <div>
//             <h1>count: {count}</h1>
//             <button onClick={addOne}> +1 </button> 
//             <button onClick={minusOne}> -1 </button> 
//             <button onClick={reset}> Reset </button>
//         </div>
//     );

//     ReactDOM.render(templateThree, appRoot);
// }

// renderCounterApp()
