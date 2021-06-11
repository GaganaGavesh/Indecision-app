import React from 'react';
import Option from './Option';


const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeteleOptions}
            >
                Remove All
        </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started !</p>}
        {props.options.map((option, index) =>
            <Option
                key={option}
                optionText={option}
                count={index + 1}
                handleDeleteOption={props.handleDeleteOption}
            />)}
    </div>
);
// const Options = (props) => {
//     return (
//         <div>
//             <button onClick={props.handleDeteleOptions}>Remove All</button>
//             {props.options.length === 0 && <p>Please add an option to get started !</p>}
//             <ol>
//                 {props.options.map((option) =>
//                     <Option
//                         key={option}
//                         optionText={option}
//                         handleDeleteOption={props.handleDeleteOption}
//                     />)}
//             </ol>
//         </div>);
// };

export default Options;