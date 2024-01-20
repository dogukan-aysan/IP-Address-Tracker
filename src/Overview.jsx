import Info from "./Info";

function Overview() {
  return (
    <div>
      <Info field="IP Adress" value="192.212.174.101" />
      <Info field="Location" value="Brooklyn, NY 10001" />
      <Info field="Timezone" value="UTC -05:00" />
      <Info field="ISP" value="SpaceX Starling" />
    </div>
  );
}

export default Overview;
