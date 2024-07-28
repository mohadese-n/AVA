const LinkRecord = () => {
    return(
        <div className='border border-danger py-5 bg-white'style={{borderRadius:'25px'}} >
            <div class="input-with-button">
                <input type="text" placeholder="example.com/sample.mp3" className="form-control"/>
                <button type="button" className="btn btn-danger p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                </button>
            </div>
            <p className='text-muted w-75 mx-auto'>
                نشانی اینترنتی فایل حاوی گفتار(صوتی/تصویری)، وارد 
                و دکمه را فشار دهید
            </p>
        </div>
    )
}
export default LinkRecord;