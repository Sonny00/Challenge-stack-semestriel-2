import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document () {
  return (
		<Html lang="en">
			<Head>
				{/* Global site tag (gtag.js) - Google Analytics */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-2B8SVV4K29"
				/>
				<script
					dangerouslySetInnerHTML={{
					  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2B8SVV4K29', {
              page_path: window.location.pathname,
            });
          `
					}}
				/>

				<meta charSet="utf-8" />
				<meta name="description" content="Be your beautiful best." />
				<link rel="icon" href="/asset/favicon.ico" type="image/x-icon" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"></link>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
  );
}
