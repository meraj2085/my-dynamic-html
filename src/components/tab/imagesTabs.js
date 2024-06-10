import DraggableItem from "../DraggableItem";
import Image from "next/image";

const ImagesTabs = ({ exportHTML, setImageURL }) => {
  const imageUrls = [
    "https://i.ibb.co/bsBZ51J/4cbcbdfd9463c78c01ec1d23c63c0975.jpg",
    "https://i.ibb.co/Q9zcF1r/7f2d395de151a271ed3e90833f62abfe.jpg",
    "https://i.ibb.co/gddgw1J/f3606fabb51a7c7792b74e230d6d1c6b.jpg",
    "https://i.ibb.co/k5YnSvT/6b8635496f052c5ffe31cd135b77d4e8.jpg",
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {imageUrls.map((url, index) => (
          <DraggableItem type="image" key={index}>
            <Image
              onDrag={() => setImageURL(url)}
              className="cursor-grab"
              src={url}
              alt="Image"
              width={300}
              height={200}
            />
          </DraggableItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-2 py-1 mt-4 font-semibold rounded-md bg-gray-800 text-gray-100">
          Upload Image
        </button>
      </div>
    </>
  );
};

export default ImagesTabs;
