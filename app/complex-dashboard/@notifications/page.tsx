import { Card } from "@/app/components/card";
import  Link from "next/link";

export default function Notifications() {
    return (
        <div>
            <Card>Notifications</Card>
            <div>
                <Link href="/complex-dashboard/archived">Archived</Link>
            </div>
        </div>
    )
}