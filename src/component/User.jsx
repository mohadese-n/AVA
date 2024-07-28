import { useState } from "react";
import { GREEN } from "./helpers/color";

const User = () =>{
    
    const [showBtn,setShowBtn] = useState({isHidden:false});
    const handleBtn = () =>{
        setShowBtn({isHidden:!showBtn.isHidden})
    }
    return(
        <div className="d-block ml-1 ml-lg-5 mt-4" >
            <div className="d-flex flex-column" style={{borderRadius:'35px',border:`1px solid ${GREEN}`, backgroundColor:'transparent',color:GREEN}}>
                <button className={showBtn.isHidden?"btn-svg m-0 pb-0 d-flex align-item-center":"btn-svg m-0 d-flex align-item-center"} width="45px" height="15px" style={{backgroundColor:'transparent',color:GREEN,border:"none"}} onClick={handleBtn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                 {" "}
                 مهمان 
                {" "}
                 {
                    !showBtn.isHidden?
                    <svg width="24" height="24" stroke={GREEN} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00003 8.5C6.59557 8.5 6.23093 8.74364 6.07615 9.11732C5.92137 9.49099 6.00692 9.92111 6.29292 10.2071L11.2929 15.2071C11.6834 15.5976 12.3166 15.5976 12.7071 15.2071L17.7071 10.2071C17.9931 9.92111 18.0787 9.49099 17.9239 9.11732C17.7691 8.74364 17.4045 8.5 17 8.5H7.00003Z" fill={GREEN}/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke={GREEN} fill="none" class="bi bi-caret-up-fill">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" fill={GREEN}/>
                    </svg>
                }
                 </button>
                 <button className={showBtn.isHidden?"d-block pt-3 d-flex align-item-center borderTop":"d-none"} style={{color:`${GREEN}`,backgroundColor:"transparent" ,border:"none"}}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/></svg>
                    خروج
                </button>
            </div>
        </div>
    )
}
export default User;
