import { useQuery } from "@tanstack/react-query";
import authApi from "../utils/authApi";

export const useLendedBooksQuery = (ownerEmail) => {
  return useQuery({
    queryKey: ["myLibrary", "lended", ownerEmail],
    queryFn: async () => {
      const { data } = await authApi.get(
        `/library/lended?ownerEmail=${ownerEmail}`
      );
      return data; // 빌려준 도서 리스트
    },
    enabled: !!ownerEmail,
  });
};
