// components/tab/tabItems.js
const TabItems = ({ setActiveTab, activeTab }) => {
  const active = "border-emerald-600 text-gray-900";
  const inactive = "border-gray-300 text-gray-600";

  return (
    <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-100 text-gray-800">
      <p
        onClick={() => setActiveTab("build")}
        className={`flex items-center cursor-pointer flex-shrink-0 px-2 py-2 border-b-4 ${
          activeTab === "build" ? active : inactive
        }`}
      >
        Build
      </p>
      <p
        onClick={() => setActiveTab("images")}
        className={`flex items-center cursor-pointer flex-shrink-0 px-2 py-2 border-b-4 ${
          activeTab === "images" ? active : inactive
        }`}
      >
        Images
      </p>
      <p
        onClick={() => setActiveTab("styles")}
        className={`flex items-center cursor-pointer flex-shrink-0 px-2 py-2 border-b-4 ${
          activeTab === "styles" ? active : inactive
        }`}
      >
        Styles
      </p>
    </div>
  );
};

export default TabItems;
