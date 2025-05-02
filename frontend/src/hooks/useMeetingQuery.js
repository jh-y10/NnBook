import { useQuery } from "@tanstack/react-query";
import axiosDB from "../utils/axiosDB";

export const useMeetingQuery = () => {
  return useQuery({
    queryKey: ["meetings"],
  });
};
