import { LocalizationProvider } from "@mui/x-date-pickers";
import { ThemeProvider } from "@mui/material";

export const metadata = {
  title: "Ikigai",
  description:
    "Productivity app for people who juggle several interests and responsibilities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">    
         <body style={{ backgroundColor: "#191919" }}>{children}</body>
    </html>
  );
}
