// components/tab/imagesTabs.js

const ImagesTabs = ({ exportHTML }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <img
          src="https://i.ibb.co/bsBZ51J/4cbcbdfd9463c78c01ec1d23c63c0975.jpg"
          alt=""
        />
        <img
          src="https://i.ibb.co/Q9zcF1r/7f2d395de151a271ed3e90833f62abfe.jpg"
          alt=""
        />
        <img
          src="https://i.ibb.co/gddgw1J/f3606fabb51a7c7792b74e230d6d1c6b.jpg"
          alt=""
        />
        <img
          src="https://i.ibb.co/k5YnSvT/6b8635496f052c5ffe31cd135b77d4e8.jpg"
          alt=""
        />
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
