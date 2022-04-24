import { useState } from 'react'

function App() {
  const [name,setName] = useState('')

  console.log(name);

  return (
    <div style={{ padding:32 }}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setName('Nguyen Van BBB')}>Change</button>
    </div>
  );
}

export default App;
