import React from 'react';
import { useState } from 'react';
import type Types from '../model';
import Validation from '../lib';

const useSubmit = () => {
  const [formData, setFormData] = useState<Types.iFormData>({
    name: '',
    tel: '',
    email: '',
  });
  const [status, setStatus] = useState<Types.iStatus>(null);

  const resetFormData = () => setFormData({ name: '', email: '', tel: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    const data: Types.iFormData = {
      name: formData.name,
      tel: formData.tel,
      email: formData.email,
    };

    if (!Validation.isValidName(formData.name)) {
      setStatus('notValidName');
      return;
    } else if (!Validation.isValidPhoneNumber(formData.tel)) {
      setStatus('notValidNumber');
      return;
    } else if (!Validation.isValidEmail(formData.email)) {
      setStatus('notValidEmail');
      return;
    }

    try {
      const url: string = process.env.NEXT_PUBLIC_API_URL!;
      const response = await fetch(`${url}/api/mail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setStatus('error');
      } else {
        setStatus('success');
        resetFormData();
      }
    } catch {
      setStatus('error');
    }
  };

  return { handleSubmit, formData, setFormData, status };
};

export default useSubmit;
