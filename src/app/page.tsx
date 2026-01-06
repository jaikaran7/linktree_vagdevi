'use client';

import React from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import LinkButton from '@/components/LinkButton';
import { trackEvent } from '@/components/Tracking';
import {
  MessageCircle,
  Phone,
  Globe,
  MapPin,
  Star,
  Instagram,
  Youtube,
  Ticket
} from 'lucide-react';

export default function Home() {
  const handleContactClick = (type: string) => {
    trackEvent('Contact', { type });
  };

  const handleViewContent = (content_name: string) => {
    trackEvent('ViewContent', { content_name });
  };

  return (
    <div style={{
      maxWidth: '420px',
      margin: '0 auto',
      padding: '0 20px 40px 20px',
      minHeight: '100vh'
    }}>
      <ProfileHeader />

      <div style={{ width: '100%' }}>
        <LinkButton
          icon={MessageCircle}
          label="WhatsApp"
          subtext="Book a Free Demo"
          href="https://wa.me/919522393223?text=Hi,%20I'm%20interested%20in%20Bharatanatyam%20classes."
          onClick={() => handleContactClick('WhatsApp')}
          isPrimary={true}
        />

        <LinkButton
          icon={Phone}
          label="Call Now"
          subtext="+91 95223 93223 | +91 77803 29415"
          href="tel:+919522393223"
          onClick={() => handleContactClick('Phone')}
        />

        <LinkButton
          icon={Globe}
          label="Official Website"
          subtext="vagdevinrityakshetra.com"
          href="https://vagdevinrityakshetra.com"
          onClick={() => handleViewContent('Website')}
        />

        <LinkButton
          icon={MapPin}
          label="Google Maps"
          subtext="Get Directions"
          href="https://www.google.com/maps/search/?api=1&query=Vagdevi+Nrityakshetra+OU+Colony+Shaikpet"
          onClick={() => handleContactClick('MapDirections')}
        />

        <LinkButton
          icon={Star}
          label="Google Reviews"
          subtext="Read our 5-star reviews"
          href="https://www.google.com/search?q=Vagdevi+Nrityakshetra+reviews"
          onClick={() => handleViewContent('Reviews')}
        />

        <LinkButton
          icon={Instagram}
          label="Instagram"
          subtext="@vagdevi_nrityakshetra"
          href="https://instagram.com/vagdevi_nrityakshetra"
          onClick={() => handleViewContent('Instagram')}
        />

        <LinkButton
          icon={Youtube}
          label="YouTube"
          subtext="Watch our performances"
          href="https://www.youtube.com/results?search_query=Vagdevi+Nrityakshetra"
          onClick={() => handleViewContent('YouTube')}
        />

        <LinkButton
          icon={Ticket}
          label="Events & Performances"
          subtext="Upcoming shows"
          href="https://vagdevinrityakshetra.com/events"
          onClick={() => handleViewContent('Events')}
        />
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        fontSize: '11px',
        color: '#9CA3AF',
        fontWeight: '500'
      }}>
        <p style={{ margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Vagdevi Nrityakshetra
        </p>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </div>
  );
}
