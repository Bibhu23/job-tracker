import JobForm from './Componenets/JobForm';
import JobList from './Componenets/JobList';
import { useState } from 'react';

function App() {
  const [refresh, setRefresh] = useState(false);
  const handleJobAdded = () => setRefresh(!refresh);

  return (
    <div className="container my-4">
      <h1 className="text-center text-primary mb-4">🎯 Student Job Tracker</h1>
      <JobForm onJobAdded={handleJobAdded} />
      <JobList key={refresh} />
    </div>
  );
}

export default App;
