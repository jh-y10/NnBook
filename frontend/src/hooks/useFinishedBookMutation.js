import { useMutation, useQueryClient } from "@tanstack/react-query";
import authApi from "../utils/authApi";

export const useMarkAsFinishedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bookID, email }) =>
      authApi.patch("/library/finished", {
        bookID,
        ownerEmail: email,
        holderEmail: email,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["myLibrary"]);
      alert("책 상태가 '완독'으로 변경되었습니다!");
    },
    onError: (err) => {
      alert(err.response?.data?.message || "책 상태 변경 중 오류 발생");
    },
  });
};
