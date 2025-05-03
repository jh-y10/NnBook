import { useQuery } from "@tanstack/react-query";
import authApi from "../utils/authApi";

export const useReadingBookQuery = ({ ownerEmail, holderEmail }) => {
  return useQuery({
    queryKey: ["myLibrary", "reading", ownerEmail, holderEmail],
    queryFn: async () => {
      const { data } = await authApi.get(
        `/library/reading?ownerEmail=${ownerEmail}&holderEmail=${holderEmail}`
      );
      return data; // 읽고 있는 도서 리스트
    },
    enabled: !!ownerEmail && !!holderEmail,
  });
};
