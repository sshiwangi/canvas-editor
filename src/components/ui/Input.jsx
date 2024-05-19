import PropTypes from "prop-types";
import { useRef } from "react";
import { FcAddImage } from "react-icons/fc";

function Input({ type, placeholder, label, fileName, ...props }) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      {type === "file" ? (
        <div className="mb-6 w-full">
          <input
            type={type}
            ref={fileInputRef}
            id="default-input"
            placeholder={placeholder}
            className="hidden"
            // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...props}
          />
          <div
            onClick={handleButtonClick}
            className="flex items-center justify-start gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <FcAddImage size={20} />
            {fileName}
          </div>
        </div>
      ) : (
        <div className="mb-6 w-full">
          {label && (
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </label>
          )}
          <input
            type={type}
            id="default-input"
            placeholder={placeholder}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...props}
          />
        </div>
      )}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  fileName: PropTypes.string,
};

export default Input;
