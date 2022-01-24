import { BrowserRouter, Route, Routes, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Authorization from './components/authorization/Authorization';
import Registration from './components/registration/Registration';
import SignInForm from './components/registration/SignInForm';
import VideoPage from './components/video/VideoPage';
import TitlePage from './components/title/TitlePage';
import titles from './titles'
import { useState } from 'react';
import NotFound from './components/NotFound';

function App() {
  const [titleId, setTitleId] = useState(0)
  const [videoId, setVideoId] = useState(0)
  // const titleId = 0;
  // const videoId = 0;
  let isDesktop = true
  let isAuthorized = false;
  const userName = 'User'
  return (

    <div className="App">
      <BrowserRouter>
        <Header isDesktop={isDesktop} isAuthorized={isAuthorized} userName={userName} />
        <div>
          <Routes>
            <Route exact path='/' element={<Homepage isDesktop={isDesktop} />} />
            <Route path='/authorization' element={<Authorization />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/signin' element={<SignInForm />} />

            {/* <Route path={`/title/${titleId}`} element={<TitlePage title={titles[titleId]} />} /> */}
            <Route path={`/title/:titleId`} element={<TitlePage />} />
            {/* <Route path='/title/*' element={<TitlePage title={titles[-1]} />} /> */}

            {/* <Route path={`/video/${titleId}/${videoId}`} element={<VideoPage titleId={titleId} id={videoId} />} /> */}
            <Route path='/video/:titleId/:videoId' element={<VideoPage />} />

            <Route path={`/video/${titleId}/*`} element={<VideoPage titleId={titleId} id={-1} />} />

            {/* <Route path={`/photoviewer/${titleId}/${photoId}`} element={ <PhotoViewer titleId={titleId} id={videoId}/>} /> */}


            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        
      </BrowserRouter>
    </div>


  );
}

export default App;
