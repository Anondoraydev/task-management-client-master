import axios from "axios";
import Title from "../../../components/Title/Title";
import Swal from "sweetalert2";
import { useForm, Controller } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useFetchTask from "../../../hooks/useFetchTask";

const NewTask = () => {
  const { user } = useContext(AuthContext);
  const { refetch } = useFetchTask("todo");
  const { refetch: ongoingfetch } = useFetchTask("ongoing");
  const { refetch: completefetch } = useFetchTask("complete");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { title, description, deadline, priority } = data;
      const taskInformation = {
        title,
        description,
        deadline,
        priority,
        email: user?.email,
        status: "todo",
      };
      console.log(taskInformation);

      const response = await axios.post(
        "https://task-management-server-three-woad.vercel.app/api/v1/create-task",
        taskInformation
      );
      console.log("Server Response:", response.data);
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
      refetch();
      completefetch();
      ongoingfetch();
    } catch (error) {
      console.error("Error during request:", error);
    }
  };

  return (
    <div>
      <Title title="Create Task" />
      <div className="relative flex flex-col justify-center h-[calc(100vh-100px)] overflow-auto">
        <div className="w-full p-6 m-auto bg-white dark:bg-gray-800  shadow-xl ring-1 ring-success lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-400">
            Create Task
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="label">
                <span className="text-base dark:text-gray-400 label-text">
                  Title
                </span>
              </label>
              <Controller
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Title"
                    className="w-full input input-bordered dark:bg-gray-700 dark:text-white"
                    data-aos="zoom-in"
                  />
                )}
                name="title"
                control={control}
                rules={{ required: "Title is required" }}
              />
              {errors.title && (
                <span className="text-xs text-red-500">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div>
              <label className="label">
                <span className="text-base dark:text-gray-400 label-text">
                  Description
                </span>
              </label>
              <Controller
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="textarea dark:bg-gray-700 dark:text-white textarea-bordered w-full resize-none"
                    placeholder="Description"
                    data-aos="zoom-in"
                  ></textarea>
                )}
                name="description"
                control={control}
                rules={{ required: "Description is required" }}
              />
              {errors.description && (
                <span className="text-xs text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div>
              <label className="label">
                <span className="text-base dark:text-gray-400 label-text">
                  Deadline
                </span>
              </label>
              <Controller
                render={({ field }) => (
                  <input
                    {...field}
                    type="date"
                    className="w-full dark:bg-gray-700 dark:text-white input input-bordered"
                    data-aos="zoom-in"
                  />
                )}
                name="deadline"
                control={control}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base dark:text-gray-400 label-text">
                  Priority
                </span>
              </label>
              <Controller
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full dark:bg-gray-700 dark:text-white input input-bordered"
                    data-aos="zoom-in"
                  >
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                  </select>
                )}
                name="priority"
                control={control}
                rules={{ required: "Priority is required" }}
                defaultValue="Low"
              />
              {errors.priority && (
                <span className="text-xs text-red-500">
                  {errors.priority.message}
                </span>
              )}
            </div>
            <div data-aos="zoom-in">
              <button className="btn btn-block rounded-sm bg-success border-none text-white hover:bg-success">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
