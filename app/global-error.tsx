"use client";

export default function GlobalError() {
    return (
        <html>
            <body>
                <div>
                    <h1>Something went wrong!</h1>

                    <button
                        onClick={() => window.location.reload()}
                    >Refresh</button>
                </div>
            </body>
        </html>
    )
}