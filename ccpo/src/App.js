import React, { useState } from 'react';
import CreditCardForm from './CreditCardForm';
import AuditLog from './AuditLog';
import './App.css'; // optional: add your styles here

function App() {
  // State to store added cards and audit logs
  const [cards, setCards] = useState([]);
  const [logs, setLogs] = useState([]);

  // Function to add a new card and log the action
  const addCard = (card) => {
    setCards((prevCards) => [...prevCards, card]);
    setLogs((prevLogs) => [
      ...prevLogs,
      {
        timestamp: new Date().toLocaleString(),
        message: `Added card for ${card.cardHolder}`,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>Credit Card Management</h1>
      <CreditCardForm onAddCard={addCard} />
      <hr />
      <h2>Cards</h2>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>
            <strong>{card.cardHolder}</strong> - {card.cardNumber} - Exp:
            {card.expirationDate}
          </li>
        ))}
      </ul>
      <AuditLog logs={logs} />
    </div>
  );
}

export default App;
