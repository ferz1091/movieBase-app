// Core
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

// Bus
import { store } from '../init/redux';

// Pages
import { Main, MoviePage } from './pages';

// Components
import { Header } from './components';

const AppWrapper = styled.div`
position: absolute;
top: 0; left: 0;
width: 100%;
/* height: 100%; */
display: flex;
flex-wrap: wrap;
justify-content: center;
/* background: linear-gradient(to bottom, #355c7d, #6c5b7b, #c06c84); */

background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`;

const ContentWrapper = styled.section`
position: relative;
z-index: 1;
/* top: 15vh; */
width: 90vw;
/* height: 85vh; */
@media (max-width: 768px) {
    width: 100vw;
}
`;

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppWrapper className='App-container'>
                    <Header />
                    <ContentWrapper className='Content-container'>
                        <Routes>
                            <Route 
                                path='/:mode/:page'
                                element={<Main />}
                            />
                            <Route 
                                path='/movie/:id'
                                element={<MoviePage />}
                            />
                            <Route 
                                path='*'
                                element={<Navigate to='/popular/1' replace />}    
                            />
                        </Routes>
                    </ContentWrapper>
                </AppWrapper>
            </BrowserRouter>
        </Provider>
    );
}
