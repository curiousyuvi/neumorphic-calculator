import "./Calculator.css";
import Screen from "./Screen";
import Panel from "./Panel";

export default function Calculator() {
  return (
    <div className="calculator">
      <Screen />
      <Panel />
    </div>
  );
}
