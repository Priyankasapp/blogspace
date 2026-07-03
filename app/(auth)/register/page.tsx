"use client";

import Link from 'next/link';

export default function RegisterPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex flex-col font-editorial-sans">
      <div className="text-center mb-8">
        <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase block mb-2">Join BlogSpace</span>
        <h2 className="font-editorial-serif text-3xl text-neutral-900 uppercase tracking-wide">Register</h2>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-[9px] tracking-[0.2em] uppercase text-neutral-500 mb-2 font-medium">Full Name</label>
          <input 
            type="text" 
            placeholder="Jane Doe"
            className="w-full border-b border-neutral-200 focus:border-black bg-transparent py-2.5 text-xs tracking-wider outline-none transition-colors duration-300 placeholder:text-neutral-300 text-black normal-case"
          />
        </div>

        <div>
          <label className="block text-[9px] tracking-[0.2em] uppercase text-neutral-500 mb-2 font-medium">Email Address</label>
          <input 
            type="email" 
            placeholder="name@domain.com"
            className="w-full border-b border-neutral-200 focus:border-black bg-transparent py-2.5 text-xs tracking-wider outline-none transition-colors duration-300 placeholder:text-neutral-300 text-black normal-case"
          />
        </div>

        <div>
          <label className="block text-[9px] tracking-[0.2em] uppercase text-neutral-500 mb-2 font-medium">Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full border-b border-neutral-200 focus:border-black bg-transparent py-2.5 text-xs tracking-wider outline-none transition-colors duration-300 placeholder:text-neutral-300 text-black normal-case"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-black text-white py-3.5 text-[10px] font-medium tracking-[0.25em] uppercase hover:bg-neutral-800 transition-colors duration-300 mt-2"
        >
          Create Account
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-neutral-100 text-center text-[10px] tracking-widest text-neutral-400">
        Already have an account?{' '}
        <Link href="/login" className="text-black font-medium underline underline-offset-4 hover:text-neutral-600 transition-colors">
          Login
        </Link>
      </div>
    </div>
  );
}