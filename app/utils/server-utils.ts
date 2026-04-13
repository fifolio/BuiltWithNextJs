import "server-only";

export const serverSideFuction = () => {
    console.log(`
        use .env variables,
        use protected confidential information
        and do not worry about the client seeing this code.
        `)

    return "Server results";
}