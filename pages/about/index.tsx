import * as React from "react";
import type { ReactElement } from "react";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";
import { Typography, Box, Grid, Button, Link } from "@mui/material";

const About: NextPageWithLayout = () => {
  return (
    <Grid
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "30px 200px",
        }}
      >
        <Grid item xs={6}>
          <Box
            component="img"
            sx={{
              borderRadius: "50px",
            }}
            alt="about"
            src="https://picsum.photos/id/1/250/350"
          />
        </Grid>
        <Grid item xs={6} sx={{ padding: "0px 120px" }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", paddingBottom: "10px" }}
          >
            درباره ما
          </Typography>
          <Typography variant="body1" sx={{ padding: "0px 50px" }}>
            نکته مهمی که در بیشتر سایتهای ایرانی توجهی به آن نمی شود طراحی صفحه
            درباره ما یا همان About Us است. اکثر افراد در این بخش مطالبی طولانی
            و خسته کننده برای کاربر و یا نوشته ای کوتاه و ناقص قرار میدهند که
            میتواند اعتبار سایت یا شرکت شما را زیر سوال ببرد.
          </Typography>
        </Grid>
      </Grid>
      <Box>
        <Button variant="outlined">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6666 7.00002C13.6666 8.76813 12.9642 10.4638 11.714 11.7141C10.4638 12.9643 8.76807 13.6667 6.99996 13.6667C6.12448 13.6667 5.25757 13.4942 4.44874 13.1592C3.6399 12.8242 2.90497 12.3331 2.28591 11.7141C1.66686 11.095 1.17579 10.3601 0.840762 9.55124C0.505732 8.74241 0.333294 7.8755 0.333294 7.00002C0.333295 5.23191 1.03567 3.53622 2.28592 2.28597C3.53616 1.03573 5.23185 0.333354 6.99996 0.333354C7.87544 0.333354 8.74235 0.505792 9.55118 0.840823C10.36 1.17585 11.0949 1.66692 11.714 2.28598C12.9642 3.53622 13.6666 5.23191 13.6666 7.00002ZM2.99996 7.66669L8.33329 7.66669L5.99996 10L6.94663 10.9467L10.8933 7.00002L6.94663 3.05335L5.99996 4.00002L8.33329 6.33335L2.99996 6.33335L2.99996 7.66669Z"
              fill="#187DF1"
            />
          </svg>
          <Link sx={{ paddingLeft: 10 }} href="/">
            صفحه اصلی
          </Link>
        </Button>
      </Box>
    </Grid>
  );
};
About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
