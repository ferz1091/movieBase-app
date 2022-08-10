// Core
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Bus
import { store } from './../init/redux';

// Pages
import { Main } from './pages';

const AppWrapper = styled.div`
position: absolute;
top: 0; left: 0;
width: 100%;
height: 100%;
`;

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppWrapper className='App-container'>
                    <Routes>
                        <Route 
                            path='/'
                            element={<Main />}
                        />
                    </Routes>
                </AppWrapper>
            </BrowserRouter>
        </Provider>
    );
}
