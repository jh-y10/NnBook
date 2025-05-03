import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchBookList = (query, categoryId, page = 1, size = 100) => {
  const params = {
    QueryType: query ? "Title" : "Bestseller",
    MaxResults: size,
    start: (page - 1) * size + 1,
    SearchTarget: "Book",
    Cover: "MidBig",
  };

  if (query) params.Query = query;
  if (categoryId) params.CategoryId = categoryId;

  return api.get("/ItemList.aspx", { params });
};

export default function useBooks(query, categoryId, page = 1, size = 100) {
  return useQuery({
    queryKey: ["bookList", query, categoryId, page, size],
    queryFn: () => {
      console.log("📦 API 요청 파라미터:", query, categoryId, page, size);
      return fetchBookList(query, categoryId, page, size);
    },
    select: (result) => {
      console.log("📚 API 응답 결과:", result.data);
      return Array.isArray(result?.data?.item) ? result.data.item : [];
    },
    keepPreviousData: true,
  });
}
