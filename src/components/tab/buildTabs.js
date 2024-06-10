// components/tab/buildTabs.js
import DraggableItem from "../DraggableItem";

const BuildTabs = ({ exportHTML }) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <DraggableItem type="image">📷 Drag Image</DraggableItem>
        <DraggableItem type="text">📝 Drag Text</DraggableItem>
        <DraggableItem type="divider">─ Drag Divider</DraggableItem>
        <DraggableItem type="space">⬜ Drag Space</DraggableItem>
        <DraggableItem type="button">🔘 Drag Button</DraggableItem>
        <DraggableItem type="socialShare">🔗 Drag Social Share</DraggableItem>
        <DraggableItem type="socialFollow">👥 Drag Social Follow</DraggableItem>
      </div>
      <button
        onClick={exportHTML}
        className="px-2 py-1 mt-4 font-semibold rounded-md bg-gray-800 text-gray-100"
      >
        📤 Export as HTML
      </button>
    </>
  );
};

export default BuildTabs;
