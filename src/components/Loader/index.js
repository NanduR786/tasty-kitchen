import { TailSpin } from "react-loader-spinner";

const Loader = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <TailSpin
      height="80"
      width="80"
      color="#f7931e"
      ariaLabel="loading"
    />
  </div>
);

export default Loader;
