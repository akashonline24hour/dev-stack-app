const TechCard = ({ tech, onAdd, isAdded }) => {
  // Get badge style based on the badge type
  const getBadgeStyle = (badge) => {
    switch (badge?.toLowerCase()) {
      case "popular":
        return "bg-sky-50 text-sky-500 border border-sky-100";
      case "versatile":
        return "bg-emerald-50 text-emerald-500 border border-emerald-100";
      case "fast":
        return "bg-amber-50 text-amber-500 border border-amber-100";
      case "ssr / edge":
        return "bg-purple-50 text-purple-500 border border-purple-100";
      case "standard":
        return "bg-green-50 text-green-600 border border-green-100";
      case "top sql":
        return "bg-blue-50 text-blue-600 border border-blue-100";
      case "cache":
        return "bg-rose-50 text-rose-500 border border-rose-100";
      case "ubiquitous":
        return "bg-yellow-50 text-yellow-600 border border-yellow-200";
      case "essential":
        return "bg-indigo-50 text-indigo-500 border border-indigo-100";
      case "robust":
        return "bg-red-50 text-red-500 border border-red-100";
      case "modern":
        return "bg-teal-50 text-teal-500 border border-teal-100";
      case "containers":
        return "bg-cyan-50 text-cyan-600 border border-cyan-100";
      default:
        return "bg-slate-100 text-slate-600 border border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between h-full">
      {/* Header: Icon & Badge */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-8 h-8 object-contain"
          />
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${getBadgeStyle(
              tech.badge,
            )}`}
          >
            {tech.badge}
          </span>
        </div>

        {/* Tech Details */}
        <h3 className="font-bold text-slate-900 text-lg">{tech.name}</h3>
        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
          {tech.description}
        </p>
      </div>

      {/* Footer Info & Add Button */}
      <div className="mt-6 pt-2">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-4">
          <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
            {tech.category}
          </span>
          <span className="text-slate-400">{tech.difficulty}</span>
          <span className="text-amber-400 font-bold flex items-center gap-1">
            ★{" "}
            <span className="text-slate-700 font-semibold">{tech.rating}</span>
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold transition-all ${
            isAdded
              ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
              : "bg-[#0f172a] text-white hover:bg-slate-800 cursor-pointer"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
