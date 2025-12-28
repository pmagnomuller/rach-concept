import Link from "next/link";
import { Belt } from "@/data/belts";

interface BeltCardProps {
  belt: Belt;
}

export default function BeltCard({ belt }: BeltCardProps) {
  return (
    <Link 
      href={`/belt/${belt.id}`}
      className="group block"
    >
      <article className="relative overflow-hidden">
        {/* Belt Image Placeholder */}
        <div 
          className="aspect-[3/4] w-full relative overflow-hidden bg-gradient-to-br"
          style={{
            background: belt.gradient,
          }}
        >
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />
          
          {/* Belt Pattern Decoration */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div 
              className="w-4/5 h-6 rounded-full"
              style={{ background: belt.accentColor }}
            />
          </div>

          {/* Quick View Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-6 py-2 bg-background/95 text-foreground text-xs tracking-[0.2em] uppercase font-medium">
              View Details
            </span>
          </div>
        </div>

        {/* Belt Info */}
        <div className="pt-5 pb-2">
          <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
            {belt.name}
          </h3>
          <p className="text-sm text-muted mt-1 tracking-wide">
            {belt.material}
          </p>
        </div>
      </article>
    </Link>
  );
}

