import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TechCard from "./TechCard";
import YourStackSidebar from "./YourStackSidebar";

const TechSection = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch JSON data");
        }
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading technology data:", err);
        setIsLoading(false);
      });
  }, []);

  // 1. Add to Stack Alert & Duplicate Add Attempt Alert
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`"${tech.name}" is already in your stack!`);
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added "${tech.name}" to your stack!`);
  };

  // 2. Remove Alert
  const handleRemoveFromStack = (techId) => {
    const removedItem = selectedStack.find((item) => item.id === techId);

    if (removedItem) {
      setSelectedStack((prev) => prev.filter((item) => item.id !== techId));
      toast.info(`Removed "${removedItem.name}" from your stack.`);
    }
  };

  // 3. Remove All Alert
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;

    setSelectedStack([]);
    toast.error("Cleared all technologies from your stack!");
  };

  return (
    <section id="technologies" className="py-12 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Explore the{" "}
            <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Pick technologies per category to build your ideal stack.
          </p>
        </div>

        {/* Loading State Spinner vs Content Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-3">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-pink-500 rounded-full animate-spin"></div>
            <p className="text-sm text-slate-500 font-medium">
              Loading technologies...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isAdded = selectedStack.some(
                  (item) => item.id === tech.id,
                );
                return (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAdd={handleAddToStack}
                    isAdded={isAdded}
                  />
                );
              })}
            </div>

            <div className="lg:col-span-1">
              <YourStackSidebar
                selectedStack={selectedStack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechSection;
