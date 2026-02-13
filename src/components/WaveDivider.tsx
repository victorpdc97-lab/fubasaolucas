import { cn } from "@/lib/utils";

interface WaveDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}

const WaveDivider = ({ from = "bg-background", to = "bg-muted", flip, className }: WaveDividerProps) => (
  <div className={cn("relative -mt-1", flip && "rotate-180", className)}>
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
      preserveAspectRatio="none"
    >
      <path
        d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
        className={cn("fill-current", to === "bg-muted" ? "text-muted" : to === "bg-dark" ? "text-dark" : to === "bg-background" ? "text-background" : "text-primary")}
      />
    </svg>
  </div>
);

export default WaveDivider;
