import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

// const Layout = (props) =>{
//     return(
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     );
// }

// const template = (
//     <div>
//         <h1>page title</h1>
//     </div>
// );

// ReactDOM.render(<Layout><p>This is a children prop</p></Layout>, document.getElementById('app'));

// class OldSyntax{
//     constructor(){
//         this.name = 'gagana';
//         this.getGreetings = this.getGreetings.bind(this);
//     }
//     getGreetings(){
//         return `hi ${this.name}`;
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);

// class NewSyantax{
//     name = 'gavesh';
//     getGreetings = () =>{
//         return `hi ${this.name}`;//arrow function eka class instance ekata bound 
//         //wela tynne hama welawema e nisa pita ona thanaka bind karann nathuwa use karanna pluwan
//     }
// }

// const newSyntax = new NewSyantax();
// console.log(newSyntax);