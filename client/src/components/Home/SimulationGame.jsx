
import React, { useState } from 'react';
import './simulator.css'

const CircuitSimulator = () => {
  const [voltage, setVoltage] = useState('');
  const [simulationResults, setSimulationResults] = useState('');

  const simulateCircuit = () => {
    const voltageInput = parseFloat(voltage);
    if (isNaN(voltageInput)) {
      alert('Please enter a valid voltage.');
      return;
    }

    const resistorResistance1 = 100; // Ohms
    const resistorResistance2 = 200; // Ohms
    const ledVoltageDrop = 2; // Volts

    // Calculate current using Ohm's Law (I = V / R)
    const totalResistance = resistorResistance1 + resistorResistance2;
    const current = voltageInput / totalResistance; // Amperes

    // Calculate voltage across resistors
    const resistorVoltage1 = current * resistorResistance1;
    const resistorVoltage2 = current * resistorResistance2;

    // Calculate voltage across LEDs
    const ledVoltage = voltageInput - resistorVoltage1 - resistorVoltage2;

    // Display simulation results
    setSimulationResults(
        <>
          <p>Current flowing through the circuit: {current.toFixed(2)} Amperes</p>
          <p>Voltage across Resistor 1: {resistorVoltage1.toFixed(2)} Volts</p>
          <p>Voltage across Resistor 2: {resistorVoltage2.toFixed(2)} Volts</p>
          <p>Voltage across LEDs: {ledVoltage.toFixed(2)} Volts</p>
        </>
      );
  };

  return (
    <div className="container">
      <h1>Circuit Simulator</h1>
      <div className="circuit">
        <div className="component" id="battery">Battery</div>
        <div className="component" id="resistor1">Resistor 1</div>
        <div className="component" id="resistor2">Resistor 2</div>
        <div className="component" id="led1">LED 1</div>
        <div className="component" id="led2">LED 2</div>
      </div>
      {/* <label htmlFor="voltage">Enter Voltage:</label> */}
      <input className='inp'
        type="number"
        id="voltage"
        name="voltage"
        step="any"
        placeholder="Enter voltage"
        value={voltage}
        onChange={(e) => setVoltage(e.target.value)}
      />
      <button onClick={simulateCircuit}>Simulate</button>
      <div id="output">{simulationResults}</div>
    </div>
  );
};

export default CircuitSimulator;
