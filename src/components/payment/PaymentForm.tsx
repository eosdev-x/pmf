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

  const handleStripeCheckout = async () => {
    try {
      setProcessing(true);
      setStatus('processing');

      const response = await fetch('http://localhost:3001/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      setStatus('error');
      const errorMessage = error instanceof Error ? error.message : 'Payment failed';
      setErrorMessage(errorMessage);
      onError(errorMessage);
    } finally {
      setProcessing(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (paymentMethod === 'card') {
      await handleStripeCheckout();
    } else {
      // Handle Venmo payment
      setStatus('success');
      onSuccess();
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
          <button
            type="submit"
            disabled={processing}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            {processing ? 'Processing...' : 'Proceed to Payment'}
          </button>
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
              <button
                type="submit"
                className="w-full bg-[#3D95CE] text-white px-6 py-3 rounded-md hover:bg-[#3D95CE]/90 transition-colors"
              >
                Open in Venmo App
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;