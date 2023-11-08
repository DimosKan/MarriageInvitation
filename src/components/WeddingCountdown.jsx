import React from 'react';
import Countdown from 'react-countdown';

const WeddingCountdown = () => {
  const weddingDate = new Date('2023-12-27T18:00:00');

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Ο Γάμος έγινε, Και στα δικά σας!</span>;
    } else {
      return (
        <div>
          <div className="countdown-item">
            <span className="countdown-value">{days}</span> Μέρες
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{hours}</span> Ώρες
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{minutes}</span> Λεπτά
          </div>
        </div>
      );
    }
  };

  return (
    <div className="countdown-container">
      <h2>Αντίστροφη Μέτρηση για τον γάμο</h2>
      <Countdown date={weddingDate} renderer={renderer} />
    </div>
  );
};

export default WeddingCountdown;
