import { EllipsisSpinner } from '@/components/ui/EllipsisSpinner';

const Spinner = () => (
  <div className="flex h-screen w-full items-center justify-center fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="flex flex-col items-center justify-center gap-4">
      <EllipsisSpinner className="text-[#C8E678]" size={64} />
      <span className="font-onest text-white text-xl">
        Loading
      </span>
    </div>
  </div>
);

export default Spinner;