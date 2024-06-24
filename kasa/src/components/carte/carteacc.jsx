// eslint-disable-next-line react/prop-types
const Cardh = ({ title, image }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md mt-8 ml-4 mr-4 mb-2" style={{ width: '280px', height: '280px' }}>
            <div className="w-full h-full flex flex-col justify-between">
                <img className="w-full h-auto rounded" src={image} alt={title} />
                <div className="p-4">
                    <h2 className="text-xl font-semibold" style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: 700, lineHeight: '25.67px', textAlign: 'left', width: '80%' }}>
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Cardh;
