import React from 'react';
import PricingCard from './PricingCard';

const PricingTable = () => {
  const pricingOptions = [
    {
      title: 'FREE',
      price: '$0',
      features: [
        'Single User',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
      isHighlighted: false,
    },
    {
      title: 'PLUS',
      price: '$9',
      features: [
        '5 Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
      isHighlighted: true,
    },
    {
      title: 'PRO',
      price: '$49',
      features: [
        'Unlimited Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
      isHighlighted: false,
    },
  ];

  return (
    <div className="pricing-table">
      {pricingOptions.map((option, index) => (
        <PricingCard key={index} {...option} />
      ))}
    </div>
  );
};

export default PricingTable;