const YourStackSidebar = ({ selectedStack, onRemove, onRemoveAll }) => {
  const count = selectedStack.length;

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm sticky top-20">
      {/* Sidebar Header */}
      <div className="border-b border-slate-100 pb-3 mb-4">
        <h3 className="font-bold text-slate-900 text-lg">Your Stack</h3>
        <p className="text-xs text-slate-400 mt-0.5 font-medium">
          {count} {count === 1 ? "Technology" : "Technologies"} Selected
        </p>
      </div>

      {/* Empty State vs Selected Items */}
      {count === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 px-4 text-center bg-slate-50/50 rounded-lg border border-dashed border-slate-200">
          <p className="text-xs text-slate-400 font-medium">
            No technologies selected yet.
          </p>
          <p className="text-[11px] text-slate-300 mt-1">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="space-y-3 max-h-95 overflow-y-auto pr-1">
          {selectedStack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50/60"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-5 h-5 object-contain"
                />
                <div>
                  <h4 className="text-xs font-semibold text-slate-800">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-slate-400 hover:text-rose-500 hover:bg-rose-50 p-1 rounded-md text-xs font-bold transition-colors cursor-pointer"
                title="Remove technology"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All Action Button */}
      {count > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full py-2 border border-rose-200 text-rose-500 hover:bg-rose-50 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStackSidebar;
