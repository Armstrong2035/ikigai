export const metadata = {
  title: "Declutter",
  description:
    "Productivity app for people who juggle several interests and responsibilities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#C9E4EB" }}>{children}</body>
    </html>
  );
}
