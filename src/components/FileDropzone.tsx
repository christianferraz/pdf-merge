'use client';

import { cn } from '@/lib/utils';
import { FileUp } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface FileDropzoneProps {
  onDrop: (files: File[]) => void;
}

export function FileDropzone({ onDrop }: FileDropzoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    }
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        'border-2 border-dashed rounded-lg p-8 text-center transition-colors',
        'hover:border-blue-400 bg-white',
        isDragActive && 'border-blue-500 bg-blue-50'
      )}
    >
      <input {...getInputProps()} />
      <FileUp className="w-12 h-12 mx-auto mb-4 text-gray-400" />
      <p className="text-gray-600">
        {isDragActive
          ? 'Arraste seus PDFs aqui...'
          : 'Arraste e solte os arquivos PDF aqui ou clique para selecionar arquivos.'}
      </p>
    </div>
  );
}