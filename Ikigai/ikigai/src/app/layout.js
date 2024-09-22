import { LocalizationProvider } from "@mui/x-date-pickers";

export const metadata = {
  title: "Ikigai",
  description:
    "Productivity app for people who juggle several interests and responsibilities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LocalizationProvider>
          <body style={{ backgroundColor: "#191919" }}>{children}</body>
      </LocalizationProvider>
    </html>
  );
}
