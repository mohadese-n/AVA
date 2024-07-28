import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const FileUpload = () =>{
    const [file,setFile] = useState(null);
    const [previw,setPreview] = useState(null);

    const location = useLocation(); 

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onloadend = () =>{
            setPreview(reader.result);
        };
        if(selectedFile){
            reader.readAsDataURL(selectedFile)
        }
    }

    // const handleSAveFile = () =>{
    //     if(!file) return;
    //     const link = document.createElement('a');
    //     link.href = URL.createObjectURL(file);
    //     link.download = file.name;
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    return(
        
        <div className='border border-primary bg-white'style={{borderRadius:'25px'}} >
            <div className="py-5">
                <div className="file-upload">
                    {file ?(
                        <button>ذخیره فایل</button>
                        ):
                        <button className="file-upload-button btn-primary rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8m8.7-1.6V21"/><path d="M16 16l-4-4-4 4"/></svg></button>
                    }
                        <input type="file" onChange={handleFileChange} name="file" className='btn btn-primary rounded-circle' />
                        {previw?(
                            <div>{previw}</div>
                        ):""
                        }
                        
                </div>
                {
                    file?
                    <div>{}</div>
                    :
                    <p className='text-muted w-75 mx-auto'>
                    برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید 
                    متن پیاده شده آن، در اینجا ظاهر می شود
                </p>
                }
            </div>
            <div className="d-fex justify-content-between px-4 borderBottom mt-3 pb-2 d-none">
                <div className="d-flex">
                    <NavLink to='/fileupload/simpletext'className={({isActive}) =>isActive?"text-dark NavLink fw-bold ml-3 d-flex align-items-center bBottom":"ml-3 text-muted d-flex align-items-center NavLink"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={location.pathname.includes('/simpletext')?"#000":"#777"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 9.5H7M21 4.5H3M21 14.5H3M21 19.5H7"/></svg>
                         {" "}
                         متن ساده
                    </NavLink>
                    <NavLink  to='/fileupload/timetext' className={({isActive}) =>isActive?"text-dark NavLink fw-bold ml-3 d-flex align-items-center bBottom":"text-muted d-flex align-items-center NavLink"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={location.pathname.includes('/timetext')?"#000":"#777"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 
                         {" "}
                         متن زمان بندی شده
                    </NavLink>
                </div>
                <div className="d-flex justify-content-between align-items-center f-left">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" className="download" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg></div>
                    <div className="mx-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" className="copy" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></div>
                    <button className="btn btn-primary roundedBorder m-0">شروع دوباره</button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
export default FileUpload;