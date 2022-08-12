import axios from "axios";
import { useEffect, useState } from "react";
import config from './config.json';

const SERVER_URL = config.host;

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
    <div className="units">
      <div className="list-container">
      {units.map(({ id, name }) => (
        <div className="unit" key={id}>
          <div>{name}</div>
          <button className="button-general" onClick={() => window.open(`https://handbook.monash.edu/2022/units/${name}`)}>Monash handbook</button>
          <button className="button-general" onClick={() => window.open(`https://studentvip.com.au/monash/subjects/${name}`)}>StudentVIP</button>
          <button onClick={() => deleteUnit(id)}>Delete</button>
        </div>
      ))}
      {units.length === 0 && <div>No units yet, add one! :)</div>}
      </div>
      <div className="input-container">
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
