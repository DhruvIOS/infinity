import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import logo from '../assets/logo.png';

const Main = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#0b0d11';
        return () => {
            document.body.style.backgroundColor = null;
        };
    }, []);

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="text-center" style={{ color: '#ffffff' }}>
                <img
                    src={logo}
                    alt="Logo"
                    className="img-fluid"
                    style={{

                        maxWidth: '300px', // sets a maximum width for responsiveness
                        marginBottom: '-8px', // very little space before text
                    }}
                />
                <div
                    className="footer w-100 text-center"
                    style={{
                        backgroundColor: '#1a1a1a',
                        color: '#ffffff',
                        padding: '1rem 0',
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                    }}
                >
                    <h1 className="m-0" style={{ fontSize: '1rem' }}>
                        Infinity © Copyrighted 2025
                    </h1>
                </div>

            </div>
        </div>
    );
};

export default Main;
