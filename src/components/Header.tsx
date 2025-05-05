import { Box, CssBaseline, Link, Typography, useTheme } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import TopMenu from "./TopMenu";

type Props = {
  children: React.ReactNode;
};
export default function Header() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        bgcolor: "rgba(25, 40, 65, 1)",
        py: isDesktop? 3 : 3.5,
        px: 3,
        display: "flex",
        //alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          display: "flex",
          position: "absolute",
          left: "1vw",
          top: "1vw",
        }}
      >
        <Link href="/">
          <img
            src="/src/assets/ferreira.png"
            alt="Logo"
            width="50vw"
            height="50vw"
          />{" "}
              </Link>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" , marginLeft:"1em"}}>
        <Typography
          fontFamily={"times new roman"}
          sx={{ color: "white", letterSpacing: "0.2em" , fontSize: "1em", padding:"auto", margin:"auto" }}
        >
          FERREIRA & BARBOSA
                  </Typography>
        <Typography
          fontFamily={"sans-serif"}
          sx={{ color: "white", letterSpacing: "0.3em" , fontSize: "1em", padding:"auto", margin:"auto", fontWeight:"200" }}
        >
          ADVOCACIA
                  </Typography>
                  </Box>
      </Box>
      <Box> {isDesktop && <TopMenu />}</Box>
    </Box>
  );
}
