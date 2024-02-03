import './List.css';
import {useNavigate} from 'react-router-dom';

function List({useList_1}){
    let navigate = useNavigate()

    function in_index(index){ 
        const URL = `/change?index=${index}`;
        console.log(URL)
        
        navigate(URL)
    }
    
    return (
        <div id='List'>
            {/* 리스트 출력위치 */}
            <section id='Show_list'>
                <div className='Show_List_container'>
                    {
                        useList_1.map ((item, index) => (
                            <div className='List' key={index}>
                                <div className='List_top'>
                                    <div className='list_top_text_line'>
                                        <span className='List_title'>{item.title}</span>
                                        <span className='List_name'>{item.name}</span>
                                        <span className='List_date'>{item.date}</span>
                                    </div>
                                    <div className='list_top_btn_line'>   
                                        <button className='cha_btn' onClick={() => in_index(index)}>수정</button>
                                    </div>
                                </div>
                                <div className='List_bot'>
                                    {item.content}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default List