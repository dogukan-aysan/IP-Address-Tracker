import { useQuery } from "@tanstack/react-query";
import getApiResponse from "../service/api";
import { useContext } from "react";
import { Context } from "../context/context";

const useIpAddress = () => {
  const { ip } = useContext(Context);
  const response = useQuery({
    queryKey: ["location", ip],
    queryFn: () => getApiResponse(ip),
  });
  return response;
};

export default useIpAddress;
