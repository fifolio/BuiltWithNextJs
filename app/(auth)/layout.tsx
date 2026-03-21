"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'login', href: '/login' },
    { name: 'signup', href: '/signup' },
    { name: 'forgot password', href: '/forgot-password' },
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();

    return (
        <div>
            {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                return (
                    <Link key={link.name} href={link.href} className={isActive ? 'text-blue-500 ' : 'text-gray-500'}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}