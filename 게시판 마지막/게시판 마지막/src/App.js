import './App.css';
import { useState } from 'react';
import { Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import Plus_page from './Plus'
import Plus_page2 from './Plus copy'
import List from './List'

function App() {
  let navigate = useNavigate()
  
  function Move_Plus(){
    navigate('/plus')
  }
  
  function Move_Main(){
    navigate('/')
  }

  const [useList_1, setList_1] = useState([
    {
        title: '제목입니다.',
        name: '이름입니다.',
        date: '날짜입니다.',
        content: '내용입니다.',
    },
    {
        title: '제목입니다.',
        name: '이름입니다.',
        date: '날짜입니다.',
        content: '내용입니다.',
    },
    {
        title: '제목입니다.',
        name: '이름입니다.',
        date: '날짜입니다.',
        content: '내용입니다.',
    },
    {
        title: '제목입니다.',
        name: '이름입니다.',
        date: '날짜입니다.',
        content: '내용입니다.',
    },
    {
        title: '제목입니다.',
        name: '이름입니다.',
        date: '날짜입니다.',
        content: '내용입니다.',
    },
    {
        title: '제목입니다.',
        name: '이름입니다.',
        date: '날짜입니다.',
        content: '내용입니다.',
    },
  ])

  const addpost = (useChange) => {
    setList_1([useChange, ...useList_1]);
    console.log(useList_1)
  }
  
  const changepost = (useChange2) => {
    setList_1(useChange2);
  }

  return (
    <div className="App">
      {/* 헤더 */}
      <header id='header'>
        <div className='header_container'>
          <a href='#' className='logo' onClick={Move_Main}>
            LOGO
          </a>
          <button onClick={Move_Plus} className='header_Plus_ptn'>
            글 등록하기
          </button>
        </div>
      </header>
      {/*화면 출룍 위치  */}
      <Routes>
          <Route path='/' element={<List useList_1={useList_1}/>} exact/>/
          <Route path='/plus' element={<Plus_page addpost={addpost}/>} exact/>
          <Route path='/change' element={<Plus_page2 changepost={changepost} useList_1={useList_1}/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
