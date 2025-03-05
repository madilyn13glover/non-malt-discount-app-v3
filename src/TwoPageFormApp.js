import { useState } from 'react';

export default function TwoPageFormApp() {
  const [page, setPage] = useState('home');
  const [formData, setFormData] = useState({
    family: '', brands: '', package: '', 
    region: '', state: '', wholesaler: '', 
    chainParent: '', chain: '',
    startDate: '', endDate: '',
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
      startDate: '', endDate: '',
      promotedPTR: '', abPercentage: '', abAllowance: ''
    });
  };

  if (page === 'home') {
    return (
      <div className="container home-screen">
        <h1 className="title">NON-MALT DISCOUNT REQUEST APP</h1>
        <div className="button-container">
          <button onClick={() => setPage('requestSandbox')}>Submitted Requests</button>
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
    <div className="container form-container">
      <h1 className="title">NON-MALT DISCOUNT REQUEST APP</h1>
      <div className="button-row">
        <button onClick={() => setPage('home')} className="back-button">Back</button>
        <button onClick={handleReset} className="reset-button" style={{ marginLeft: 'auto' }}>Reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-section three-cols no-overlap" style={{ marginBottom: '20px' }}>
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
        <div className="form-section three-cols no-overlap" style={{ marginBottom: '20px' }}>
          <div className="input-group">
            <label>Region:</label>
            <select name="region" value={formData.region} onChange={handleChange}>
              <option value="">Select Region</option>
              <option value="Region1">Region 1</option>
              <option value="Region2">Region 2</option>
            </select>
          </div>
          <div className="input-group">
            <label>State:</label>
            <select name="state" value={formData.state} onChange={handleChange}>
              <option value="">Select State</option>
              <option value="State1">State 1</option>
              <option value="State2">State 2</option>
            </select>
          </div>
          <div className="input-group">
            <label>Wholesaler:</label>
            <select name="wholesaler" value={formData.wholesaler} onChange={handleChange}>
              <option value="">Select Wholesaler</option>
              <option value="Wholesaler1">Wholesaler 1</option>
              <option value="Wholesaler2">Wholesaler 2</option>
            </select>
          </div>
        </div>
        <div className="form-section two-cols no-overlap" style={{ marginBottom: '20px' }}>
          <div className="input-group">
            <label>Start Date:</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>End Date:</label>
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section three-cols no-overlap" style={{ marginBottom: '20px' }}>
          <div className="input-group">
            <label>Promoted PTR:</label>
            <input type="number" name="promotedPTR" value={formData.promotedPTR} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>AB Allowance Percent:</label>
            <input type="number" name="abPercentage" value={formData.abPercentage} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>AB Allowance:</label>
            <input type="number" name="abAllowance" value={formData.abAllowance} onChange={handleChange} />
          </div>
        </div>
        <div className="calculations">
          <p><strong>Calculated Discount:</strong> ${(parseFloat(formData.promotedPTR || 0) * parseFloat(formData.abPercentage || 0) / 100).toFixed(2)}</p>
          <p><strong>Final AB Allowance:</strong> ${(parseFloat(formData.abAllowance || 0)).toFixed(2)}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
