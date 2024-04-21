import React from 'react';
import './index.css';


// components
import ContentUpload from './components/ContentUpload';
import ArtDisplay from './components/ArtDisplay';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 pb-4">
      <ContentUpload />
      <ArtDisplay />
    </div>
  );
}

export default App;
