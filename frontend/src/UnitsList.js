import axios from "axios";
import { useEffect, useState } from "react";
import { host as HOST } from './config.json';

const SERVER_URL = `${HOST}:6789`;

function UnitsList() {
  const [units, setUnits] = useState([]);
  const [newText, setNewText] = useState("");

  const getAllUnits = async () => {
    const newUnits = (await axios.get(`${SERVER_URL}/units`)).data;
    setUnits(newUnits);
  };

  useEffect(() => {
    getAllUnits();
  }, []);

  const addUnit = async (unitName) => {
    setNewText("");
    await axios.post(`${SERVER_URL}/unit`, { unitName });
    await getAllUnits();
  };

  const deleteUnit = async (unitId) => {
    await axios.post(`${SERVER_URL}/delete-unit`, { unitId });
    await getAllUnits();
  };

  return (
    <div>
      {units.map(({ id, name }) => (
        <div key={id}>
          <div>{name}</div>
          <button onClick={() => deleteUnit(id)}>Delete</button>
        </div>
      ))}
      <div>
        <input
          type="text"
          onChange={(event) => setNewText(event.target.value)}
          value={newText}
        />
        <button onClick={() => addUnit(newText)}>Add</button>
      </div>
    </div>
  );
}

export default UnitsList;
