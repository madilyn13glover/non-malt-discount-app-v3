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

  if (page === 'requestScreen') {
    return (
      <div className="form-container" style={{ maxWidth: '900px', margin: '0 auto', border: 'none', padding: '20px', overflow: 'visible' }}>
        <h1 className="title">NON-MALT DISCOUNT REQUEST APP</h1>
        <div className="button-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={() => setPage('home')} className="back-button">Back</button>
          <button onClick={handleReset} className="reset-button">Reset</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Family:</label>
          <input type="text" name="family" value={formData.family} onChange={handleChange} />
          <label>Brands:</label>
          <input type="text" name="brands" value={formData.brands} onChange={handleChange} />
          <label>Package:</label>
          <input type="text" name="package" value={formData.package} onChange={handleChange} />
          <label>Chain Parent:</label>
          <input type="text" name="chainParent" value={formData.chainParent} onChange={handleChange} />
          <label>Chain:</label>
          <input type="text" name="chain" value={formData.chain} onChange={handleChange} />
          <label>Region:</label>
          <input type="text" name="region" value={formData.region} onChange={handleChange} />
          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} />
          <label>Wholesaler:</label>
          <input type="text" name="wholesaler" value={formData.wholesaler} onChange={handleChange} />
          <label>Start Date:</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
          <label>End Date:</label>
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
          <label>Promoted PTR:</label>
          <input type="number" name="promotedPTR" value={formData.promotedPTR} onChange={handleChange} />
          <label>AB Allowance Percent:</label>
          <input type="number" name="abPercentage" value={formData.abPercentage} onChange={handleChange} />
          <label>AB Allowance:</label>
          <input type="number" name="abAllowance" value={formData.abAllowance} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

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
