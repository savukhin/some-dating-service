import React, { ReactNode, useState } from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages/auth/LoginPage';
import { NotAuthedLayout } from './layouts/notAuthedLayout/NotAuthedLayout';
import { AuthedLayout } from './layouts/authedLayout/AuthedLayout';
import { RegisterPage } from './pages/auth/RegisterPage';
import { ProfilePage } from './pages/user/ProfilePage';
import { UserCompressed } from './dto/UserCompressed';
import { Page404 } from './pages/status/Page404';
import { DatingPage } from './pages/dating/DatingPage';

function App() {
    const [user] = useState<UserCompressed | undefined>(undefined)
    const [isLogged] = useState(false)
    const [isLogging] = useState(true)

    function generateRoute(element: ReactNode, loggedIn: boolean) {
        if (loggedIn) {
            return (
                <AuthedLayout element={element} ></AuthedLayout>
            )
        }

        return (
            <NotAuthedLayout element={element} ></NotAuthedLayout>
        )
    }

    return (
        <div className="App">
        <BrowserRouter >
            <Routes>
                <Route path="login" element={ generateRoute(< LoginPage />, false) }  ></Route>
                <Route path="register" element={ generateRoute(< RegisterPage />, false) }  ></Route>

                <Route path="profile/:id" element={ generateRoute(< ProfilePage user={ user! }  />, true) }  ></Route>
                <Route path="app" element={ generateRoute(< DatingPage user={ user! }  />, true) }  ></Route>
                
                <Route path="" element={<Navigate to="/login"/>} />

                <Route path="*" element={<Page404 />} />

            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
