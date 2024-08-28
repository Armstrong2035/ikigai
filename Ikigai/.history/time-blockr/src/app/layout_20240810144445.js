export const metadata = {
  title: "Declutter",
  description:
    "Productivity app for people who juggle several interests and responsibilities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
