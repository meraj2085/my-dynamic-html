// components/tab/stylesTabs.js

const StylesTabs = ({ exportHTML }) => {
  return (
    <>
      <button
        onClick={exportHTML}
        className="px-2 py-1 mt-4 font-semibold rounded-md bg-gray-800 text-gray-100"
      >
        📤 Export as HTML
      </button>
    </>
  );
};

export default StylesTabs;
