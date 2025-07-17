"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import StarBorder from "@/components/reactbits/StarBorder";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree to send email directly
      const response = await fetch('https://formspree.io/f/myzpzzqp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 lg:p-12 rounded-2xl border border-gray-700 hover:border-purple-500/30 transition-all duration-500'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-white mb-4'>Send me a Message</h2>
        <p className='text-gray-400'>
          Tell me about your project and let&apos;s discuss how we can work together
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className='mb-6 p-4 bg-green-600/20 border border-green-600/50 rounded-xl text-green-400 text-center'>
          Thank you for your message! I&apos;ll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className='mb-6 p-4 bg-red-600/20 border border-red-600/50 rounded-xl text-red-400 text-center'>
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium mb-2 text-gray-300'>
              Full Name *
            </label>
            <div className='relative'>
              <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
              <Input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Enter your full name'
                className='pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12'
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor='email' className='block text-sm font-medium mb-2 text-gray-300'>
              Email Address *
            </label>
            <div className='relative'>
              <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
              <Input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Enter your email address'
                className='pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12'
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor='message' className='block text-sm font-medium mb-2 text-gray-300'>
            Project Details *
          </label>
          <Textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Tell me about your project, requirements, timeline, and any specific questions you have...'
            rows={6}
            className='bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 rounded-xl resize-none'
            disabled={isSubmitting}
          />
        </div>

        <StarBorder 
          as='button' 
          className='w-full relative z-10 cursor-pointer' 
          color='purple' 
          speed='5s' 
          type='submit'
          disabled={isSubmitting}
        >
          <div className='w-full flex justify-center items-center gap-3 py-4 font-semibold text-lg'>
            {isSubmitting ? (
              <>
                <div className='w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin' />
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className='text-lg' />
                Send Message
              </>
            )}
          </div>
        </StarBorder>
      </form>
    </div>
  );
}