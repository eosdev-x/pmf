import React, { useState } from 'react';
import { DollarSign, Heart, Users, Gift } from 'lucide-react';
import PaymentForm from '../components/payment/PaymentForm';

const DonationOption = ({ 
  icon: Icon, 
  title, 
  amount, 
  description,
  onSelect 
}: { 
  icon: any; 
  title: string; 
  amount: string; 
  description: string;
  onSelect: () => void;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
    <div className="flex flex-col items-center text-center">
      <div className="bg-green-100 p-3 rounded-full mb-4">
        <Icon className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-green-600 mb-4">{amount}</p>
      <p className="text-gray-600 mb-6">{description}</p>
      <button 
        onClick={onSelect}
        className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
      >
        Donate {amount}
      </button>
    </div>
  </div>
);

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleDonationSelect = (amount: number) => {
    setSelectedAmount(amount);
    setShowPaymentForm(true);
  };

  const handleCustomDonation = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(customAmount);
    if (amount > 0) {
      setSelectedAmount(amount);
      setShowPaymentForm(true);
    }
  };

  const handlePaymentSuccess = () => {
    setTimeout(() => {
      setShowPaymentForm(false);
      setSelectedAmount(null);
      setCustomAmount('');
    }, 2000);
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment failed:', error);
  };

  return (
    <div className="pt-16">
      <div className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Support Our Mission</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Your generous donation helps us continue our mission work in Panama's rainforest villages,
            bringing hope and sustainable development to indigenous communities.
          </p>

          {!showPaymentForm ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <DonationOption
                  icon={Heart}
                  title="Friend"
                  amount="$25"
                  description="Provides basic supplies for one family"
                  onSelect={() => handleDonationSelect(25)}
                />
                <DonationOption
                  icon={Gift}
                  title="Supporter"
                  amount="$50"
                  description="Funds educational materials for children"
                  onSelect={() => handleDonationSelect(50)}
                />
                <DonationOption
                  icon={Users}
                  title="Partner"
                  amount="$100"
                  description="Supports community development projects"
                  onSelect={() => handleDonationSelect(100)}
                />
                <DonationOption
                  icon={DollarSign}
                  title="Benefactor"
                  amount="$500"
                  description="Helps establish new mission outposts"
                  onSelect={() => handleDonationSelect(500)}
                />
              </div>

              <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center">Custom Donation</h2>
                <form onSubmit={handleCustomDonation} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Donation Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-gray-500">$</span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="pl-8 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        placeholder="Enter amount"
                        min="1"
                        step="0.01"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="mb-6 text-center">
                <button
                  onClick={() => setShowPaymentForm(false)}
                  className="text-green-600 hover:text-green-700"
                >
                  ← Change amount
                </button>
                <h2 className="text-2xl font-semibold mt-2">
                  Donation Amount: ${selectedAmount?.toFixed(2)}
                </h2>
              </div>
              <PaymentForm
                amount={selectedAmount || 0}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donate;