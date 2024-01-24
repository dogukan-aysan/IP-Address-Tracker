import Info from "./Info";
import useIpAddress from "../hooks/useIpAddress";
import Loader from "./Loader";
import Error from "./Error";
import { useContext, useEffect } from "react";
import { Context } from "../context/context";

function Overview() {
  const { isPending, error, data } = useIpAddress();
  const { dispatch } = useContext(Context);

  useEffect(() => {
    if (data) {
      dispatch({
        type: "position",
        payload: [data.location.lat, data.location.lng],
      });
    }
  }, [dispatch, data]);

  if (isPending)
    return (
      <div className="overview overview--loading">
        <Loader />
      </div>
    );
  if (error) return <Error />;

  const {
    ip,
    isp,
    location: { city, region, timezone, postalCode },
  } = data;

  return (
    <div className="overview">
      <Info field="IP Adress" value={ip ? ip : ""} />
      <Info field="Location" value={`${city}, ${region} ${postalCode}`} />
      <Info field="Timezone" value={`UTC ${timezone}`} />
      <Info field="ISP" value={isp} />
    </div>
  );
}

export default Overview;
