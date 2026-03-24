// pages/index.js
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>Rishab Shrestha — Mobile Application Developer</title>
        <meta name="description"
          content="Portfolio of Rishab Shrestha — Mobile Application Developer specializing in Kotlin, Jetpack Compose, and Flutter. Building smart health-tracking and educational apps." />

        <meta name="author" content="Rishab Shrestha" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rishab Shrestha" />
        <meta property="og:title"
          content="Rishab Shrestha — Mobile Application Developer" />
        <meta property="og:description"
          content="Portfolio of Rishab Shrestha — Mobile Application Developer specializing in Kotlin, Jetpack Compose, and Flutter." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title"
          content="Rishab Shrestha — Mobile Application Developer" />
        <meta name="twitter:description"
          content="Portfolio of Rishab Shrestha — Mobile Application Developer specializing in Kotlin, Jetpack Compose, and Flutter." />

      </Head>
      <Hero />
      <About />
      <Footer />
    </>
  );
}
