import { useState } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';


import './Plus.css';

function Plus2({changepost, useList_1}){
    let navigate = useNavigate()

    function Move_Main(){
        navigate('/')
    }

    const location = useLocation();
    const queryParms = new URLSearchParams(window.location.search);
    const URL_index =    Number (queryParms.get('index'))
    console.log(URL_index)

    const [useChange2, setChange2] = useState(
        {
            title: useList_1[URL_index].title,
            name: useList_1[URL_index].name,
            date: useList_1[URL_index].date,
            content: useList_1[URL_index].content
        }
    )
    console.log(useChange2)

    const InputChange = (e) => {
        const {name, value} = e.target;

        setChange2({ ...useChange2, [name]: value}, console.log(useChange2))
    }
    

    function Last() {
        if(useChange2.title === '' ||useChange2.name === '' ||useChange2.date === '' ||useChange2.content === ''){
            alert('수정사항을 입력해주세요.')
        }else{
            const FUCK = useList_1.map((item, _index) => {
                if(URL_index === _index) {
                    return useChange2
                }else {
                    return item
                }
            })

            changepost(FUCK)
            navigate('/')
        }
    }

    return (
        <div id='Plus'>
            <div className='plus_box'>
                <div className='Plus_title_line'>
                    <input type='text' className='title_plus' name = 'title' value = {useChange2.title} placeholder='수정할 제목을 입력해주세요.' onChange={InputChange}></input>
                    <input type='text' className='name_plus' name = 'name' value = {useChange2.name} placeholder='수정할 이름을 입력해주세요.' onChange={InputChange}></input>
                    <input type='text' className='date_plus' name = 'date' value = {useChange2.date} placeholder='수정할 날짜를 입력해주세요.' onChange={InputChange}></input>
                </div>
                <textarea type='text' className='content_plus' name = 'content' value = {useChange2.content} placeholder='수정할 내용을 입력해주세요.' onChange={InputChange}></textarea>
                <div className='Plus_btn_line'>
                    <button button className='plus_close_btn' onClick={Move_Main}>
                        취소
                    </button>
                    <button button className='plus_add_btn' onClick={Last}>
                        등록
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Plus2
