import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard, Wallet } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import PaymentStatus from './PaymentStatus';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onError }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'venmo'>('card');
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const generateVenmoUrl = () => {
    const recipient = 'Panama-Mission';
    const amountString = amount.toFixed(2);
    const note = 'Donation';
    return `venmo://paycharge?txn=pay&recipients=${recipient}&amount=${amountString}&note=${encodeURIComponent(note)}`;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcessing(true);
    setStatus('processing');

    try {
      if (paymentMethod === 'card') {
        const stripe = await stripePromise;
        if (!stripe) throw new Error('Stripe failed to load');

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // For demo purposes, randomly succeed or fail
        if (Math.random() > 0.5) {
          setStatus('success');
          onSuccess();
        } else {
          throw new Error('Payment failed. Please try again.');
        }
      } else {
        // Handle Venmo payment
        setStatus('success');
        onSuccess();
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Payment failed');
      onError(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`flex items-center px-4 py-2 rounded-full ${
            paymentMethod === 'card'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
          onClick={() => setPaymentMethod('card')}
        >
          <CreditCard className="h-4 w-4 mr-2" />
          Credit Card
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-full ${
            paymentMethod === 'venmo'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
          onClick={() => setPaymentMethod('venmo')}
        >
          <Wallet className="h-4 w-4 mr-2" />
          Venmo
        </button>
      </div>

      <PaymentStatus status={status} message={errorMessage} />

      <form onSubmit={handleSubmit} className="space-y-4">
        {paymentMethod === 'card' ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                placeholder="4242 4242 4242 4242"
                className="w-full px-3 py-2 border rounded-md"
                disabled={processing}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={processing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={processing}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Venmo Recipient
              </label>
              <input
                type="text"
                value="@Panama-Mission"
                className="w-full px-3 py-2 border rounded-md bg-gray-50"
                disabled={true}
                readOnly
              />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <QRCodeSVG
                  value={generateVenmoUrl()}
                  size={200}
                  level="H"
                  includeMargin={true}
                  imageSettings={{
                    src: "https://cdn1.venmo.com/marketing/images/branding/venmo-icon.svg",
                    x: undefined,
                    y: undefined,
                    height: 40,
                    width: 40,
                    excavate: true,
                  }}
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Scan this QR code with your phone's camera to open Venmo and complete the payment
              </p>
              <a
                href={generateVenmoUrl()}
                className="text-[#008CFF] hover:text-[#0074D4] text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Or click here to open Venmo
              </a>
            </div>
          </div>
        )}

        {paymentMethod === 'card' && (
          <button
            type="submit"
            disabled={processing}
            className={`w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors ${
              processing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {processing ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
          </button>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;