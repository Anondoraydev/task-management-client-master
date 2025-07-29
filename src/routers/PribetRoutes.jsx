import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../context/AuthProvider";

const PribetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  } else if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

PribetRoutes.propTypes = {
  
  children: PropTypes.node.isRequired,
};

export default PribetRoutes;
