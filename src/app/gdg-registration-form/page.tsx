"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNo: "",
        year: "",
        batch: "",
        departmentInterested: ""
    });

    const [status, setStatus] = useState({ loading: false, message: "", type: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ 
            ...prev, 
            [name]: name === "year" || name === "mobileNo" ? Number(value) : value 
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, message: "", type: "" });

        try {
            const response = await axios.post("/api/registrationForm", formData);
            if (response.status === 201) {
                setStatus({ loading: false, message: "Registration successful!", type: "success" });
                setFormData({ name: "", email: "", mobileNo: "", year: "", batch: "", departmentInterested: "" });
            }
        } catch (error: any) {
            const errorMsg = error.response?.status === 409 
                ? "You have already registered with these details." 
                : "Something went wrong. Please try again.";
            setStatus({ loading: false, message: errorMsg, type: "error" });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 selection:bg-red-500/30">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full max-w-xl bg-[rgba(15,15,15,0.4)] backdrop-blur-[25px] border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl saturate-150"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[40px]" />

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-2">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-green-500">Community</span>
                    </h2>
                    <p className="text-[#a1a1a1] text-sm mb-8">Fill in your details to get started with <strong>GDG JIIT 128</strong></p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                            <input
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                            <input
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2 ml-1">Mobile No</label>
                                <input
                                    required
                                    name="mobileNo"
                                    value={formData.mobileNo}
                                    onChange={handleChange}
                                    type="number"
                                    placeholder="9876543210"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2 ml-1">Year</label>
                                <select 
                                    required
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                >
                                    <option value="" className="bg-neutral-900">Select Year</option>
                                    <option value="1" className="bg-neutral-900">1st Year</option>
                                    <option value="2" className="bg-neutral-900">2nd Year</option>
                                    <option value="3" className="bg-neutral-900">3rd Year</option>
                                    <option value="4" className="bg-neutral-900">4th Year</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2 ml-1">Batch (e.g., F1, B2)</label>
                            <input
                                required
                                name="batch"
                                value={formData.batch}
                                onChange={handleChange}
                                type="text"
                                placeholder="A1"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2 ml-1">Department Interested</label>
                            <div className="grid grid-cols-3 gap-3">
                                {["tech", "ui/ux", "management"].map((dept) => (
                                    <label key={dept} className="relative group">
                                        <input 
                                            required
                                            type="radio" 
                                            name="departmentInterested" 
                                            value={dept} 
                                            checked={formData.departmentInterested === dept}
                                            onChange={handleChange}
                                            className="peer sr-only" 
                                        />
                                        <div className="w-full text-center py-2 px-1 text-[10px] md:text-xs uppercase font-bold text-white/40 border border-white/10 rounded-xl cursor-pointer peer-checked:border-red-500 peer-checked:text-white peer-checked:bg-red-500/10 transition-all group-hover:bg-white/5">
                                            {dept}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={status.loading}
                            type="submit"
                            className="w-full mt-6 bg-white text-black font-bold py-4 rounded-2xl hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-50"
                        >
                            {status.loading ? "Processing..." : "Submit Application"}
                        </motion.button>
                        
                        {status.message && (
                            <motion.p 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                className={`text-center text-sm mt-4 font-medium ${status.type === "error" ? "text-red-400" : "text-green-400"}`}
                            >
                                {status.message}
                            </motion.p>
                        )}
                    </form>
                </div>
            </motion.div>
        </div>
    );
}