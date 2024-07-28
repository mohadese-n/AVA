import { Route, Routes } from 'react-router-dom';
import './App.css';
import Archive from './components/archive/Archive';
import Sidebar from './components/Sidebar';
import StableComponent from './components/StableComponent';
import Record from './components/Record';
import FileUpload from './components/FileUpload';
import LinkRecord from './components/LinkRecord';
import User from './components/User';
import TimeText from './components/TimeText';
import SimpleText from './components/SimpleText';

const App = () => {

  return(
    <div className='d-flex'>
        <Sidebar />

        <div className='w-100 d-flex flex-column'>
          
        <br />
        <Routes>
          <Route path='/' element={<StableComponent />} >
            <Route path='/' element={<Record />} />
            <Route path='/fileupload' element={<FileUpload />} >
              <Route path = '/fileupload/simpletext' element={<SimpleText />} />
              <Route path ='/fileupload/timetext' element={<TimeText />} />
            </Route>
            <Route path='/link' element={<LinkRecord />} />
          </Route>
          <Route path='/archive' element={<Archive />} />
        </Routes>
      </div>
      <User />
    </div>
  )
};

export default App;