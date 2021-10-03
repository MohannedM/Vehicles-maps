import React from 'react';
import MainNavbar from '../../components/MainNavbar';
import Footer from '../../components/Footer';
import './index.css';

const MainLayout: React.FC = (props) => {
    return(
        <React.Fragment>
            <MainNavbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default MainLayout;