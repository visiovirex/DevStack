import { use, useState } from "react";
import type { TechnologiesType } from "../type/technologiesType";
import TechnologiesCard from "./TechnologiesCard";
import { toast } from "react-toastify";

interface TechnologiesProps {
  technologiesPromise: Promise<TechnologiesType[]>;
}

function Technologies({ technologiesPromise }: TechnologiesProps) {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologiesType[]
  >([]);

  const handleAddToStack = (technology: TechnologiesType) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );
    if (alreadySelected) {
      toast.warning(`${technology.name} is already selected`);
      return;
    }
    setSelectedTechnologies((previous) => [...previous, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const removedTechnology = selectedTechnologies.find(
      (technology) => technology.id === id,
    );

    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id),
    );

    if (removedTechnology) {
      toast.warning(`${removedTechnology.name} removed from your stack`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.warning("All technologies removed from your stack");
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div>
        <h1 className="text-3xl font-bold">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-3">
          {technologies.map((technology) => (
            <TechnologiesCard
              key={technology.id}
              handleAddToStack={handleAddToStack}
              selectedTechnologies={selectedTechnologies}
              technology={technology}
            />
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 p-5 shadow-sm">
          <h3 className="font-semibold">Your Stack</h3>
          <p className="mt-1 text-xs text-gray-400">
            {selectedTechnologies.length === 0
              ? "No technologies selected yet."
              : `${selectedTechnologies.length} ${
                  selectedTechnologies.length > 1
                    ? "Technologies"
                    : "Technology"
                } Selected`}
          </p>

          {selectedTechnologies.length === 0 ? (
            <div className="mt-4 flex h-16 items-center justify-center rounded-xl border border-dashed border-gray-200">
              <p className="text-xs text-gray-400">Your Stack is Empty</p>
            </div>
          ) : (
            <div>
              <div className="mt-4 grid grid-cols-1 gap-2">
                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        className="h-8 w-8 object-contain"
                        src={technology.icon}
                        alt={technology.name}
                      />

                      <div>
                        <h4 className="text-xs font-semibold text-gray-900">
                          {technology.name}
                        </h4>

                        <p className="text-[9px] text-gray-400">
                          {technology.category}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveFromStack(technology.id)}
                      className="cursor-pointer text-xl text-gray-400 transition hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={handleRemoveAll}
                className="mt-5 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
