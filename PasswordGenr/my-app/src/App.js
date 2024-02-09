import "./App.css";
import { useState } from "react";
import usePasswordGenerator from "./Hooks/UsePasswordGenerator";
import PasswordStrengthIndicator from "./components/PasswordStrengthIndicator";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
export default function App() {
  const [length, setlength] = useState(4);

  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setcopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setcopied(true);

    setTimeout(() => {
      setcopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  return (
    <div className="container">
      {/* Password Text and copy */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            text={copied ? "copied" : "copy"}
            customClass="copyBtn"
            onClick={handleCopy}
          />
        </div>
      )}
      {/* Character length */}
      <div className="charlength">
        <span>
          <label>Character length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          onChange={(e) => setlength(e.target.value)}
          value={length}
        />
      </div>

      {/* CheckBoxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <CheckBox
              key={index}
              title={checkbox.title}
              onChange={() => handleCheckboxChange(index)}
              state={checkbox.state}
            />
          );
        })}
      </div>

      {/* Strength */}
      <PasswordStrengthIndicator password={password} />

      {/* Erorr Handling */}

      {errorMessage && <div className="errorMessage">{errorMessage}</div>}

      {/* Generate Button */}

      <Button
        text="Generate Password"
        onClick= {() => generatePassword(checkboxData, length)}
        customClass="generateBtn"
      />
    </div>
  );
}
