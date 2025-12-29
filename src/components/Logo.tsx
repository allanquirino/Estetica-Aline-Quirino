import { Leaf } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Leaf className="h-8 w-8 text-primary" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col">
        <span className="font-display text-xl font-semibold text-foreground leading-none">
          Estética
        </span>
        <span className="font-display text-lg text-primary leading-none">
          Aline Quirino
        </span>
      </div>
    </div>
  );
};

export default Logo;