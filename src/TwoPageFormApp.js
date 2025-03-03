import { useState } from 'react';

// Define UI Components Locally
const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-md p-4 border ${className}`}>{children}</div>
);

const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

const Button = ({ type = "button", className, children, onClick }) => (
  <button
    type={type}
    className={`px-4 py-2 rounded-md ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Checkbox = ({ name, checked, onChange }) => (
  <input
    type="checkbox"
    name={name}
    checked={checked}
    onChange={onChange}
    className="w-5 h-5"
  />
);

export default function TwoPageFormApp() {
  const [formData, setFormData] = useState({ startDate: '', abAllowance: '', promotedPTR: '', endDate: '', chainParent: '',
    recoFLPTR: 0, pptrDiscount: 0, abAllowance: 0, abPercentage: 0,
    promotedPTR: '', allowance: '', percentage: '', discount: '', discountDollar: '', totalDiscount: 0
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = parseFloat(value) || 0;
    setFormData(prev => {
      const updatedForm = { ...prev, [name]: updatedValue };
      if (name === 'promotedPTR' || name === 'allowance' || name === 'abPercentage') {
      }
      return updatedForm;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-white text-black overflow-auto p-4">
      <Card className="w-[1400px] p-8 bg-white border-black">
        <CardContent>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-center mb-4 uppercase flex-1">NON-MALT DISCOUNT REQUEST APP</h1>
            <Button type="reset" className="bg-gray-500 text-white">Reset</Button>
          </div>
      
          {!submitted ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-3 gap-4 col-span-2 border-b pb-4">
  <div className="flex flex-col">
    <label className="text-black mb-1">Family:</label>
                  <select name="family" value={formData.family} onChange={handleChange} className="p-2 border rounded bg-white text-black">
                    <option value="">Select Family</option>
                    <option value="Family1">Family 1</option>
                    <option value="Family2">Family 2</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-black mb-1">Brands:</label>
                  <select name="brands" value={formData.brands} onChange={handleChange} className="p-2 border rounded bg-white text-black">
                    <option value="">Select Brands</option>
                    <option value="Brand1">Brand 1</option>
                    <option value="Brand2">Brand 2</option>
                  </select>
                </div>
  <div className="flex flex-col">
    <label className="text-black mb-1">Package:</label>
    <select name="package" value={formData.package} onChange={handleChange} className="p-2 border rounded bg-white text-black">
      <option value="">Select Package</option>
      <option value="Package1">Package 1</option>
      <option value="Package2">Package 2</option>
    </select>
  </div>
</div>


                         
         
<div className="grid grid-cols-3 gap-4 col-span-2 border-b pb-4">
  <div className="flex flex-col">
    <label className="text-black mb-1">Region:</label>
    <select name="region" value={formData.region} onChange={handleChange} className="p-2 border rounded bg-white text-black">
      <option value="">Select Region</option>
      <option value="Region1">Region 1</option>
      <option value="Region2">Region 2</option>
    </select>
  </div>
  <div className="flex flex-col">
    <label className="text-black mb-1">State:</label>
    <select name="state" value={formData.state} onChange={handleChange} className="p-2 border rounded bg-white text-black">
      <option value="">Select State</option>
      <option value="State1">State 1</option>
      <option value="State2">State 2</option>
    </select>
  </div>
  <div className="flex flex-col">
    <label className="text-black mb-1">Wholesaler:</label>
    <select name="wholesaler" value={formData.wholesaler} onChange={handleChange} className="p-2 border rounded bg-white text-black">
      <option value="">Select Wholesaler</option>
      <option value="Wholesaler1">Wholesaler 1</option>
      <option value="Wholesaler2">Wholesaler 2</option>
    </select>
  </div>
</div>
              
              <div className="grid grid-cols-2 gap-4 col-span-2 border-b pb-4">
  <div className="flex flex-col">
    <label className="text-black mb-1">Chain:</label>
    <select name="chain" value={formData.chain} onChange={handleChange} className="p-2 border rounded bg-white text-black">
      <option value="">Select Chain</option>
      <option value="Chain1">Chain 1</option>
      <option value="Chain2">Chain 2</option>
    </select>
  </div>
  <div className="flex flex-col">
    <label className="text-black mb-1">Chain Parent:</label>
    <select name="chainParent" value={formData.chainParent} onChange={handleChange} className="p-2 border rounded bg-white text-black">
      <option value="">Select Chain Parent</option>
      <option value="Parent1">Parent 1</option>
      <option value="Parent2">Parent 2</option>
    </select>
  </div>
</div>

              

<div className="grid grid-cols-2 gap-4 col-span-2 border-b pb-4">
  <div className="flex flex-col">
    <label className="text-black mb-1">Start Date:</label>
    <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="p-2 border rounded bg-white text-black" />
  </div>
  <div className="flex flex-col">
    <label className="text-black mb-1">End Date:</label>
    <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="p-2 border rounded bg-white text-black" />
  </div>
</div>




              
              <div className="grid grid-cols-3 gap-4 col-span-2 border-b pb-4">
  <div className="flex flex-col">
    <label className="text-black mb-1">Promoted PTR:</label>
    <input type="number" name="promotedPTR" value={formData.promotedPTR} onChange={handleChange} className="p-2 border rounded bg-white text-black" />
  </div>
  <div className="flex flex-col">
    <label className="text-black mb-1">AB Allowance Percent:</label>
    <input type="number" name="abPercentage" value={formData.abPercentage} onChange={handleChange} className="p-2 border rounded bg-white text-black" />
  </div>
  <div className="flex flex-col">
    <label className="text-black mb-1">AB Allowance:</label>
    <input type="number" name="abAllowance" value={formData.abAllowance} onChange={handleChange} className="p-2 border rounded bg-white text-black" />
  </div>
</div>




              
              
              
              <div className="grid grid-cols-2 gap-4">
  <div className="text-black">
    <p><strong>Reco FL PTR:</strong> ${formData.recoFLPTR.toFixed(2)}</p>
    <p><strong>PPTR:</strong> ${formData.pptrDiscount.toFixed(2)}</p>
    <p><strong>Discount:</strong> ${formData.totalDiscount.toFixed(2)}</p>
    <br/>
    <p><strong>Allowance Percent:</strong> ${formData.abPercentage.toFixed(2)}%</p>
    <p><strong>Allowance:</strong> ${formData.abAllowance.toFixed(2)}</p>
  </div>
                  
                  
                </div>
              
            
              <Button type="submit" className="col-span-2 bg-gold text-black">Submit</Button>
            
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-xl mb-4 text-black">Confirmation</h2>
              <pre className="text-white">{JSON.stringify(formData, null, 2)}</pre>
              <Button onClick={() => setSubmitted(false)} className="mt-4 bg-gold text-black">Go Back</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 
