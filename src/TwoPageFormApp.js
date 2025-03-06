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

  return (
    <div className="form-container" style={{ maxWidth: '900px', margin: '0 auto', border: 'none', padding: '20px', overflow: 'visible' }}>
      <h1 className="title">NON-MALT DISCOUNT REQUEST APP</h1>
      <div className="button-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button onClick={() => setPage('home')} className="back-button">Back</button>
        <button onClick={handleReset} className="reset-button">Reset</button>
      </div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
