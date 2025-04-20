import React, { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

export function FlashMessage({ message, type, onClose, duration = 5000 }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <CheckCircle className="h-5 w-5" />;
            case 'error':
                return <XCircle className="h-5 w-5" />;
            case 'info':
                return <AlertCircle className="h-5 w-5" />;
        }
    };

    const getStyles = () => {
        const baseStyles = 'fixed top-4 right-4 flex items-center gap-3 rounded-lg p-4 shadow-lg transition-all duration-300 z-50';

        switch (type) {
            case 'success':
                return `${baseStyles} bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100`;
            case 'error':
                return `${baseStyles} bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100`;
            case 'info':
                return `${baseStyles} bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100`;
        }
    };

    return (
        <div className={getStyles()}>
            {getIcon()}
            <p className="text-sm font-medium">{message}</p>
            <button
                onClick={() => {
                    console.log('Close clicked');
                    onClose();
                }}
                className="ml-4 rounded-full p-1 hover:bg-black hover:bg-opacity-10 transition-colors"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}