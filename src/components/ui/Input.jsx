import PropTypes from "prop-types";
function Input({ type, placeholder, label, ...props }) {
  return (
    <>
      {type === "file" ? (
        <div className="mb-6">
          <input
            type={type}
            id="default-input"
            placeholder={placeholder}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...props}
          />
        </div>
      ) : (
        <div className="mb-6">
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
};

export default Input;
