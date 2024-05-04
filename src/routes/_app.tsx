import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>src</title>
        <link rel="stylesheet" href="/styles.css" />
        {/* WARNING tailwindcss */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
