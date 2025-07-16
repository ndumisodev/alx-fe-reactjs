import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} value={formData.name} style={{ display: 'block', margin: '10px 0' }} />
        <input name="email" placeholder="Your Email" onChange={handleChange} value={formData.email} style={{ display: 'block', margin: '10px 0' }} />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} value={formData.message} style={{ display: 'block', margin: '10px 0' }} />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
