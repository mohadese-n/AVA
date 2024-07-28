import { NavLink, useLocation } from "react-router-dom";
import { GREEN } from "./helpers/color";
const Sidebar = () => {
    const activeColor = 'rgba(105,105,105,0.6)';
    const location = useLocation()
    return(
            <div className="sidebar text-light text-center" style={{backgroundColor:GREEN}}>
                <h2 className="pt-5" style={{marginBottom:'10rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                     آوا</h2>
                <NavLink to='/' 
                style={({isActive}) =>{
                    return {backgroundColor:isActive?activeColor:"",display:"block"}
                    }} className={location.pathname.includes('/fileupload')||location.pathname.includes('/Link')?"btn mx-2 mb-4 text-white hoverSidebar active-navlink":"btn mx-2 mb-4 text-white hoverSidebar"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18.4v3.3M8 22h8"/></svg>
                    تبدیل گفتار
                </NavLink>
                <NavLink to='/archive' style={({isActive}) =>{
                    return {backgroundColor:isActive?activeColor:"",display:"block"}
                    }} className={"btn mx-2 text-white hoverSidebar"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    {" "}
                    آرشیو   
                </NavLink>            
            </div>
    )
}
export default Sidebar;