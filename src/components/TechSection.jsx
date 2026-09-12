import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TechCard from "./TechCard";
import YourStackSidebar from "./YourStackSidebar";

const TechSection = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);

  // Load technology array dynamically from JSON
  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error("Error loading technology data:", err));
  }, []);

  // Add technology handler
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Remove single technology handler
  const handleRemoveFromStack = (techId) => {
    const removedItem = selectedStack.find((item) => item.id === techId);
    setSelectedStack(selectedStack.filter((item) => item.id !== techId));
    if (removedItem) {
      toast.info(`${removedItem.name} removed from stack.`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  // Remove all handler
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("Cleared all technologies from stack!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <section id="technologies" className="py-12 bg-slate-50/50 min-h-screen">
      <ToastContainer />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent lg:bg-none lg:text-[#EC4899]">
              Technologies
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Tech Cards (Responsive: 1 col mobile, 2 col tablet, 3 col desktop inside lg:col-span-3) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => {
              const isAdded = selectedStack.some((item) => item.id === tech.id);
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

          {/* Sidebar Area */}
          <div className="lg:col-span-1">
            <YourStackSidebar
              selectedStack={selectedStack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
