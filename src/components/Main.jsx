import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState} from 'react';
import logo from '../assets/logo.png';
import { CheckCircle } from "lucide-react";





import { Helmet } from 'react-helmet'

const Main = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#0b0d11';
        return () => {
            document.body.style.backgroundColor = null;
        };
    }, []);

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Helmet>
                <title>Infinity – Meet Authentically</title>
                <meta name="keywords" content="dating app, Infinity, verified profiles, post-date reviews, safe dates, dating app, dating application, app of dating, da ting, open app, dating app for indians, app flirt, a dating app, dating app for virgins, the dating app, you dating app, with dating app" />
                
                <meta name="description" content="Leave catfishing behind. Infinity helps you date with honesty and safety." />
                <meta property="og:title" content="Infinity – Meet Authentically" />

                <meta property="og:image" content="/Infinity1.png" />
            </Helmet>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="text-center" style={{ color: '#ffffff' }}>
                    


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


        </>

    );
};

export default Main;
