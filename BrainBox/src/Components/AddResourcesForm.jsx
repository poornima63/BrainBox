import { useState } from 'react';

function AddResourceForm() {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    link: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // yahan baad me API ya state me save karenge
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-8 space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center text-blue-600">Add a New Resource</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
        <option value="">Select Type</option>
        <option value="Video">Video</option>
        <option value="Article">Article</option>
        <option value="PDF">PDF</option>
        <option value="Website">Website</option>
      </select>

      <input
        type="url"
        name="link"
        placeholder="Resource Link"
        value={formData.link}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <textarea
        name="description"
        placeholder="Short Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="3"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full font-semibold"
      >
        Add Resource
      </button>
    </form>
  );
}

export default AddResourceForm;
