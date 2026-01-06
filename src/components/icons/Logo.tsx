import { FishIcon } from './FishIcon';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-primary ${className}`}>
      <FishIcon className="h-7 w-7" />
      <h1 className="text-xl font-bold tracking-tighter">Aqua Culture</h1>
    </div>
  );
}
