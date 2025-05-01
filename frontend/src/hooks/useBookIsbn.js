import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchBookByISBN = (isbn) => {
  return api.get("/ItemLookUp.aspx", {
    params: {
      ItemIdType: "ISBN13",
      ItemId: isbn,
      Cover: "MidBig",
    },
  });
};

export default function useBookByISBN(isbn) {
  return useQuery({
    queryKey: ["bookByISBN", isbn],
    queryFn: () => fetchBookByISBN(isbn),
    select: (result) => {
      return result.data.item?.[0] || null;
    },
    enabled: !!isbn,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });
}