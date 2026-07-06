import { Icon } from '../ui/Icon';

export function AppHeader({
  title,
  showBack,
  onBack,
}: {
  title: string;
  showBack: boolean;
  onBack: () => void;
}) {
  return (
    <header className="flex items-center justify-between border-b border-[#E5E7EB] bg-white px-6 py-3">
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-[#0F172A] hover:bg-[#F1F5F9]"
            onClick={() => onBack()}
            aria-label="Back"
          >
            <Icon name="back" size={18} />
          </button>
        )}
        <h1 className="text-[20px] font-semibold text-[#0F172A]">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative text-[#475569]">
          <Icon name="bell" size={20} />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#EF4444] px-1 text-[10px] font-semibold text-white">
            0
          </span>
        </div>
        <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-[#475569] to-[#0F172A]">
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#22C55E]"></span>
        </div>
      </div>
    </header>
  );
}
