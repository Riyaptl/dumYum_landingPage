import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './Form.css'

function Form({productName, onClose}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email using Email.js
      const templateParams = {
        name,
        phone,
        address,
        pincode,
        productName,
        quantity
      };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your Email.js credentials
      await emailjs.send('service_r622x13', 'template_djn5o9r', templateParams, 'uKHqGFufiaoULFNsY');

      // Reset form fields after submission
      setName('');
      setPhone('');
      setAddress('');
      setPincode('');

      alert('Order placed successfully! For more information Contact Us');
    } catch (error) {
      alert('Error receving order. Please try again.');
    }
  };


  return (
    <>
       <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone Number:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[0-9]{10}" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Pincode:
          <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </label>
      </div>
      <div className="form-row">
        {/* The last entry (Pincode) will be on the left side */}
        <button  className="formButton" type="submit" onClick={onClose}>Submit</button>
      </div>
      
    </form>

      
    
    </>
  );
}

export default Form;
