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
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
