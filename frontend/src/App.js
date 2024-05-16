import React, { useState } from 'react';
import BobaList from './components/BobaList';
import AddBobaForm from './components/AddBobaForm';
import './index.css';

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const handleAdd = () => {
        setRefresh(!refresh);
    };

    return (
        <div>
            <AddBobaForm onAdd={handleAdd} />
            <BobaList refresh={refresh} />
        </div>
    );
}

export default App;
