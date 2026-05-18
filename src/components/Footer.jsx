import React from 'react'

export default function Footer() {
    return (
        <div><footer className="border-t border-gray-200 bg-[#7e653870] px-8 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">

                    <div>
                        <h2 className="text-lg font-medium mb-1">🐾 PetNest</h2>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Finding loving homes for every pet. Adopt, don't shop.
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Contact</p>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:hello@petnest.com" className="text-sm text-gray-700 hover:text-black flex items-center gap-2">
                                📧 hello@petnest.com
                            </a>
                            <a href="tel:+1234567890" className="text-sm text-gray-700 hover:text-black flex items-center gap-2">
                                📞 +1 (234) 567-890
                            </a>
                            <span className="text-sm text-gray-700">📍 Dhaka, Bangladesh</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Follow us</p>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-sm text-gray-700 hover:text-black">Facebook</a>
                            <a href="#" className="text-sm text-gray-700 hover:text-black">Instagram</a>
                            <a href="#" className="text-sm text-gray-700 hover:text-black">Twitter / X</a>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Quick links</p>
                        <div className="flex flex-col gap-3">
                            <a href="/all-pets" className="text-sm text-gray-700 hover:text-black">All Pets</a>
                            <a href="#" className="text-sm text-gray-700 hover:text-black">About Us</a>
                            <a href="#" className="text-sm text-gray-700 hover:text-black">Privacy Policy</a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-200 pt-5 flex justify-between items-center flex-wrap gap-2">
                    <p className="text-xs text-gray-400">© 2025 PetNest. All rights reserved.</p>
                    <p className="text-xs text-gray-400">Made with 🐾 for pets everywhere</p>
                </div>
            </div>
        </footer></div>
    )
}
