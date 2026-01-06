import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Tracking from '@/components/Tracking';

export const metadata: Metadata = {
    title: 'Vagdevi Nrityakshetra | Link in Bio',
    description: 'Bharatanatyam Dance School in Hyderabad - Book classes, view events, and connect with us.',
};

export default function VagdeviLinksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="antialiased min-h-screen flex flex-col items-center">
            {/* Meta Pixel and other analytics */}
            <Suspense fallback={null}>
                <Tracking />
            </Suspense>

            {/* Main Content Area - Transparent to let body gradient show */}
            <main className="w-full max-w-[420px] min-h-screen px-4 pb-12">
                {children}
            </main>
        </div>
    );
}
