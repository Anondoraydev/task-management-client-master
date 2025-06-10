import { FcCollect } from "react-icons/fc";
const Loading = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <FcCollect size={50} className="animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
