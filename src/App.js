import React, { useState, useRef } from "react";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/viva-dark/theme.css";

import { Button } from "primereact/button";
import { Knob } from "primereact/knob";
import { Toast } from "primereact/toast";
import "./App.css";
import "./Knob/Knob.css";

function App() {
  const toast = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState(0);

  const show = () => {
    toast.current.show({
      severity: "info",
      summary: "Info",
      detail: "Your phone number is " + phoneNumber,
    });
  };

  return (
    <div className="App">
      <div className="card flex justify-content-center">
        <p>Input your phone number to continue</p>
        <Knob
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.value)}
          min={0}
          max={999999999}
          size={300}
        />
        <div className="flex gap-2">
          <Button
            icon="pi pi-plus"
            onClick={() => setPhoneNumber(phoneNumber + 1)}
            disabled={phoneNumber === 100}
          />
          <Button
            icon="pi pi-minus"
            onClick={() => setPhoneNumber(phoneNumber - 1)}
            disabled={phoneNumber === 0}
          />
        </div>
        <div className="card flex justify-content-center">
          <Toast ref={toast} />
          <Button onClick={show} label="Submit" />
        </div>
      </div>
    </div>
  );
}

export default App;
