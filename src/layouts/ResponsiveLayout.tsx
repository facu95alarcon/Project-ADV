import { Box, CssBaseline, useTheme } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import TopMenu from "../components/TopMenu";
import BottomMenu from "../components/BottomMenu";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

export default function ResponsiveLayout({ children }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100vw" , padding: 0, margin: 0}}>
      <CssBaseline />
      <Header/>
    
      <Box sx={{ flexGrow: 1, p: 2 }}>{children}</Box>
      {!isDesktop && <BottomMenu />}
    </Box>
  );
}
