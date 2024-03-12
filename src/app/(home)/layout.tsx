import Footer from "./components/Footer";
import Header from "./components/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Home</title>
      </head>
      <body>
        <Header />
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
