import { Routes, Route, Link } from "react-router-dom";
import Intro from "./Intro";
import Home from "./Home";
import Nick from "./Nick";
import './styles/common.css'

function App() {
  return (
    <div id="wrap">
      <header>
        <h1>무한도전 1인자와 2인자를 소개합니다!</h1>
        <nav>
          <Link to="/">소개</Link>
          <Link to="/home">방송활동</Link>
          <Link to="/nick">별명</Link>
        </nav>
      </header>
      {/* <h1>링크</h1>
      {/* <a href="https://google.com">내용</a> */}
      {/* <p>리액트에서 링크를 연결할 땐 a가 아닌 Link태그를 사용한다.</p>
      <p>리액트가 제공하는 훅을 사용하려면 반드시 그 훅을 설치해야 한다.</p>
      <p>링크 관련 훅 사용을 위한 설치 명령어</p>
      <p>npm install react-router-dom</p>
      <p>위 설치 후 화면 출력 최상위 컴포넌트에 browse router연결</p> */}
      
      {/* 라우터 설정 */}
      <Routes>
        <Route path="/" element={<Intro />} /> {/* 기본주소 일 때 Intro가 보이게 */}
        <Route path="/home" element={<Home />} /> {/* 주소가 home일때 Home이 보이게 */}
        <Route path="/nick" element={<Nick />} /> {/* 주소가 nick일때 Nick이 보이게 */}
      </Routes>
      <footer>
        copyright &copy; 2024 나무위키 참조
      </footer>
    </div>
  );
}

export default App;
