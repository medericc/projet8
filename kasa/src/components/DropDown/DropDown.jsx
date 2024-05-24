
import PropTypes from "prop-types";

const DropDown = ({ title, content }) => {
    return (
        <div style={{ width: '1023px', height: '54px' }} >
        <details className="mt-6 mb-4 border   rounded-md">
            <summary className="cursor-pointer py-2 px-4 bg-red-500 rounded-md text-lg text-white font-medium">
                {title}
            </summary>
            <div className="px-4 py-2 bg-grey">
                <p className="text-gray-700">
                    {Array.isArray(content)
                        ? content.map((item, index) => <span key={index} className="block mb-2">{item}</span>)
                        : <span>{content}</span>}
                </p>
            </div>
        </details></div>
    );
}; 
DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
};
export default DropDown;
