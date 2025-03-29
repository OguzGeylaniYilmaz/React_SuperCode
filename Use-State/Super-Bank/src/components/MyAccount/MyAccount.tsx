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
    if (balance == 0) {
      return <CreditCard size={240} mood="sad" color="#fccb7e" />;
    } else if (balance > 0 && balance <= 1000) {
      return <CreditCard size={240} mood="excited" color="#ffbae1" />;
    } else if (balance > 1000 && balance < 5000) {
      return <CreditCard size={240} mood="lovestruck" color="##add2ff" />;
    } else if (balance >= 5000) {
      return <CreditCard size={240} mood="happy" color="##add2ff" />;
    } else {
      return <CreditCard size={240} mood="shocked" color="##add2ff" />;
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
