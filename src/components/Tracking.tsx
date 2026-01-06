'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

export const FB_PIXEL_ID = 'YOUR_PIXEL_ID_HERE'; // User needs to provide this or I should ask, or leave as placeholder

const Tracking = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Trigger PageView on route change (if using client-side nav)
            // For a single page linktree, this mostly runs once on mount.
            // window.fbq('track', 'PageView'); 
            // Note: The script below auto-triggers 'init' and 'PageView' on load.
            // For client-side route changes in Next.js, we might strictly need manual firing if we had multiple pages.
        }
    }, [pathname, searchParams]);

    return (
        <>
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1146387083658249'); 
            fbq('track', 'PageView');
          `,
                }}
            />
        </>
    );
};

// Helper for manual event tracking
export const trackEvent = (eventName: string, data = {}) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', eventName, data);
    }
};

export default Tracking;
