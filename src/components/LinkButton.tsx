import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LinkButtonProps {
    href: string;
    onClick?: () => void;
    icon: LucideIcon;
    label: string;
    subtext?: string;
    isPrimary?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
    href,
    onClick,
    icon: Icon,
    label,
    subtext,
    isPrimary = false
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            style={{
                display: 'block',
                width: '100%',
                marginBottom: '12px',
                textDecoration: 'none',
                color: 'inherit'
            }}
        >
            <div style={{
                backgroundColor: isPrimary ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
                borderRadius: '18px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                border: isPrimary ? '2px solid rgba(37, 211, 102, 0.3)' : '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
            }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
            >
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: isPrimary ? 'rgba(37, 211, 102, 0.15)' : 'rgba(251, 146, 60, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }}>
                    <Icon
                        size={24}
                        strokeWidth={2}
                        color={isPrimary ? '#25D366' : '#FB923C'}
                    />
                </div>

                <div style={{ flex: 1 }}>
                    <div style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#1F2937',
                        marginBottom: subtext ? '2px' : '0'
                    }}>
                        {label}
                    </div>
                    {subtext && (
                        <div style={{
                            fontSize: '13px',
                            color: '#6B7280',
                            fontWeight: '500'
                        }}>
                            {subtext}
                        </div>
                    )}
                </div>
            </div>
        </a>
    );
};

export default LinkButton;
