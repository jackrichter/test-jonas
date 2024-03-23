import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // Example with an Object state
  // const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    if (step > 1) {
      // Best Practice: Use a Call-Back function when updating the state based on the current state!
      setStep(s => s - 1);
      // setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep(s => s + 1);

      // Obs. Pass the new value as an Object!
      // setTest({ name: "Fred" });
      // Never do this:
      // test.name = "Fred";
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(is => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              // text="Previous"
              // emoji="👈"
            >
              <span>👈</span> Previous
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
              // text="Next"
              // emoji="👉"
            >
              Next <span>👉</span>
            </Button>
            {/* <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>
              Previous
            </button>
            <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>
              Next
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

// A reusable Button (children Prop)
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button style={{ backgroundColor: bgColor, color: textColor }} onClick={onClick}>
      {/* <span>{emoji}</span> {text} */}
      {children}
    </button>
  );
}
