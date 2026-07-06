"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Add your authentication logic here

    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="w-full flex flex-col font-editorial-sans">
      <div className="text-center mb-8">
        <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase block mb-2">
          Welcome Back
        </span>
        <h2 className="font-editorial-serif text-3xl text-neutral-900 uppercase tracking-wide">
          Login
        </h2>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-[9px] tracking-[0.2em] uppercase text-neutral-500 mb-2 font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="name@domain.com"
            required
            className="w-full border-b border-neutral-200 focus:border-black bg-transparent py-2.5 text-xs tracking-wider outline-none transition-colors duration-300 placeholder:text-neutral-300 text-black normal-case"
          />
        </div>

        <div>
          <label className="block text-[9px] tracking-[0.2em] uppercase text-neutral-500 mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            required
            className="w-full border-b border-neutral-200 focus:border-black bg-transparent py-2.5 text-xs tracking-wider outline-none transition-colors duration-300 placeholder:text-neutral-300 text-black normal-case"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3.5 text-[10px] font-medium tracking-[0.25em] uppercase hover:bg-neutral-800 transition-colors duration-300 mt-2"
        >
          Sign In
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-neutral-100 text-center text-[10px] tracking-widest text-neutral-400">
        Dont have an account?{" "}
        <Link
          href="/register"
          className="text-black font-medium underline underline-offset-4 hover:text-neutral-600 transition-colors"
        >
          Register
        </Link>
      </div>
    </div>
  );
}