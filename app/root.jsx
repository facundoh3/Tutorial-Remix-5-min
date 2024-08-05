import {Links,Meta,Outlet,Scripts}from "@remix-run/react";

export default function App()
{
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Que onda Locuras Intergalacticas</h1>
        <h2>Prueba si renderiza en tiempo real y si, lo hace</h2>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
