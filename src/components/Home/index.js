import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";

const Home = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" replace />; // ✅ replaces <Redirect />
  }
  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
