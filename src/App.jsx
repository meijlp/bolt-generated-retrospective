import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [retroId, setRetroId] = useState(null);

  const createRetro = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/retrospectives');
      setRetroId(response.data.id);
    } catch (error) {
      console.error('Error creating retrospective:', error);
    }
  };

  return (
    <div className="container">
      <h1>Team Retrospective</h1>
      <button onClick={createRetro}>Create New Retrospective</button>
      {retroId && (
        <div>
          <h2>Retrospective Created!</h2>
          <p>ID: {retroId}</p>
        </div>
      )}
    </div>
  );
}
