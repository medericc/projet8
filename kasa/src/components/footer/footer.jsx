import logo from '../../asset/logo-white.svg';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4 text-center mx-auto" style={{ maxWidth: '1440px', width: '100%', height: '209px' }}>
            <div className="flex flex-col items-center justify-center h-full">
                <img src={logo} alt="kasa logo" className="w-122 h-39.44" />
                <p className="text-sm mt-4">
                    &copy; 2024 Kasa.<br className="block sm:hidden" /> All rights reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
