// eslint-disable-next-line react/prop-types
const Cardh = ({ title, image }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md mt-4 ml-4 mr-4 mb-4 md:w-335 md:h-255" style={{ width: '340px', height: '340px',margin : 'auto' }}>
            <div className="w-full h-full flex flex-col justify-between">
                <img className="w-full h-auto object-cover rounded" src={image} alt={title} style={{ height: '70%' }} />
                <div className="p-4 h-1/3 flex items-center justify-center">
                    <h2 className="text-xl font-semibold" style={{ fontFamily: 'Montserrat', width: '100%', fontSize: '17px', fontWeight: 700, lineHeight: '18.67px', textAlign: 'left', display: 'flex', alignItems: 'center',height: '100%', overflow: 'hidden' }}>
                        <span style={{ width: 'fit-content', maxWidth: '100%', whiteSpace: 'normal', wordWrap: 'break-word' }}>{title}</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Cardh;
