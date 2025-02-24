import React from 'react';

export interface CardProps {
  title?: string;
  text?: string;
  imageUrl?: string;
  children?: React.ReactNode;
}
