import { Journey } from "@/types";

export default function JourneyItem({
  icon,
  date,
  renderDescription,
  positionOnTimeline,
}: Journey & { positionOnTimeline: "right" | "left" }) {
  return (
    <li
      className={`relative flex flex-col items-center lg:w-[500px]  ${
        positionOnTimeline === "right"
          ? "lg:translate-x-1/2 lg:flex-row lg:items-start"
          : "lg:-translate-x-1/2 lg:flex-row-reverse lg:items-start"
      }`}
    >
      <div
        className={`relative h-5 w-5  rounded-full bg-black-300 dark:bg-white-200 lg:absolute lg:top-0 ${
          positionOnTimeline === "right"
            ? "lg:-translate-x-1/2"
            : "lg:translate-x-1/2"
        }`}
      />
      <div
        className={`flex flex-col items-center gap-y-4 bg-white py-4 dark:bg-black lg:mx-8 lg:py-0 ${
          positionOnTimeline === "right" ? "lg:items-start" : "lg:items-end"
        }`}
      >
        <div className="text-2xl text-black-300 dark:text-white-300">
          {icon}
        </div>
        <div
          className={`flex flex-grow flex-col items-center gap-y-2 text-center tracking-wide  ${
            positionOnTimeline === "right" ? "lg:items-start" : "lg:items-end"
          }`}
        >
          <p className="text-lg uppercase tracking-wide text-black-200 dark:text-white-200">
            {date}
          </p>
          <div
            className={`text-2xl font-semibold tracking-wide text-black-100 first-letter:uppercase dark:text-white-100 ${
              positionOnTimeline === "right" ? "lg:text-start" : "lg:text-end"
            }`}
          >
            {renderDescription()}
          </div>
        </div>
      </div>
    </li>
  );
}
