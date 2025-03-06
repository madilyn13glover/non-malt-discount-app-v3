import { useState } from 'react';

export default function TwoPageFormApp() {
  const [page, setPage] = useState('home');
  const today = new Date().toISOString().split('T')[0];
  const defaultEndDate = `${new Date().getFullYear()}-12-31`;

  const [showQDPopup, setShowQDPopup] = useState(false);

  const [formData, setFormData] = useState({
    family: '', brands: '', package: '', 
    region: '', state: '', wholesaler: '', 
    chainParent: '', chain: '',
    startDate: today, endDate: defaultEndDate,
    promotedPTR: '', abPercentage: '', abAllowance: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage('confirmation');
  };

  const handleReset = () => {
    setFormData({
      family: '', brands: '', package: '',
      region: '', state: '', wholesaler: '',
      chainParent: '', chain: '',
      startDate: today, endDate: defaultEndDate,
      promotedPTR: '', abPercentage: '', abAllowance: ''
    });
  };

  if (page === 'home') {
    return (
      <div className="home-screen">
        <h1 className="title">NON-MALT DISCOUNT REQUEST APP</h1>
        <div className="button-container" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
          <button onClick={() => setPage('requestSandbox')}>See Submitted Requests</button>
          <button onClick={() => setPage('requestScreen')}>Submit Request</button>
        </div>
      </div>
    );
  }

  if (page === 'confirmation') {
    return (
      <div className="container">
        <h2 className="title">Confirmation</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <button onClick={() => setPage('requestScreen')}>Back</button>
      </div>
    );
  }

  if (page === 'requestSandbox') {
    return (
      <div className="container">
        <h2 className="title">Submitted Requests</h2>
        <table className="submitted-requests-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#ddd', textAlign: 'left' }}>
              <th style={{ padding: '10px', borderBottom: '2px solid black' }}>Request ID</th>
              <th style={{ padding: '10px', borderBottom: '2px solid black' }}>Status</th>
              <th style={{ padding: '10px', borderBottom: '2px solid black' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>001</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Pending</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>2025-03-05</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>002</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Approved</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>2025-03-03</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>003</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Rejected</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>2025-03-02</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => setPage('home')}>Back</button>
      </div>
    );
  }

  return (
    <div className="form-container" style={{ maxWidth: '900px', margin: '0 auto', border: 'none', padding: '20px', overflow: 'visible' }}>
      <h1 className="title">NON-MALT DISCOUNT REQUEST APP</h1>
      <div className="button-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button onClick={() => setPage('home')} className="back-button">Back</button>
        <button onClick={handleReset} className="reset-button">Reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
