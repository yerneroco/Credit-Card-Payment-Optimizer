import React, { useState } from 'react';

const CreditCardForm = ({ onAddCard }) => {
  // Initial state for our form fields
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    dueDate: '',
    statementDate: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard(cardData); // Pass data to parent
    // Reset form fields
    setCardData({
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      dueDate: '',
      statementDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={cardData.cardNumber}
          onChange={handleChange}
          placeholder="XXXX-XXXX-XXXX-XXXX"
        />
      </div>
      <div>
        <label>Card Holder:</label>
        <input
          type="text"
          name="cardHolder"
          value={cardData.cardHolder}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Expiration Date:</label>
        <input
          type="month"
          name="expirationDate"
          value={cardData.expirationDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={cardData.dueDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Statement Date:</label>
        <input
          type="date"
          name="statementDate"
          value={cardData.statementDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Card</button>
    </form>
  );
};

export default CreditCardForm;
