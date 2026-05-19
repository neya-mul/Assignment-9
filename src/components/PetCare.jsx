import React from 'react'
import { FaHome } from 'react-icons/fa'
// import { FaHome } from 'react-icons/fa'
import { FaBowlFood, FaHospital } from 'react-icons/fa6'
import { IoLogoOctocat } from 'react-icons/io'

export default function PetCare() {
    return (
        <section className="px-6 py-12 mx-auto max-w-7xl container text-black">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    Essential Pet Care Tips
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                    Bringing a new companion home is an incredibly rewarding journey. Whether you are a first-time adopter or an experienced pet parent, keeping these fundamental care tips in mind will ensure your new best friend stays happy, healthy, and safe.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div className="text-4xl mb-4" role="img" aria-label="Nutrition icon">  <FaBowlFood />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        Nutrition & Hydration
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Feed high-quality food appropriate for your pet's age and size. Always provide clean, fresh water, and keep harmful foods like chocolate or onions far out of reach.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div className="text-4xl mb-4" role="img" aria-label="Veterinary icon">  <FaHospital />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        Routine Vet Care
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Schedule annual check-ups, stay up-to-date on essential vaccinations, and maintain regular flea, tick, and heartworm prevention to catch issues early.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div className="text-4xl mb-4" role="img" aria-label="Dog icon"> <IoLogoOctocat />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        Exercise & Play
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Physical activity and mental stimulation are vital. Daily walks, interactive toys, and scratching posts keep your pets fit and prevent behavioral problems.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div className="text-4xl mb-4" role="img" aria-label="Home icon"> <FaHome />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        A Safe Environment
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Microchip your pet and keep a collar with an ID tag on them at all times. Secure toxic houseplants and make sure hazardous household chemicals are locked away.
                    </p>
                </div>
            </div>
        </section>
    )
}
