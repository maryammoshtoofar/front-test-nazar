import { NextPage } from "next";
import { Typography, Grid, Box, Button, Link } from "@mui/material";

const Landing: NextPage = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        padding: "10px 50px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid item>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            sx={{
              borderRadius: "16px",
            }}
            alt="Porto Beaches"
            src="https://picsum.photos/seed/picsum/600/400"
          />
          <Typography
            sx={{
              position: "absolute",
              bottom: "20px",
              right: "100px",
              color: "white",
            }}
            variant="h4"
          >
            ساحل پورتو پرتغال
          </Typography>
        </Box>
        <Typography variant="body1">
          شهر آرکوزلو یک حومه مسکونی ممتاز پورتو است که از بسیاری جهات دارای
          زمین گلف 9 سوراخ معروف ، ویلاهای مجلل و عمارت است. خود میرامار به
          عنوان مقصدی برای تعطیلات عمومی در نظر گرفته می شود که پرتغالی ها از
          مناطق همسایه آن را دوست دارند. با این حال ، این ساحل هنوز به عنوان یک
          مقصد گردشگری بین المللی چندان مشهور نشده است ، که به بازدیدکنندگانش
          مکانی برای لذت بردن می دهد.
        </Typography>
      </Grid>
      <Box>
        <Button variant="contained">
          <Link sx={{ color: "white", textDecoration: "none" }} href="/about">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333336 6.99998C0.333336 5.23187 1.03571 3.53618 2.28596 2.28593C3.5362 1.03569 5.23189 0.333313 7 0.333313C7.87548 0.333313 8.74239 0.505751 9.55122 0.840783C10.3601 1.17581 11.095 1.66688 11.714 2.28593C12.3331 2.90499 12.8242 3.63992 13.1592 4.44876C13.4942 5.25759 13.6667 6.1245 13.6667 6.99998C13.6667 8.76809 12.9643 10.4638 11.714 11.714C10.4638 12.9643 8.76811 13.6666 7 13.6666C6.12452 13.6666 5.25762 13.4942 4.44878 13.1592C3.63994 12.8241 2.90501 12.3331 2.28596 11.714C1.03571 10.4638 0.333336 8.76809 0.333336 6.99998ZM11 6.33331H5.66667L8 3.99998L7.05334 3.05331L3.10667 6.99998L7.05334 10.9466L8 9.99998L5.66667 7.66665H11L11 6.33331Z"
                fill="white"
              />
            </svg>
            درباره ما
          </Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default Landing;
