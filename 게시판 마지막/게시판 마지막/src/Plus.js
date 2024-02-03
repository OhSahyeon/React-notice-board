import { useState } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';


import './Plus.css';

function Plus({addpost}){
    let navigate = useNavigate()

    function Move_Main(){
        navigate('/')
      }

    const [useChange, setChange] = useState(
        {
            title: '',
            name: '',
            date: '',
            content: ''
        }
    )

    const InputChange = (e) => {
        const {name, value} = e.target;

        setChange({ ...useChange, [name]: value}, console.log(useChange))
    }

    function test() {
        if(useChange.title === '' ||useChange.name === '' ||useChange.date === '' ||useChange.content === ''){
            alert('추가사항을 입력해주세요.')
        }else{
            addpost(useChange)
            navigate('/')
        }
    }

    return (
        <div id='Plus'>
            <div className='plus_box'>
                <div className='Plus_title_line'>
                    <input type='text' className='title_plus' name = 'title' value = {useChange.value} placeholder='제목을 입력해주세요.' onChange={InputChange}></input>
                    <input type='text' className='name_plus' name = 'name' value = {useChange.value} placeholder='이름을 입력해주세요.' onChange={InputChange}></input>
                    <input type='text' className='date_plus' name = 'date' value = {useChange.value} placeholder='날짜를 입력해주세요.' onChange={InputChange}></input>
                </div>
                <textarea type='text' className='content_plus' name = 'content' value = {useChange.value} placeholder='내용을 입력해주세요.' onChange={InputChange}></textarea>
                <div className='Plus_btn_line'>
                    <button button className='plus_close_btn' onClick={Move_Main}>
                        취소
                    </button>
                    <button button className='plus_add_btn' onClick={test}>
                        등록
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Plus
