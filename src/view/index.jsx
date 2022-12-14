// Core
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

// Bus
import { store } from '../init/redux';

// Pages
import { Main, MoviePage, PersonPage, TVShowPage, CollectionPage, CompositionsByParamsPage } from './pages';

// Components
import { Header, Background } from './components';

// Assets
import Spectral from '../assets/fonts/Spectral-Regular.ttf';

const AppWrapper = styled.div`
@font-face {
    font-family: 'Spectral';
    src: url(${Spectral}) format('ttf');
}
position: absolute;
font-family: Spectral ,Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
top: 0; left: 0;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`;

const ContentWrapper = styled.section`
position: relative;
z-index: 1;
width: 90vw;
main {
    position: relative;
    margin-top: 15vh;
    min-height: 85vh;
    box-sizing: border-box;
}
.collection-main, .compositions-by-params {
    margin-top: calc(15vh + 10px);
}
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
                                path='/:category/:page'
                                element={<Main />}
                            />
                            <Route
                                path='/movie/:id'
                                element={<MoviePage />}
                            />
                            <Route
                                path='/person/:id'
                                element={<PersonPage />}
                            />
                            <Route
                                path='/tv/:id'
                                element={<TVShowPage />}
                            />
                            <Route
                                path='/collection/:id'
                                element={<CollectionPage />}
                            />
                            <Route
                                path='compositions/:page'
                                element={<CompositionsByParamsPage />}
                            />
                            <Route
                                path='*'
                                element={<Navigate to='/popular/1' replace />}
                            />
                        </Routes>
                    </ContentWrapper>
                    <Background />
                </AppWrapper>
            </BrowserRouter>
        </Provider>
    );
}
