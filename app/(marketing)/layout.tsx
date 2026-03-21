export const metadata = {
    title: 'Marketing Layout',
    description: 'A simple Next.js app built with the latest features.',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
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