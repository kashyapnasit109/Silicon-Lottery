import React from 'react';
import { cn } from '../../utils/cn';

interface PillTagProps {
    label: string;
    className?: string;
    dotColor?: 'cyan' | 'amber' | 'purple' | 'red';
}

const colorMap = {
    cyan: 'bg-cyan-400 shadow-[0_0_8px_#00d4ff]',
    amber: 'bg-amber-500 shadow-[0_0_8px_#ff6b35]',
    purple: 'bg-purple-500 shadow-[0_0_8px_#7b5ea7]',
    red: 'bg-red-500 shadow-[0_0_8px_#ff3355]',
};

export const PillTag: React.FC<PillTagProps> = ({ label, className, dotColor = 'cyan' }) => {
    return (
        <div className={cn("pill-tag group cursor-default", className)}>
            <div className={cn("w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-150", colorMap[dotColor])} />
            <span className="text-white/90 font-medium tracking-wide">
                {label}
            </span>
        </div>
    );
};
