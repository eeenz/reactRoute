import React from 'react';
import { data } from './data/Profile';
import Nickinfo from './data/Nickinfo';

const Nick = () => {
    return (
        <div className='nick'>
            {data.map(d=>(<Nickinfo info={d} />))}
            {/* <h2>별명</h2>
            <p className="photo">
                <img src={process.env.PUBLIC_URL + '/images/jae-seok3.png'} alt="" />
            </p>
            <p className='contents'>
                유느님, 메뚜기, 국민MC, 예능1인자, 예능대통령, 유대상<br />
                대표적인 별명은 메뚜기, 국민MC, 1인자 등이 있다. 시간이 지나면서 유재석의 자기관리가 빛을 발하면서 이제는 미중년이라는 별명까지 듣고 있다.
            </p> */}
        </div>
    );
};

export default Nick;