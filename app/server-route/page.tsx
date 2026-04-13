import { serverSideFuction } from "../utils/server-utils"

export default function ServerRoutePage() {

    const results = serverSideFuction();

    return (
        <h1> Server Route {results}</h1>
    )
}