import React from 'react';

const Nickinfo = (props) => {
    const {name,nickName,nickInfo1,nickInfo2,photo3} = props.info; //구조분해할당 //props.info : Profile자체 
    return (
        <div>
            <h2>{name}</h2>
            <p className="photo"><img src={photo3} alt="" /></p>
            <p>{nickName}<br/>{nickInfo1}{nickInfo2}</p>
        </div>
    );
};

export default Nickinfo;