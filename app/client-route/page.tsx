"use client"

import { serverSideFuction } from "../utils/server-utils"

export default function ClientRoutePage() {

    const results = serverSideFuction();

    return (
        <h1> Client Route {results}</h1>
    )
}