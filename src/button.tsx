import React from 'react';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline';
    className?: string;
    children: React.ReactNode;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ variant = 'default', className, children, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                variant={variant}
                className={cn(
                    'px-6 py-3 rounded-full',
                    variant === 'default' &&
                        'bg-purple-500 hover:bg-purple-600 text-white',
                    variant === 'outline' &&
                        'text-white border-purple-500 hover:bg-purple-500/20 hover:border-purple-400',
                    className
                )}
                {...props}
            >
                {children}
            </Button>
        );
    }
);
CustomButton.displayName = 'CustomButton';

export default CustomButton;
