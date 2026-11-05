import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-[#0e1013]">
      <head>
        <meta charSet="utf-8" />
        <title>Faro Casino официальный сайт | Фаро Казино играть онлайн зеркало рабочее</title>
        <meta
          name="description"
          content="Faro Casino официальный сайт онлайн клуба. Вход и регистрация через актуальное рабочее зеркало Фаро Казино. Играйте на реальные деньги в слоты, получайте бонусы и фриспины на farocasino35."
        />
        <meta name="keywords" content="faro casino, faro casino зеркало, faro casino играть, faro casino официальный, faro casino официальный сайт, faro казино, фаро казино, фаро казино зеркало, фаро казино зеркало рабочее, фаро казино играть, фаро казино онлайн, фаро казино официальный, фаро казино официальный сайт" />
        <link rel="canonical" href="https://farocasino35.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0e1013" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Faro Casino официальный сайт | Фаро Казино играть онлайн" />
        <meta
          property="og:description"
          content="Официальный сайт Faro Casino: актуальное рабочее зеркало Фаро Казино, вход, мгновенные выплаты и турниры."
        />
        <meta property="og:url" content="https://farocasino35.vercel.app/" />
        <meta property="og:site_name" content="Faro Casino" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faro Casino официальный сайт | Фаро Казино играть онлайн" />
        <meta
          name="twitter:description"
          content="Актуальное рабочее зеркало Фаро Казино, онлайн слоты и быстрые выплаты."
        />
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className="antialiased bg-[#0e1013] text-[#e5e7eb] font-sans m-0 p-0 selection:bg-[#f5ba42] selection:text-[#0e1013]">
        {children}
      </body>
    </html>
  )
}
