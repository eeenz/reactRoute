import React from 'react';

const Intro = () => {
    return (
        <div className='intro'>
            <h2>유재석 劉在錫 Yu Jae-seok</h2>
            <p className="photo">
                <img src={process.env.PUBLIC_URL + '/images/jae-seok.png'} alt="" />
            </p>
            <ul>
                <li>1972년 8월 14일</li>
                <li>서울특별시 성북구 수유동 출생</li>
                <li>국적 : 대한민국 / 종교 : 불교</li>
                <li>178cm, 65kg, B형, 270mm, ISFP</li>
                <li>서울예술전문대학 방송연예과 중퇴</li>
            </ul>
        </div>
    );
};

export default Intro;