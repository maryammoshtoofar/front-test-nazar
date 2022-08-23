import { Box } from "@mui/material";
import Home from "../../pages";
import About from "../../pages/about";
import Header from "../header";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <Box sx={{ bgcolor: "secondary.main", height: "100vh" }}>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
