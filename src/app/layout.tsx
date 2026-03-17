import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World Places",
  description: "Explore remarkable places across the globe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
