import { useParams } from "react-router-dom";
import useFetchSingleTask from "../../../hooks/useFetchSingleTask";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext, useEffect } from "react";
import useFetchTask from "../../../hooks/useFetchTask";
import { AuthContext } from "../../../context/AuthProvider";
import Title from "../../../components/Title/Title";

const UpdateTask = () => {
  const { id } = useParams();
  const { data } = useFetchSingleTask(id);
  const { user } = useContext(AuthContext);
  const { refetch } = useFetchTask("todo");
  const { refetch: ongoingfetch } = useFetchTask("ongoing");
  const { refetch: completefetch } = useFetchTask("complete");
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data) {
      setValue("title", data.title);
      setValue("description", data.description);
      setValue("deadline", data.deadline);
      setValue("priority", data.priority);
      setValue("status", data?.status);
    }
  }, [data, setValue]);

  const onSubmit = async (data) => {
    try {
      const { title, description, deadline, priority, status } = data;
      const taskInformation = {
        title,
        description,
        deadline,
        priority,
        email: user?.email,
        status: status,
      };
      console.log({ taskInformation });
      const response = await axios.put(
        `https://task-management-server-three-woad.vercel.app/api/v1/update-task/${id}`,
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
          title: "sweetalert-custom-title",
          content: "sweetalert-custom-content",
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
      <Title title="Update Task" />
      <div className="relative flex flex-col justify-center h-[calc(100vh-100px)] overflow-auto">
        <div className="w-full p-6 m-auto bg-white dark:bg-gray-800  shadow-xl ring-1 ring-success lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-400">
            Update Task
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
                    defaultValue={data?.title}
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
                    defaultValue={data?.description}
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
                    defaultValue={data?.deadline}
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
                    <option value="low" selected={data?.priority === "low"}>
                      Low
                    </option>
                    <option
                      value="moderate"
                      selected={data?.priority === "moderate"}
                    >
                      Moderate
                    </option>
                    <option value="high" selected={data?.priority === "high"}>
                      High
                    </option>
                  </select>
                )}
                name="priority"
                control={control}
                rules={{ required: "Priority is required" }}
              />

              {errors.priority && (
                <span className="text-xs text-red-500">
                  {errors.priority.message}
                </span>
              )}
            </div>
            <div data-aos="zoom-in">
              <button className="btn btn-block rounded-sm bg-success border-none text-white hover:bg-success">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
