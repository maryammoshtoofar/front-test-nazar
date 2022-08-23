import { Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { SwitchModeButton } from "../switchTheme";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar
          sx={{
            bgcolor: "secondary.main",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Link sx={{ paddingLeft: 10 }} href="/">
              صفحه نخست
            </Link>
            <Link href="/about">درباره ما</Link>
          </Box>
          <SwitchModeButton />
          <Box>
            <Button color="primary" variant="contained">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
                  fill="#fff"
                />
              </svg>
              ثبت نام
            </Button>
            <Button color="primary" variant="outlined">
              ورود
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
