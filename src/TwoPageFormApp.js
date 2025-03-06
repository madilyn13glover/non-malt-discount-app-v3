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
  })

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

  if (page === 'requestSandbox') {
    const submittedRequests = [
      { id: '001', status: 'Pending', date: '2025-03-05' },
      { id: '002', status: 'Approved', date: '2025-03-03' },
      { id: '003', status: 'Rejected', date: '2025-03-02' }
    ];
    return (
      <div className="container">
        <h2 className="title">Submitted Requests</h2>
        <div className="gallery">
          <div className="request-card">
            <p><strong>Request ID:</strong> 001</p>
            <p><strong>Status:</strong> Pending</p>
            <p><strong>Date:</strong> 2025-03-05</p>
          </div>
          <div className="request-card">
            <p><strong>Request ID:</strong> 002</p>
            <p><strong>Status:</strong> Approved</p>
            <p><strong>Date:</strong> 2025-03-03</p>
          </div>
          <div className="request-card">
            <p><strong>Request ID:</strong> 003</p>
            <p><strong>Status:</strong> Rejected</p>
            <p><strong>Date:</strong> 2025-03-02</p>
          </div>
        </div>
        <button onClick={() => setPage('home')}>Back</button>
      </div>
    );
  }

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

  return (
    <div className="form-container" style={{ maxWidth: '900px', margin: '0 auto', border: 'none', padding: '20px', overflow: 'visible' }}>
      <h1 className="title">NON-MALT DISCOUNT REQUEST APP</h1>
      <div className="button-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button onClick={() => setPage('home')} className="back-button">Back</button>
        <button onClick={handleReset} className="reset-button">Reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-section three-cols no-overlap" style={{ display: 'flex', gap: '30px', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div className="input-group">
            <label>Family:</label>
            <select name="family" value={formData.family} onChange={handleChange}>
              <option value="">Select Family</option>
              <option value="Family1">Family 1</option>
              <option value="Family2">Family 2</option>
            </select>
          </div>
          <div className="input-group">
            <label>Brands:</label>
            <select name="brands" value={formData.brands} onChange={handleChange}>
              <option value="">Select Brands</option>
              <option value="Brand1">Brand 1</option>
              <option value="Brand2">Brand 2</option>
            </select>
          </div>
          <div className="input-group">
            <label>Package:</label>
            <select name="package" value={formData.package} onChange={handleChange}>
              <option value="">Select Package</option>
              <option value="Package1">Package 1</option>
              <option value="Package2">Package 2</option>
            </select>
          </div>
        </div>
      </form>
      <button type="submit">Submit</button>
        <div className="input-group">
    <label>
      <input type="checkbox" checked={showQDPopup} onChange={() => setShowQDPopup(!showQDPopup)} /> QD Discount
    </label>
  </div>
  
  {showQDPopup && (
    <div className="popup" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', zIndex: 1000 }}>
      <h2>QD Discount Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#d1a33c' }}>
            <th style={{ padding: '10px', borderBottom: '2px solid black' }}>QD MIN</th>
            <th style={{ padding: '10px', borderBottom: '2px solid black' }}>QD MAX</th>
            <th style={{ padding: '10px', borderBottom: '2px solid black' }}>PPTR</th>
            <th style={{ padding: '10px', borderBottom: '2px solid black' }}>% Allowance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>1</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>9999</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>$0.00</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>50%</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => setShowQDPopup(false)} style={{ marginTop: '10px' }}>Close</button>
    </div>
  )}

$1
    </div>
  );
}