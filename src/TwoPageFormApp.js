import { useState } from 'react';

export default function TwoPageFormApp() {
  const [page, setPage] = useState('home');
  const today = new Date().toISOString().split('T')[0];
  const defaultEndDate = `${new Date().getFullYear()}-12-31`;

  const [qbData, setQbData] = useState([]);
  const [formData, setFormData] = useState({
    family: '', brands: '', package: '',
    region: '', state: '', wholesaler: '',
    chainParent: '', chain: '',
    startDate: today, endDate: defaultEndDate,
    promotedPTR: '', abPercentage: '', abAllowance: '',
    qdDiscount: false, TusCheck: false, mixAndMatch: false
  });

  const headerCell = {
    padding: '8px',
    border: '1px solid #ccc',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    position: 'sticky',
    top: 0,
    zIndex: 2
  };

  const cell = {
    padding: '6px',
    border: '1px solid #ccc',
    textAlign: 'center',
    backgroundColor: '#fff'
  };

  const inputStyle = {
    width: '100%',
    padding: '6px',
    border: 'none',            // ✅ Removes the visible border
    borderRadius: '4px',
    boxSizing: 'border-box',
    textAlign: 'center',
    outline: 'none'            // ✅ Removes blue highlight on focus
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      let updated = { ...prev, [name]: type === 'checkbox' ? checked : value };

      if (name === 'qdDiscount') {
        if (checked) {
          updated.promotedPTR = '';
          updated.abPercentage = '';
          updated.abAllowance = '';
          setQbData([{ qdMin: '1', qdMax: '9999', discount: '', allowance: '', absplit: '' }]);
        } else {
          setQbData([]);
        }
      }

      return updated;
    });
  };

  const handleQDChange = (index, field, value) => {
    setQbData((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  };

  const addQDRow = () => {
    if (!formData.qdDiscount || qbData.length >= 4) return;
    setQbData((prev) => [...prev, { qdMin: '', qdMax: '', discount: '', allowance: '', absplit: '' }]);
  };

  const removeQDRow = (index) => {
    setQbData((prev) => prev.length > 1 ? prev.filter((_, i) => i !== index) : prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitted = {
      ...formData,
      mixAndMatch: formData.mixAndMatch ? 'Yes' : 'No',
      qbData: formData.qdDiscount ? qbData : undefined
    };
    console.log('Form submitted:', submitted);
  };

  const handleReset = () => {
    setFormData({
      family: '', brands: '', package: '',
      region: '', state: '', wholesaler: '',
      chainParent: '', chain: '',
      startDate: today, endDate: defaultEndDate,
      promotedPTR: '', abPercentage: '', abAllowance: '',
      qdDiscount: false, TusCheck: false, mixAndMatch: false
    });
    setQbData([]);
  };

  if (page === 'requestSandbox') {
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
        <h1 className="title2">NON-MALT DISCOUNT REQUEST APP</h1>
        <div className="button-container" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '15px' }}>
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
    <div className="form-container" style={{ maxWidth: '1400px', margin: '0 auto', border: 'none', padding: '20px' }}>
      <h1 className="title">NON-MALT DISCOUNT REQUEST APP</h1>
<div className="button-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button onClick={() => setPage('home')} className="back-button">Back</button>
        <button onClick={handleReset} className="reset-button">Reset</button>
      </div>
      <form onSubmit={handleSubmit}>
  {/* Grid Layout for Form Fields and Calculations */}
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '20px' }}>

    {/* Left Section (Form Fields - 3 Columns) */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }}>
      {/* Family, Brands, Package */}
 {/* Family, Brand, and Package on the Same Line */}
<div className="form-section three-cols no-overlap"
     style={{ display: 'flex', gap: '30px', justifyContent: 'space-between', marginBottom: '20px' }}>
  <div className="input-group" style={{ flex: '2' }}>
    <label>Family:</label>
    <select name="family" value={formData.family} onChange={handleChange} 
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
      <option value="">Select Family</option>
      <option value="Family1">Family 1</option>
      <option value="Family2">Family 2</option>
    </select>
  </div>

  <div className="input-group" style={{ flex: '2' }}>
    <label>Brands:</label>
    <select name="brands" value={formData.brands} onChange={handleChange} 
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
      <option value="">Select Brands</option>
      <option value="Brand1">Brand 1</option>
      <option value="Brand2">Brand 2</option>
    </select>
  </div>

  <div className="input-group" style={{ flex: '2' }}>
    <label>Package:</label>
    <select name="package" value={formData.package} onChange={handleChange} 
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
      <option value="">Select PKG</option>
      <option value="Package1">Package 1</option>
      <option value="Package2">Package 2</option>
    </select>
  </div>
</div>


      {/* Chain Parent, Chain */}
  {/* Chain Parent & Chain on the Same Line */}
<div className="form-section two-cols no-overlap"
     style={{ display: 'flex', gap: '30px', justifyContent: 'space-between', marginBottom: '20px' }}>
  <div className="input-group" style={{ flex: '2' }}>
    <label>Chain Parent:</label>
    <select name="chainParent" value={formData.chainParent} onChange={handleChange} 
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
      <option value="">Select Chain Parent</option>
      <option value="ChainParent1">Chain Parent 1</option>
      <option value="ChainParent2">Chain Parent 2</option>
    </select>
  </div>

  <div className="input-group" style={{ flex: '2' }}>
    <label>Chain:</label>
    <select name="chain" value={formData.chain} onChange={handleChange} 
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
      <option value="">Select Chain</option>
      <option value="Chain1">Chain 1</option>
      <option value="Chain2">Chain 2</option>
    </select>
  </div>
</div>


      {/* Region, State, Wholesaler on the Same Line */}
<div className="form-section three-cols no-overlap"
     style={{ display: 'flex', gap: '30px', justifyContent: 'space-between', marginBottom: '20px' }}>
  <div className="input-group" style={{ flex: '2' }}>
    <label>Region:</label>
    <select name="region" value={formData.region} onChange={handleChange} 
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
      <option value="">Region</option>
      <option value="Region1">Region 1</option>
      <option value="Region2">Region 2</option>
    </select>
  </div>

  <div className="input-group" style={{ flex: '2' }}>
    <label>State:</label>
    <select name="state" value={formData.state} onChange={handleChange} 
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
      <option value="">State</option>
      <option value="State1">State 1</option>
      <option value="State2">State 2</option>
    </select>
  </div>

  <div className="input-group" style={{ flex: '2' }}>
    <label>Wholesaler:</label>
    <select name="wholesaler" value={formData.wholesaler} onChange={handleChange} 
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
      <option value="">WSLR</option>
      <option value="Wholesaler1">Wholesaler 1</option>
      <option value="Wholesaler2">Wholesaler 2</option>
    </select>
  </div>
  <div className="tus-checkbox" style={{ marginTop: '20px' }}>
        <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            name="TUS" 
            checked={formData.TusCheck || false} 
            onChange={handleChange} 
            style={{ marginRight: '10px', width: '18px', height: '18px', cursor: 'pointer' }} 
          />
          TUS
        </label>
      </div>
    </div>

      {/* Start Date, End Date */}
      <div className="form-section two-cols no-overlap" 
     style={{ display: 'flex', gap: '30px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
  <div className="input-group" style={{ flex: '2' }}>
    <label>Start Date:</label>
    <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
  </div>
  <div className="input-group" style={{ flex: '2' }}>
    <label>End Date:</label>
    <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
  </div>
</div>

      {/* Promoted PTR, AB Allowance %, and AB Allowance*/}
<div className="form-section three-cols no-overlap"
     style={{ display: 'flex', gap: '30px', justifyContent: 'space-between', marginBottom: '20px' }}>

  <div className="input-group" style={{ flex: '2' }}>
    <label>Promoted PTR:</label>
    <input 
      type="number" 
      name="promotedPTR" 
      value={formData.promotedPTR} 
      onChange={handleChange}
      disabled={formData.qdDiscount} 
      style={{ 
        width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc',
        backgroundColor: formData.qdDiscount ? "#e0e0e0" : "white",
        cursor: formData.qdDiscount ? "not-allowed" : "text"
      }} 
    />
  </div>

  <div className="input-group" style={{ flex: '2' }}>
    <label>AB Allowance %:</label>
    <input 
      type="number" 
      name="abPercentage" 
      value={formData.abPercentage} 
      onChange={handleChange}
      disabled={formData.qdDiscount} 
      style={{ 
        width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc',
        backgroundColor: formData.qdDiscount ? "#e0e0e0" : "white",
        cursor: formData.qdDiscount ? "not-allowed" : "text"
      }} 
    />
  </div>

  <div className="input-group" style={{ flex: '2' }}>
    <label>AB Allowance:</label>
    <input 
      type="number" 
      name="abAllowance" 
      value={formData.abAllowance} 
      onChange={handleChange}
      disabled={formData.qdDiscount} 
      style={{ 
        width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc',
        backgroundColor: formData.qdDiscount ? "#e0e0e0" : "white",
        cursor: formData.qdDiscount ? "not-allowed" : "text"
      }} 
    />
  </div>
</div>
</div>

<div
  className="calculations"
  style={{
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    borderRadius: '15px',
    marginBottom: '20px',
    alignSelf: 'start'
  }}
>
  <h3 style={{ textAlign: 'center', marginTop: 0 }}>Calculations</h3>
  <p><strong>Reco FL PTR:</strong> ${parseFloat(formData.promotedPTR || 0).toFixed(2)}</p>
  <p><strong>PPTR:</strong> ${parseFloat(formData.promotedPTR || 0).toFixed(2)}</p>
  <p><strong>Discount:</strong> ${parseFloat(formData.abPercentage || 0).toFixed(2)}</p>
  <p><strong>Allowance %:</strong> {parseFloat(formData.abPercentage || 0).toFixed(1)}%</p>
  <p><strong>Allowance $:</strong> ${parseFloat(formData.abAllowance || 0).toFixed(3)}</p>
    
      <div style={{ marginTop: '10px' }}>
  {/* QD Checkbox */}
  <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
    <input 
      type="checkbox" 
      name="qdDiscount" 
      checked={formData.qdDiscount || false} 
      onChange={handleChange} 
      style={{ marginRight: '10px', width: '18px', height: '18px', cursor: 'pointer' }} 
    />
    QD Discount
  </label>

  {/* QD Table & Mix and Match */}
  {formData.qdDiscount && (
  <div
    style={{
      marginTop: "20px",
      maxWidth: "825px", // ⬅️ Slightly wider table
      marginLeft: "20px"
    }}
  >
    <h3 style={{ textAlign: "center", marginBottom: "10px" }}>QD Details</h3>

    {/* Fixed box with scrollable rows */}
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "6px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      height: "185px" // ⬅️ Tighter height
    }}>
      {/* Sticky table header */}
      <div style={{ flexShrink: 0 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", fontSize: "12px" }}>
          <colgroup>
            <col style={{ width: "16%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <thead>
            <tr>
            <th style={headerCell}>Min</th>
          <th style={headerCell}>Max</th>
          <th style={headerCell}>Discount</th>
          <th style={headerCell}>Allowance</th>
          <th style={headerCell}>AB Split</th>
          <th style={headerCell}>Action</th>
            </tr>
          </thead>
          <tbody>
            {qbData.map((row, index) => (
              <tr key={index}>
                <td style={{ ...cell, padding: "4px", height: "37px"  }}>
                  <input
                    type="number"
                    value={row.qdMin}
                    onChange={(e) => handleQDChange(index, "qdMin", e.target.value)}
                    style={{ ...inputStyle, fontSize: "12px", padding: "4px", height: "37px" }}
                  />
                </td>
                <td style={{ ...cell, padding: "4px", height: "37px" }}>
                  <input
                    type="number"
                    value={row.qdMax}
                    onChange={(e) => handleQDChange(index, "qdMax", e.target.value)}
                    style={{ ...inputStyle, fontSize: "12px", padding: "4px", height: "37px" }}
                  />
                </td>
                <td style={{ ...cell, padding: "4px", height: "37px" }}>
                  <input
                    type="number"
                    value={row.discount}
                    onChange={(e) => handleQDChange(index, "discount", e.target.value)}
                    style={{ ...inputStyle, fontSize: "12px", padding: "4px", height: "37px" }}
                  />
                </td>
                <td style={{ ...cell, padding: "4px", height: "37px" }}>
                  <input
                    type="number"
                    value={row.allowance}
                    onChange={(e) => handleQDChange(index, "allowance", e.target.value)}
                    style={{ ...inputStyle, fontSize: "12px", padding: "4px", height: "37px" }}
                  />
                </td>
                <td style={{ ...cell, padding: "4px", height: "37px" }}>
                  <input
                    type="number"
                    value={row.absplit}
                    onChange={(e) => handleQDChange(index, "absplit", e.target.value)}
                    style={{ ...inputStyle, fontSize: "12px", padding: "4px", height: "37px" }}
                  />
                </td>
                <td style={{ ...cell, padding: "4px", height: "37px" }}>
                  <button
                    type="button"
                    onClick={() => removeQDRow(index)}
                    style={{ padding: "2px 6px", fontSize: "12px", height: "37px" }}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <button type="button" onClick={addQDRow} style={{ marginTop: "10px" }}>
      Add Level
    </button>

    <div style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
      <label style={{ display: "flex", alignItems: "center", fontSize: "14px", fontWeight: "bold", cursor: "pointer" }}>
        <input
          type="checkbox"
          name="mixAndMatch"
          checked={formData.mixAndMatch || false}
          onChange={handleChange}
          style={{ marginRight: "8px", width: "16px", height: "16px", cursor: "pointer" }}
        />
        Mix and Match
      </label>
    </div>
  </div>
)}
</div>
</div>
</div>
  {/* Submit Button */}
  <button type="submit">Submit</button>
</form>
        </div>
      )}
  <div>
</div>
