import React from 'react';//All of our jsx get converted to React.CreateElement calls
//if we dont have React in scope we will get an error when run this

const Option = (props) => (//mehema danna pluwn return statement eka nathuwa ethakota {} nwei enne () thamai enne
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
            className="button button--link"
            onClick={(e) => {//click event eka enawa methenta
                props.handleDeleteOption(props.optionText);//meka nikan thiwwoth props.handleDeleteOption event eka thama pass wenne
            }}
        >Remove</button>
    </div>
);

// const Option = (props) => {
//     return (
//         <li>
//             {props.optionText}
//             <button
//                 onClick={(e) => {//click event eka enawa methenta
//                     props.handleDeleteOption(props.optionText);//meka nikan thiwwoth props.handleDeleteOption event eka thama pass wenne
//                 }}
//             >Remove</button>
//         </li>);
// };

export default Option;

// export default Option = (props) => { //mehema dammama dev tools wala me component ekata namak watenne ne unknown kiyala watennee, namak use karaa eka wada hodai
//     return (
//         <li>
//             {props.optionText}
//             <button
//                 onClick={(e) => {//click event eka enawa methenta
//                     props.handleDeleteOption(props.optionText);//meka nikan thiwwoth props.handleDeleteOption event eka thama pass wenne
//                 }}
//             >Remove</button>
//         </li>);
// };