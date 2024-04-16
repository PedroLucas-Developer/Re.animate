export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="pt">
      <head>
        <meta charSet="UTF-8" />
        <title>Re.animate</title>
        <meta name="author" content="Pedro Lucas Macedo de Moraes"/>
        <meta name="description" content="Site do Reanimate Point Media"/>
        <meta name="keywords" content="sites, web, desenvolvimento"/>
        <link rel='shortcut icon' href='/imagens/reanimate.ico' />
      </head>
      <body>{children}</body>
    </html>
  )
}
