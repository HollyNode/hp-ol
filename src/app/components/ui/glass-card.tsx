import React from 'react';
import styles from '../../card.module.css';  // Assuming you're using a CSS module
import { TablerIcon } from '@tabler/icons-react';  // Importing type for the icon prop

interface CardProps {
  icon: TablerIcon;    // Icon component from Tabler
  description: string; // Description text
}

const Card: React.FC<CardProps> = ({ icon: Icon, description }) => {
  return (
    <div className={styles['glass-card']}>
      {/* Icon */}
      <div className={styles['card-icon']}>
        <Icon size={40} /> {/* Adjust the size as needed */}
      </div>
      {/* Description */}
      <div className={styles['card-description']}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
