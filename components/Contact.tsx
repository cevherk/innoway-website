'use client'

import { useState } from 'react';
import { siteContent } from '@/data/content';

export default function Contact() {
  const { title, buttonText } = siteContent.contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-10">Get in Touch</h2>
          <p className="text-lg mb-6">
            Reach us at <a href="mailto:solivradiy@gmail.com" className="text-primary font-bold">solivradiy@gmail.com</a>
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/solivradiy/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.773.128 4.548.334 3.465 1.417 2.382 2.5 2.176 3.725 2.118 5.004.06 6.284.048 6.693.048 12s.012 5.716.07 6.996c.058 1.279.264 2.504 1.347 3.587 1.083 1.083 2.308 1.289 3.587 1.347 1.28.058 1.689.07 6.996.07s5.716-.012 6.996-.07c1.279-.058 2.504-.264 3.587-1.347 1.083-1.083 1.289-2.308 1.347-3.587.058-1.28.07-1.689.07-6.996s-.012-5.716-.07-6.996c-.058-1.279-.264-2.504-1.347-3.587C19.504.264 18.279.058 17 .07 15.72.012 15.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 