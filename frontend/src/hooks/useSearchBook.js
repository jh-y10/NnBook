import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchBook=(query, page = 1, size = 20)=>{
    return api.get('/ItemSearch.aspx', {
        params:{
            Query: query,
            QueryType: "Keyword",
            MaxResults: size,
            start: (page - 1) * size + 1,
            SearchTarget: "Book",
            Cover: "MidBig",
                }
    })
}

export default function useSearchBook (query, page = 1, size = 20){
    return useQuery({
        queryKey: ["book-search", query, page, size],
        queryFn:()=>fetchSearchBook(query, page, size),
        select: (result) => result.data.item,
        enabled: !!query,
        keepPreviousData: true,
    })
}