import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTask = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      return await axios.get(`${process.env.REACT_BASE_URL}/allTask`);
    },
  });

  console.log("data :-", data);
  console.log("isPending:- ", isPending);
  console.log("isError:- ", isError);
  console.log("error:-", error);
  return { data, isPending };
};

export default useTask;
