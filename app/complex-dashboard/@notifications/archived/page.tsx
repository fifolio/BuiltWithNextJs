import { Card } from "@/app/components/card";
import Link from "next/link";

export default function Archived() {
    return (
        <div>
            <Card>Archived Notifications</Card>
            <div>
                <Link href="/complex-dashboard/">Default</Link>
            </div>
        </div>
    )
}