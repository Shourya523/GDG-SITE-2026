import { cn } from "@/lib/utils"

interface RetroGridProps extends React.HTMLAttributes<HTMLDivElement> {
  angle?: number
  cellSize?: number
  opacity?: number
}

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  ...props
}: RetroGridProps) {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        className
      )}
      style={gridStyles}
      {...props}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className={cn(
          "animate-grid",
          "absolute -inset-[100%] h-[300vh] w-[200vw] opacity-[var(--opacity)]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_0)]",
          "[background-size:var(--cell-size)_var(--cell-size)]",
          "dark:[background-image:linear-gradient(to_right,rgba(168,85,247,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(16,185,129,0.2)_1px,transparent_0)]"
        )} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent to-90%" />
    </div>
  )
}