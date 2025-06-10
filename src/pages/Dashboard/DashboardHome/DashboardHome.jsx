/* eslint-disable react/prop-types */
import { IoIosAdd } from "react-icons/io";
import Title from "../../../components/Title/Title";
import { MdIncompleteCircle } from "react-icons/md";
import { SiMongoosedotws } from "react-icons/si";
import { SiTodoist } from "react-icons/si";
import { Link } from "react-router-dom";
import useFetchTask from "../../../hooks/useFetchTask";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const DashboardHome = () => {
  const { data: todo } = useFetchTask("todo");
  const { data: ongoing } = useFetchTask("ongoing");
  const { data: complete } = useFetchTask("complete");
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const data = [
    {
      name: "Complete",
      uv: complete?.length,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Todo",
      uv: todo?.length,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Ongoing",
      uv: ongoing?.length,
      pv: 9800,
      amt: 2290,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Title title="Dashboard" />
        <div>
          <Link to="/dashboard/new-task">
            <button className="btn  btn-success btn-md  text-white rounded-md">
              <IoIosAdd size={20} />
              Add New
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-7 flex lg:justify-between flex-col lg:flex-row gap-10  lg:gap-20">
        <div
          className="bg-gray-200 shadow-md p-4 dark:bg-slate-800 w-full rounded-md"
          data-aos="zoom-in"
        >
          <div className="flex gap-3">
            <MdIncompleteCircle className=" text-success" size={80} />
            <div>
              <h2 className="text-lg dark:text-gray-300 ">Complete</h2>
              <h3 className="text-4xl font-bold dark:text-gray-300">
                {todo?.length}
              </h3>
            </div>
          </div>
        </div>
        <div
          className="bg-gray-200 shadow-md p-4 dark:bg-slate-800 w-full rounded-md"
          data-aos="zoom-in"
        >
          <div className="flex gap-3">
            <SiTodoist className=" text-secondary" size={80} />
            <div>
              <h2 className="text-lg  dark:text-gray-300">Todo</h2>
              <h3 className="text-4xl font-bold dark:text-gray-300">
                {complete?.length}
              </h3>
            </div>
          </div>
        </div>
        <div
          className="bg-gray-200 shadow-md p-4 dark:bg-slate-800 w-full rounded-md"
          data-aos="zoom-in"
        >
          <div className="flex gap-3">
            <SiMongoosedotws className=" text-error" size={80} />
            <div>
              <h2 className="text-lg dark:text-gray-300 ">Ongoing</h2>
              <h3 className="text-4xl font-bold dark:text-gray-300">
                {ongoing?.length}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center w-full max-w-screen-lg mx-auto">
        <div className="mx-auto">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="uv"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
