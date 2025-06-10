/* eslint-disable react/prop-types */
const Title = ({ title }) => {
  return (
    <div>
      <div>
        <h1 className="text-3xl dark:text-gray-400 font-semibold text-gray-600">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
