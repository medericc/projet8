import PropTypes from "prop-types";
import "./drop.css";

const DropDown = ({ title, content }) => {
    return (
        <div className="dropdown-container">
            <details className="dropdown">
                <summary className="dropdown-summary">
                    {title}
                    <img src="../../asset/arrow.png" alt="arrow" className="arrow-icon" />
              
                </summary>
                <div className="dropdown-content">
                    <p className="dropdown-text">
                        {Array.isArray(content)
                            ? content.map((item, index) => <span key={index} className="block mb-2">{item}</span>)
                            : <span>{content}</span>}
                    </p>
                </div>
            </details>
        </div>
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
