import { Outlet,NavLink } from 'react-router-dom';
import { GREEN } from './helpers/color';

const StableComponent = () =>{
  return (
    <div className="App col-lg-7 col-12 mx-auto">
      <div className='d-grid mx-auto gap-3 mb-5'>
        <h2 style={{color:GREEN}}>تبدیل گفتار به متن</h2>
        <p className='text-muted w-75 mx-auto'>
            آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف،
            زبان فارسی را یاد گرفته است و می تواند متن صحبت ها را بنویسد.
        </p>
      </div>
      <div className='d-flex flex-column mt-2'>
          <div className="d-flex justify-content-start">
                <NavLink to="/" className={({isActive}) =>isActive?'active-link w-25 NavLink py-2':'w-25 NavLink py-2'} style={({isActive}) =>{
                    return {backgroundColor:isActive?GREEN:'transparent', borderRadius:isActive?'10px 10px 0 0':'none', color:isActive?'white':'#777',display:"block"}
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  fill="none" stroke='#777' className='svg' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18.4v3.3M8 22h8"/></svg>
                    ضبط صدا</NavLink>
                <NavLink to="/fileupload" className={({isActive}) =>isActive?'active-link  NavLink py-2 w-25':' NavLink py-2 w-25'} style={({isActive}) =>{
                    return {backgroundColor:isActive?"#3B71CA":'transparent',color:isActive?'white':'#777', borderRadius:isActive?'10px 10px 0 0':'none',display:"block"}
                    }} ><svg xmlns="http://www.w3.org/2000/svg"  className='svg' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8m8.7-1.6V21"/><path d="M16 16l-4-4-4 4"/></svg> بارگذاری فایل</NavLink>
                <NavLink to="/Link" className={({isActive}) =>isActive?'active-link  NavLink py-2 w-25':' NavLink py-2 w-25'} style={({isActive}) =>{
                    return {backgroundColor:isActive?"#DC4C64":'transparent', color:isActive?'white':'#777', borderRadius:isActive?'10px 10px 0 0':'none',display:"block"}
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"className='svg' stroke='#777' viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> لینک</NavLink>

            </div>
            <Outlet />
      </div>
      <div className='row d-flex justify-content-end mt-3 mx-1'>
        <p className='text-muted'>زبان گفتار: </p>
          <select className='form-select px-1 mt-2 roundedBorder' style={{width:'100px',height:'45px'}}>
          <option>فارسی</option>
          <option>العربیه</option>
          <option>انگلیسی</option>
        </select>
      </div>
    </div>
  );
}
export default StableComponent;