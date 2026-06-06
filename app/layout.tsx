/**
 * Defines the required root HTML shell for the Next.js app.
 */
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
