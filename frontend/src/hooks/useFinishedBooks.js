// src/hooks/useFinishedBooksQuery.js
import { useQuery } from "@tanstack/react-query";
import authApi from "../utils/authApi";

export const useFinishedBooksQuery = ({ ownerEmail, holderEmail }) => {
  return useQuery({
    queryKey: ["myLibrary", "finished", ownerEmail, holderEmail],
    queryFn: async () => {
      const { data } = await authApi.get(
        `/library/finished?ownerEmail=${ownerEmail}&holderEmail=${holderEmail}`
      );
      return data;
    },
    enabled: !!ownerEmail && !!holderEmail,
  });
};
