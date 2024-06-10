// components/tab/buildTabs.js
import DraggableItem from "../DraggableItem";

const BuildTabs = ({ exportHTML }) => {
  return (
    <div className="flex flex-col gap-5">
      <DraggableItem type="text">Text</DraggableItem>
      <DraggableItem type="divider">Divider</DraggableItem>
      <DraggableItem type="space">Space</DraggableItem>
      <DraggableItem type="button">Button</DraggableItem>
      <DraggableItem type="socialShare">Social Share</DraggableItem>
      <DraggableItem type="socialFollow">Social Follow</DraggableItem>
      <button
        onClick={exportHTML}
        className="px-2 py-1 mt-4 font-semibold rounded-md bg-gray-800 text-gray-100"
      >
        📤 Export as HTML
      </button>
    </div>
  );
};

export default BuildTabs;
