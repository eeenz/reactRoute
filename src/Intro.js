import React from 'react';
import { data } from './data/Profile';
import Member from './data/Member';

const Intro = () => {
    return (
        <div className='intro'>
            {/* 부모(intro)에서 자식(Member) 전달할 Props 작성위치 */}
            {/* <Member info={data} /> */}
            {/* 배열로 묶인 2개 이상의 데이터를 가져올 때는 일반적으로 자바스크립트는 for를 사용하지만 리액트는 for를 사용할 수 없기 때문에 map을 사용해야 한다. */}
            {/* map => 데이터 컴포넌트에 접근하는 함수 */}
            {/* {데이터컴포넌트.map(매개변수=>{<프롭스컴포넌트 전달속성={매개변수}/>)} */}
            {data.map(d=>(<Member info={d} />))}

            {/* <h2>유재석 劉在錫 Yu Jae-seok</h2>
            <p className="photo">
                <img src={process.env.PUBLIC_URL + '/images/jae-seok.png'} alt="" />
            </p>
            <ul>
                <li>1972년 8월 14일</li>
                <li>서울특별시 성북구 수유동 출생</li>
                <li>국적 : 대한민국 / 종교 : 불교</li>
                <li>178cm, 65kg, B형, 270mm, ISFP</li>
                <li>서울예술전문대학 방송연예과 중퇴</li>
            </ul> */}
        </div>
    );
};

export default Intro;