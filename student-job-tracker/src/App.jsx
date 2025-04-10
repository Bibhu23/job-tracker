import { useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

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
