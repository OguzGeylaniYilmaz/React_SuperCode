import { useState } from "react";
import "./MyAccount.css";
import { CreditCard } from "react-kawaii";

const BankAccount = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    setBalance(balance + parseFloat(amount));
    setAmount("");
  };

  const handleWithdraw = () => {
    setBalance(balance - parseFloat(amount));
    setAmount("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const getKawaiiEmoji = () => {
    if (balance > 0 && balance < 100) {
      return <CreditCard size={240} mood="blissful" color="#A6E191" />;
    } else if (balance >= 100 && balance < 500) {
      return <CreditCard size={240} mood="lovestruck" color="#A6E191" />;
    } else if (balance == 0) {
      return <CreditCard size={240} mood="sad" color="#A6E191" />;
    } else if (balance < 0) {
      return <CreditCard size={240} mood="ko" color="#A6E191" />;
    }
  };

  return (
    <div>
      <div>{getKawaiiEmoji()}</div>
      <h1>SUPER BANK</h1>
      <div className="account">
        <p>Dein Girokonto: {balance}€</p>
        <input
          type="number"
          value={amount}
          onChange={handleChange}
          placeholder="Gib einen Geldbetrag ein"
        />
        <button onClick={handleDeposit}>Einzahlen</button>
        <button onClick={handleWithdraw}>Auszahlen</button>
      </div>
    </div>
  );
};

export default BankAccount;
