import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/fetcch-logo.ico" />
        <meta name="title" content="Fetcch - Pull Payments Layer" />
        <meta name="description" content="By enabling wallets and applications to send chain-agnostic transaction requests directly to the user's endpoint" />
        <meta name="keywords" content="pull payments, payments, blockchain, fetcch, fetcchx, transaction requests, request, request payments" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Fetcch" />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fetcch.xyz" />
        <meta property="og:title" content="Fetcch - Pull Payments Layer" />
        <meta property="og:description" content="By enabling wallets and applications to send chain-agnostic transaction requests directly to the user's endpoint" />
        <meta property="og:image" content="/tx-request.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fetcch.xyz" />
        <meta property="twitter:title" content="Fetcch - Pull Payments Layer" />
        <meta property="twitter:description" content="By enabling wallets and applications to send chain-agnostic transaction requests directly to the user's endpoint" />
        <meta property="twitter:image" content="/tx-request.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
