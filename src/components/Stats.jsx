import { FaCat, FaHandHoldingHeart } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

const stats = [
  {
    icon: <FaCat />,
    value: "12K+",
    label: "Happy Pets",
    bg: "from-orange-400 to-orange-500",
  },
  {
    icon: <IoHome />,
    value: "850+",
    label: "Verified Homes",
    bg: "from-emerald-400 to-emerald-500",
  },
  {
    icon: <FaHandHoldingHeart />,
    value: "98%",
    label: "Customer Satisfaction",
    bg: "from-pink-400 to-pink-500",
  },
  {
    icon: <FaEarthAmericas />,
    value: "24+",
    label: "Cities Covered",
    bg: "from-blue-400 to-blue-500",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#fffdf9] py-24">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Trusted by Pet Lovers 🐾
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Making Every Pet Feel at Home
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            PetNest helps pet parents find trusted sitters, loving homes,
            and unforgettable care experiences for their furry friends.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Gradient Top Bar */}
              <div
                className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.bg}`}
              />

              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gray-100 opacity-50 blur-2xl transition-all duration-500 group-hover:scale-150" />

              <div className="relative z-10">
                
                {/* Icon */}
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.bg} text-3xl shadow-lg`}
                >
                  {item.icon}
                </div>

                {/* Number */}
                <h3 className="mt-6 text-5xl font-black tracking-tight text-gray-900">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="mt-3 text-lg font-medium text-gray-600">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}