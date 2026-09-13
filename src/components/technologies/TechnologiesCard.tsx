import type { TechnologiesType } from "../type/technologiesType";

interface TechnologiesCardProps {
  technology: TechnologiesType;
  selectedTechnologies: TechnologiesType[];
  handleAddToStack: (technology: TechnologiesType) => void;
}

function TechnologiesCard({
  technology,
  selectedTechnologies,
  handleAddToStack,
}: TechnologiesCardProps) {
  const isSelected = selectedTechnologies.some(
    (item) => item.id === technology.id,
  );
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <img
          className="h-8 w-8 object-contain"
          src={technology.icon}
          alt={technology.name}
        />

        <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-medium">
          {technology.badge}
        </span>
      </div>

      <div className="mt-3">
        <h2 className="text-sm font-semibold text-gray-900">
          {technology.name}
        </h2>

        <p className="mt-2 min-h-10 text-[10px] leading-4 text-gray-500">
          {technology.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between text-[9px] text-gray-500">
        <span className="rounded bg-gray-100 px-2 py-1">
          {technology.category}
        </span>

        <span>{technology.difficulty}</span>

        <span>⭐ {technology.rating}</span>
      </div>

      <button
        onClick={() => handleAddToStack(technology)}
        disabled={isSelected}
        className={`mt-3 w-full rounded-md py-2 text-[10px] font-medium transition ${
          isSelected
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "cursor-pointer bg-[#0B0F19] text-white hover:bg-gray-800"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologiesCard;
