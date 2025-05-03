import { useQuery } from "@tanstack/react-query";
import authApi from "../utils/authApi";

export const useReadingBookQuery = (email) => {
  return useQuery({
    queryKey: ["myLibrary", "reading", email],
    queryFn: async () => {
      const { data } = await authApi.get(`/library/reading?email=${email}`);
      return data; // 읽고 있는 도서 리스트
    },
    enabled: !!email,
  });
};