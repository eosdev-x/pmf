import React from 'react';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

interface PaymentStatusProps {
  status: 'idle' | 'processing' | 'success' | 'error';
  message?: string;
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({ status, message }) => {
  if (status === 'idle') return null;

  const statusConfig = {
    processing: {
      icon: Loader,
      text: 'Processing payment...',
      className: 'text-blue-600',
    },
    success: {
      icon: CheckCircle,
      text: 'Payment successful!',
      className: 'text-green-600',
    },
    error: {
      icon: XCircle,
      text: message || 'Payment failed',
      className: 'text-red-600',
    },
  }[status];

  const Icon = statusConfig.icon;

  return (
    <div className={`flex items-center justify-center space-x-2 mb-4 ${statusConfig.className}`}>
      <Icon className={`h-5 w-5 ${status === 'processing' ? 'animate-spin' : ''}`} />
      <span>{statusConfig.text}</span>
    </div>
  );
};
export default PaymentStatus;