import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage';
import SignIn from './components/signIn/SignIn';
import Registration from './components/registration/Registration';
import SignIMDb from './components/signIn/IMDb/SignIMDb';
import NotFound from './components/NotFound';
import TitlePageContainer from './components/title/TitlePageContainer';
import PhotoGalleryContainer from './components/photoGallery/PhotoGalleryContainer';
import PhotoPageContainer from './components/photo/PhotoPageContainer';
import VideoGalleryContainer from './components/videoGallery/VideoGalleryContainer';
import VideoPageContainer from './components/video/VideoPageContainer';
import { RecoilRoot } from 'recoil';
import List from './components/lists/List';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <div>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/sign-imdb' element={<SignIMDb />} />
              <Route path='/sign-amazon' element={<NotFound />} />
              <Route path='/sign-facebook' element={<NotFound />} />
              <Route path='/sign-google' element={<NotFound />} />
              <Route path='/sign-apple' element={<NotFound />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/title/:titleId' element={<TitlePageContainer />} />
              <Route path='/videos/:titleId' element={<VideoGalleryContainer />} />
              <Route path='/video/:titleId/:videoId' element={<VideoPageContainer />} />
              <Route path='/photos/:titleId' element={<PhotoGalleryContainer />} />
              <Route path='/photo/:titleId/:photoId' element={<PhotoPageContainer />} />
              <Route path='/list/:listId' element={<List />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  )
}

export default App;
