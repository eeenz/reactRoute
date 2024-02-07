import React from 'react';
import { data } from './data/Profile';
import Active from './data/Active';

const Home = () => {
    return (
        <div className='home'>
        {data.map(d=>(<Active info={d} />))}
            {/* <h2>방송활동</h2>
            <p className="photo">
                <img src={process.env.PUBLIC_URL + '/images/jae-seok2.png'} alt="" />
            </p>
            <p className='contents'>
                <li>대한민국을 대표하는 국민MC로서 방송 3사 연예대상과 백상예술대상을 통틀어 총 19회 대상을 수상한 역대 최다 대상 수상자이며, 강호동과 함께 지상파 방송 3사와 백상예술대상에서 모두 대상을 수상해 이른바 그랜드슬램을 달성한 단 2명의 예능인이다.</li>
            </p> */}
        </div>
    );
};

export default Home;