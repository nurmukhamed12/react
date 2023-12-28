import React, { useState, useEffect } from 'react';

const NameList = () => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    const storedNames = JSON.parse(localStorage.getItem('names'));
    setNames(storedNames);
  }, []);

  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  const addName = () => {
    if (newName.trim() !== '') {
      setNames([...names, newName]);
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Список имён</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Введите имя"
        />
        <button onClick={addName}>Добавить</button>
      </div>
    </div>
  );
};

export default NameList;
