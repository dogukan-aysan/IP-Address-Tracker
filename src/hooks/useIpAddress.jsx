import { useQuery } from "@tanstack/react-query";
import getApiResponse from "../service/api";
const useIpAddress = (ip) => {
  const response = useQuery({
    queryKey: ["location", ip],
    queryFn: () => getApiResponse(ip),
  });
  return response;
};

export default useIpAddress;
