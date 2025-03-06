import { useState } from 'react';

export default function TwoPageFormApp() {
  const [page, setPage] = useState('home');
  const today = new Date().toISOString().split('T')[0];
  const defaultEndDate = `${new Date().getFullYear()}-12-31`;
  
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
      <div className="form-container" style={{ maxWidth: '900px', margin: '0 auto', border: '1px solid black', padding: '20px', borderRadius: '10px' }}>
        <h1 className="title">NON-MALT DISCOUNT REQUEST APP</h1>
        <div className="button-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={() => setPage('home')} className="back-button">Back</button>
          <button onClick={handleReset} className="reset-button">Reset</button>
        </div>
        <form onSubmit={handleSubmit}>
          
          <div className="form-section three-cols" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
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

          <div className="form-section two-cols" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <div className="input-group">
              <label>Chain Parent:</label>
              <select name="chainParent" value={formData.chainParent} onChange={handleChange}>
                <option value="">Select Chain Parent</option>
                <option value="ChainParent1">Chain Parent 1</option>
                <option value="ChainParent2">Chain Parent 2</option>
              </select>
            </div>
            <div className="input-group">
              <label>Chain:</label>
              <select name="chain" value={formData.chain} onChange={handleChange}>
                <option value="">Select Chain</option>
                <option value="Chain1">Chain 1</option>
                <option value="Chain2">Chain 2</option>
              </select>
            </div>
          </div>

          <div className="form-section two-cols" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div className="input-group">
              <label>Start Date:</label>
              <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>End Date:</label>
              <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
            </div>
          </div>

          <div className="form-section three-cols" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
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

          <div className="calculations" style={{ backgroundColor: 'white', color: 'black', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
            <p><strong>Reco FL PTR:</strong> ${parseFloat(formData.promotedPTR || 0).toFixed(2)}</p>
            <p><strong>PPTR:</strong> ${parseFloat(formData.promotedPTR || 0).toFixed(2)}</p>
            <p><strong>Discount:</strong> ${parseFloat(formData.abPercentage || 0).toFixed(2)}</p>
            <p><strong>Allowance %:</strong> {parseFloat(formData.abPercentage || 0).toFixed(1)}%</p>
            <p><strong>Allowance $:</strong> ${parseFloat(formData.abAllowance || 0).toFixed(3)}</p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  return null;
}

