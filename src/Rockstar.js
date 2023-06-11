import React, { useState } from 'react';

const Rockstar = () => {
  const [rockstars, setRockstars] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputInstrument, setInputInstrument] = useState('');
  const [inputGenre, setInputGenre] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); // Added editingIndex state

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleInstrumentChange = (e) => {
    setInputInstrument(e.target.value);
  };

  const handleGenreChange = (e) => {
    setInputGenre(e.target.value);
  };

  const handleAddRockstar = () => {
    if (inputName.trim() !== '' && inputInstrument.trim() !== '' && inputGenre.trim() !== '') {
      if (editingIndex !== null) {
        // Updating existing rockstar
        const updatedRockstars = [...rockstars];
        updatedRockstars[editingIndex] = {
          name: inputName,
          instrument: inputInstrument,
          genre: inputGenre
        };
        setRockstars(updatedRockstars);
        setInputName('');
        setInputInstrument('');
        setInputGenre('');
        setEditingIndex(null);
      } else {
        // Adding new rockstar
        setRockstars([...rockstars, { name: inputName, instrument: inputInstrument, genre: inputGenre }]);
        setInputName('');
        setInputInstrument('');
        setInputGenre('');
      }
    }
  };

  const handleEditRockstar = (index) => {
    const editedRockstar = rockstars[index];
    setInputName(editedRockstar.name);
    setInputInstrument(editedRockstar.instrument);
    setInputGenre(editedRockstar.genre);
    setEditingIndex(index);
  };

  const handleDeleteRockstar = (index) => {
    const updatedRockstars = [...rockstars];
    updatedRockstars.splice(index, 1);
    setRockstars(updatedRockstars);
  };

  return (
    <div className='CRUD'>
      <h2>Rockstars</h2>
      <table className="table">
      <tbody>
  {rockstars.map((rockstar, index) => (
    <tr key={index}>
      <td>{rockstar.name}</td>
      <td>{rockstar.instrument}</td>
      <td>{rockstar.genre}</td>
      <td>
        <button className="btn btn-primary" onClick={() => handleEditRockstar(index)}>Edit</button>
        <button className="btn btn-danger" onClick={() => handleDeleteRockstar(index)}>Delete</button>
      </td>
    </tr>
  ))}
  <tr>
    <td>
      <input
        type="text"
        className="form-control"
        value={inputName}
        onChange={handleInputChange}
        placeholder="Enter rockstar name"
      />
    </td>
    <td>
      <select
        className="form-control"
        value={inputInstrument}
        onChange={handleInstrumentChange}
      >
        <option value="">Select instrument</option>
        <option value="Guitar">Guitar</option>
        <option value="Vocals">Vocals</option>
        <option value="Drums">Drums</option>
        <option value="Bass">Bass</option>
      </select>
    </td>
    <td>
      <select
        className="form-control"
        value={inputGenre}
        onChange={handleGenreChange}
      >
        <option value="">Select genre</option>
        <option value="Rock">Rock</option>
        <option value="Pop">Pop</option>
        <option value="Metal">Metal</option>
        <option value="Hip-hop">Hip Hop</option>
      </select>
    </td>
    <td>
      <button className="btn btn-success" onClick={handleAddRockstar}>Add Rockstar</button>
    </td>
  </tr>
</tbody>
      </table>
      <div className="input-group">
        {/* Input fields and buttons */}
      </div>
    </div>
  );
};

export default Rockstar;
