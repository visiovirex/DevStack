import { use } from "react";
import type { TechnologiesType } from "../type/technologiesType";
import TechnologiesCard from "./TechnologiesCard";

interface TechnologiesProps {
  technologiesPromise: Promise<TechnologiesType[]>;
}

function Technologies({ technologiesPromise }: TechnologiesProps) {
  const technologies = use(technologiesPromise);

  return (
    <div className="container mx-auto px-4 py-8">

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
            <TechnologiesCard key={technology.id} technology={technology} />
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 p-5 shadow-sm">
          <h3 className="font-semibold">Your Stack</h3>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
