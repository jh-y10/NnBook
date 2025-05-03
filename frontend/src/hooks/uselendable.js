import { useQuery } from "@tanstack/react-query";
//import api from "../utils/api";
import backapi from "../utils/backapi";

async function fetchLendables() {
    const { data } = await backapi.get("/borrow/lendables");
    return data;
  }
  


  export default function useLendables() {
    return useQuery({
      queryKey: ["lendables"],
      queryFn: fetchLendables,
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    });
  }