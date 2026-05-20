import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  const siteUrl = "https://rishabshrestha1.com.np";
  const title = "Rishab Shrestha | Mobile Application Developer";
  const description =
    "Portfolio of Rishab Shrestha, a mobile application developer building Kotlin, Jetpack Compose, Flutter, Firebase, and health-tech apps.";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#09090b" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Rishab Shrestha" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rishab Shrestha" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Hero />
      <About />
      <Footer />
    </>
  );
}
