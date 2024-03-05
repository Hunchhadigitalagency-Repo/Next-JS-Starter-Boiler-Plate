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
        {children}
        <Footer/>
      </body>
    </html>
  );
}
