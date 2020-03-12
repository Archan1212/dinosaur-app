import React from 'react'
const Dinosaur = props => {
    return (
        <div className='dinosaur'>
            <b>Name : <span className='dinosaur-name'>
                {props.name}
            </span>
            </b>
            <br />
            Type : <span className='dinosaur-type'>
                {props.type}
            </span>
            <br />
            Color : <span className='dinosaur-color'>
                {props.color}
            </span>
            <br />
            <button
                className='remove-dinosaur'
                onClick={() => props.removeDinosaur(props.name)}>
                X
            </button>
        </div>
    );
};

export default Dinosaur