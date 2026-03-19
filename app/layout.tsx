export const metadata = {
    title: 'Built With Next.js',
    description: 'A simple Next.js app built with the latest features.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <body>
                <header style={{
                    backgroundColor: "lightblue",
                    padding: "1rem",
                }}>
                    <p>Header</p>
                    {children}
                </header>
                <footer style={{
                    backgroundColor: "lightgray",
                    padding: "1rem",
                }}>
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    )
}