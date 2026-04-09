// import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(_request: NextRequest) {
    // const headersList = headers();
    // console.log((await headersList).get("Authorization"))
    return new Response("<h1>Profile API Route</h1>", {
        headers: {
            "Content-Type": "text/html"
        }
    })

}