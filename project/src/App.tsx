import React, { useState } from 'react';
import { Menu, MapPin, Trees as Tree, Mountain, Building } from 'lucide-react';
import Navbar from './components/Navbar';
import Introduction from './pages/Introduction';
import Geography from './pages/Geography';
import Culture from './pages/Culture';
import Nature from './pages/Nature';
import Planning from './pages/Planning';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('introduction');

  const renderPage = () => {
    switch (currentPage) {
      case 'introduction':
        return <Introduction />;
      case 'geography':
        return <Geography />;
      case 'culture':
        return <Culture />;
      case 'nature':
        return <Nature />;
      case 'planning':
        return <Planning />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;