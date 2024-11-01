import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';

interface MergeButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export function MergeButton({ onClick, disabled }: MergeButtonProps) {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          'inline-flex items-center px-6 py-3 rounded-lg text-white',
          'transform transition-all',
          disabled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5'
        )}
      >
        <Download className="w-5 h-5 mr-2" />
        {disabled ? 'Unindo...' : 'Unir PDFs'}
      </button>
    </div>
  );
}