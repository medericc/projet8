import logo from '../../asset/logo-white.svg';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4 text-center" style={{ width: '1440px', height: '209px' }}>
            <img src={logo} alt="kasa logo" className="w-122 h-39.44 mx-auto mb-4" />
            <p className="text-sm">&copy; 2024 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
