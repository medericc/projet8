import logo from '../../asset/logo-white.svg';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4 text-center mx-auto" style={{ width: '1440px', height: '209px' }}>
            <div className="flex flex-col items-center justify-center h-full">
                <img src={logo} alt="kasa logo" className="w-122 h-39.44" />
                <p className="text-sm mt-4">&copy; 2024 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
