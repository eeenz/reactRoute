import React from 'react';

const Active = (props) => {
    const {name,active,photo2} = props.info;
    return (
        <div>
            <h2>{name}</h2>
            <p className="photo"><img src={photo2} alt="" /></p>
            <p>{active}</p>
        </div>
    );
};

export default Active;