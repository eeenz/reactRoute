import React from 'react';

const Member = (props) => {
    const {name,age,addr,nationality,religion,height,weight,blood,footSize,mbti,ability,photo1,photo2,photo3} = props.info; //구조분해할당 //props.info : Profile자체 
    return (
        <>
            <h2>{name}</h2>
            <p className="photo"><img src={photo1} alt="" /></p>
            <ul>
                <li>{age}</li>
                <li>{addr}</li>
                <li>{nationality} / {religion}</li>
                <li>{height}/{weight}/{blood}/{footSize}/{mbti}</li>
                <li>{ability}</li>
            </ul>
        </>
    );
};

export default Member;