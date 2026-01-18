"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState({ loading: false, message: "", type: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, message: "", type: "" });

        try {
            const response = await axios.post("/api/contactUs", formData);

            if (response.status >= 200 && response.status < 300) {
                setStatus({ loading: false, message: "Message sent successfully!", type: "success" });
                setFormData({ name: "", email: "", message: "" });
            }
        } catch (error: any) {
            setStatus({
                loading: false,
                message: "Failed to send message. Please try again.",
                type: "error"
            });
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6 selection:bg-red-500/30 mt-7">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full max-w-xl bg-[rgba(15,15,15,0.4)] backdrop-blur-[25px] border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl saturate-150"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[40px]" />

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-2">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-green-500">Touch</span>
                    </h2>
                    <p className="text-[#a1a1a1] text-sm mb-8">Have a question? Send us a message and we&apos;ll get back to you.</p>

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
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
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
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2 ml-1">Message</label>
                            <textarea
                                required
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={status.loading}
                            type="submit"
                            className="w-full mt-6 bg-white text-black font-bold py-4 rounded-2xl hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-50"
                        >
                            {status.loading ? "Sending..." : "Send Message"}
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