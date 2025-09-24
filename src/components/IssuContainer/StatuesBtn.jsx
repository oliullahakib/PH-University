import React from 'react';

const StatuesBtn = ({toggleBtn,setToggleBtn}) => {
    const statuesBtns = ["All", "Pending", "Submitted", "Reviewed"]
    const handleClick =(btn)=>{
        setToggleBtn(btn)
    }
    return (
        <div>
            <div className='text-right mt-8'>
                {
                    statuesBtns.map((btn,index) => {
                        return <button key={index} onClick={()=>handleClick(btn)} 
                        className={`statues-btn ${index===0?"rounded-l-xl":""} ${index===statuesBtns.length-1?"rounded-r-xl":""} ${toggleBtn===btn && "!bg-purple-500 !text-white"}`}>{btn}</button>
                    })
                }
            </div>
        </div>
    );
};

export default StatuesBtn;