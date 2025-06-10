import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useFetchTask = (status) => {
  const { user } = useContext(AuthContext);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["task-data", user?.email, status],
    queryFn: async () => {
      const response = await axios.get(
        `https://task-management-server-three-woad.vercel.app/api/v1/todolist/${user?.email}?status=${status}`
      );
      return response.data;
    },
  });
  return { data, refetch, isLoading };
};

export default useFetchTask;
