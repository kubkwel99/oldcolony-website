import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null); // Add state for the file
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('text', text);
    if (file) formData.append('file', file); // Append file if selected

    try {
      const response = await fetch('https://www.formbackend.com/f/87ab4afd57cac881', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 422) {
        throw new Error('Validation error');
      } else if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setSuccessMessage('Form submitted successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {successMessage.length === 0 && (
        <form
          className='flex flex-col p-2'
          onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor='text'>Message</label>
          <input
            type='text'
            id='text'
            name='text'
            required
            onChange={(e) => setText(e.target.value)}
          />

          <label className='p-2'>Upload File</label>
          <input
            type='file'
            id='file'
            name='file'
            onChange={handleFileChange}
          />

          <button type='submit'>Send</button>
        </form>
      )}

      {successMessage.length > 0 && <p>{successMessage}</p>}
    </>
  );
}
