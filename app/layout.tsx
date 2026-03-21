export const metadata = {
    title: {
        default: 'BuiltwithNext.js', // Default & fallback title for all pages
        template: '%s | BuiltwithNext.js', // Prefix for dynamic titles (e.g., "Home | BuiltwithNext.js")
        absolute: '', // Override for title (e.g., "BuiltwithNext.js - Home")
    },
    description: 'A simple Next.js app built with the latest features.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>{metadata.title.default}</title>
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