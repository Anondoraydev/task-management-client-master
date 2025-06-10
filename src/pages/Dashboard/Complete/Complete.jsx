import Title from "../../../components/Title/Title";
import { MdOutlineDateRange } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import useFetchTask from "../../../hooks/useFetchTask";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";
const Complete = () => {
  const { refetch } = useFetchTask("todo");
  const { refetch: ongoingRefetch } = useFetchTask("ongoing");
  const { data, refetch: completeRefetch } = useFetchTask("complete");
  console.log(data);
  const handleDeleteTask = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://task-management-server-three-woad.vercel.app/api/v1/task-delete/${id}`
      );
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Message Send Successfully",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "sweetalert-custom-popup",
          title: "sweetalert-custom-title", // Custom class for the title
          content: "sweetalert-custom-content", // Custom class for the content
          background: "sweetalert-custom-background",
        },
        backdrop: false,
      });
      completeRefetch();
    } catch (error) {
      console.log(error);
    }
  };
  const [selectedStatus, setSelectedStatus] = useState("ongoing");
  // const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleChangeStatus = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        `https://task-management-server-three-woad.vercel.app/api/v1/update-status/${id}`,
        { status: selectedStatus }
      );
      console.log(data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Status Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "sweetalert-custom-popup",
          title: "sweetalert-custom-title",
          content: "sweetalert-custom-content",
          background: "sweetalert-custom-background",
        },
        backdrop: false,
      });

      refetch();
      ongoingRefetch();
      completeRefetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Title title="Ongoing List" />
      <div className="mt-8 spy flex flex-col gap-3 h-[calc(100vh-190px)] overflow-auto sm:overflow-visible ">
        {data?.map((task) => {
          return (
            <div
              key={task?._id}
              className="bg-gray-100  flex lg:items-center flex-col lg:flex-row lg:justify-between dark:bg-gray-800 p-4 border cursor-pointer border-blue-200"
              data-aos="zoom-in"
            >
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  {task?.title}
                </h1>
                <p className="mt-2 dark:text-gray-300 text-justify">
                  {task?.description}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex  items-center gap-2">
                    <MdOutlineDateRange className="dark:text-gray-300" />
                    <h2 className="dark:text-gray-300">{task?.deadline}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <RxUpdate className="dark:text-gray-300" />
                    <h2 className="dark:text-gray-300">{task?.priority}</h2>
                  </div>
                </div>
                {/* modal code start */}
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="btn btn-sm rounded-sm text-gray-200 dark:bg-gray-800 text-xs w-28 mt-5 btn-success"
                >
                  Change Status
                </button>

                <dialog id="my_modal_3" className="modal ">
                  <div className="modal-box dark:bg-gray-800 rounded-md">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm dark:text-gray-300 btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg text-center dark:text-gray-300">
                      Change Status
                    </h3>
                    <div className="py-4 text-center">
                      <br />
                      <form
                        onSubmit={(e) => handleChangeStatus(e, task?._id)}
                        method="dialog"
                      >
                        <select
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                          className="select select-bordered w-full max-w-xs dark:bg-gray-700 dark:text-gray-300"
                        >
                          <option value="complete" disabled selected>
                            complete
                          </option>
                          <option value="ongoing">ongoing</option>
                          <option value="todo">todo</option>
                        </select>
                        <button className="btn ml-4 rounded-sm text-gray-200 btn-md btn-success">
                          Change
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
                {/* modal code end */}
              </div>
              <div className="flex lg:flex-col flex-row gap-3 lg:gap-5 lg:pl-3 mt-3 lg:mt-0 ">
                <button
                  onClick={() => handleDeleteTask(task?._id)}
                  className="btn btn-sm rounded-sm text-gray-200 text-xs w-16 btn-success"
                >
                  Delete
                </button>
                <Link
                  to={`/dashboard/task-update/${task?._id}`}
                  className="btn btn-sm rounded-sm text-gray-200 text-xs w-16 btn-success"
                >
                  Edit
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Complete;
