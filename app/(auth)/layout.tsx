export const metadata = {
    title: 'Auth Layout',
    description: 'A simple Next.js app built with the latest features.',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <body>
                {children}
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