// eslint-disable-next-line react/prop-types
const Cardh = ({ title, image }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md mt-8 ml-4 mr-4 mb-2" style={{ width: '340px', height: '340px' }}>
 <h2 className="text-xl font-semibold">{title}</h2>
      <img className="mt-2 w-full h-auto rounded" src={image} alt={title} />
    </div>
    )
}

export default Cardh;
