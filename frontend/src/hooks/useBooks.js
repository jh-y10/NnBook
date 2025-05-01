import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchBookList = (query, page = 1, size = 20) => {
  return api.get("/ItemList.aspx", {
    params: {
      Query: query,
      QueryType: query ? "Title" : "Bestseller",
      MaxResults: size,
      start: (page - 1) * size + 1,
      SearchTarget: "Book",
      Cover: "MidBig",
    },
  });
};

export default function useBooks(query, page = 1, size = 20) {
<<<<<<< HEAD
    return useQuery({
        queryKey:["bookList", query, page, size],
        queryFn:() => fetchBookList(query, page, size),
        select:(result) => {
            //console.log("result.data", result.data.item);
            return result.data.item;
          },
        keepPreviousData: true,
        //staleTime:        1000 * 60 * 5,
      });
    }
=======
  return useQuery({
    queryKey: ["bookList", query, page, size],
    queryFn: () => fetchBookList(query, page, size),
    select: (result) => {
      //console.log("result.data", result.data.item);
      return result.data.item;
    },
    keepPreviousData: true,
    //staleTime:        1000 * 60 * 5,
  });
}
>>>>>>> 8baa75f3375ee1417652b8be165cd054596ad29d
