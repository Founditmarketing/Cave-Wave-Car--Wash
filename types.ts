import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: string[];
  isButton?: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  isPremium?: boolean;
  color: 'cyan' | 'pink' | 'gray';
}

export interface Location {
  city: string;
  address: string;
  phone: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}