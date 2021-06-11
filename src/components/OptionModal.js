import React from 'react';
import Modal from 'react-modal';

//methana Model import ekak tynawa neh eka apata me code ekaa athule Model instance ekak widiyata use karanna puluwan
//Anith than walath <Action/> kiyana ewa use kala wagema, mekath component ekak, normal ape component use kala hatiyatama 
//api hadapu component athulata meka danna pluwan

const OptionModal = (props) => (
    <Modal
        isOpen= {!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectreOption}//mekata monawath danne nathnam model eka close wenne ne,Esc or mouse clocks wakata model eka close wenawa
        //but ehema unama wenna ona deyak api denna ona mekata
        closeTimeoutMS={200}
        className="model"
    >

    <h3 className="model__title">Selected option</h3>
    {props.selectedOption && <p className="model__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectreOption}>Okay</button>

    </Modal>
    // <div>
    //     some text
    // </div>
);

export default OptionModal;