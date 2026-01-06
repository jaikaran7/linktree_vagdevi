import React from 'react';
import { Star, MapPin } from 'lucide-react';

const ProfileHeader = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            marginBottom: '32px',
            paddingTop: '48px'
        }}>
            {/* Logo Circle */}
            <div style={{
                width: '96px',
                height: '96px',
                borderRadius: '50%',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                border: '3px solid rgba(255, 255, 255, 0.8)'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#C2410C'
                }}>
                    VN
                </div>
            </div>

            {/* Name */}
            <h1 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1F2937',
                margin: '0 0 8px 0',
                letterSpacing: '-0.5px'
            }}>
                Vagdevi Nrityakshetra
            </h1>

            {/* Subtitle */}
            <p style={{
                fontSize: '13px',
                fontWeight: '500',
                color: '#6B7280',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: '0 0 16px 0'
            }}>
                Bharatanatyam Dance School
            </p>

            {/* Info Line */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                color: '#4B5563',
                fontWeight: '500',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={14} fill="#FBBF24" color="#FBBF24" />
                    <span style={{ color: '#1F2937', fontWeight: '600' }}>4.9</span>
                </div>
                <span style={{ color: '#D1D5DB' }}>·</span>
                <span>16 Reviews</span>
                <span style={{ color: '#D1D5DB' }}>·</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} color="#6B7280" />
                    <span>OU Colony, Shaikpet</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
