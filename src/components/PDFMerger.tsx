'use client';

import { downloadPDF, mergePDFFiles } from '@/lib/pdf-utils';
import { useCallback, useState } from 'react';
import type { DropResult } from 'react-beautiful-dnd';
import { FileDropzone } from './FileDropzone';
import { FileList } from './FileList';
import { MergeButton } from './MergeButton';

export function PDFMerger() {
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  const [merging, setMerging] = useState(false);

  const handleDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.filter(
      file => file.type === 'application/pdf' && 
      !pdfFiles.some(existing => existing.name === file.name)
    );
    setPdfFiles(prev => [...prev, ...newFiles]);
  }, [pdfFiles]);

  const handleReorder = (result: DropResult) => {
    if (!result.destination) return;
    
    const items = Array.from(pdfFiles);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setPdfFiles(items);
  };

  const handleRemove = (index: number) => {
    setPdfFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    try {
      setMerging(true);
      const mergedPdfBytes = await mergePDFFiles(pdfFiles);
      downloadPDF(mergedPdfBytes);
    } catch (error) {
      console.error('Error merging PDFs:', error);
    } finally {
      setMerging(false);
    }
  };

  return (
    <div className="space-y-6">
      <FileDropzone onDrop={handleDrop} />

      {pdfFiles.length > 0 && (
        <FileList 
          files={pdfFiles}
          onReorder={handleReorder}
          onRemove={handleRemove}
        />
      )}

      {pdfFiles.length > 1 && (
        <MergeButton 
          onClick={handleMerge}
          disabled={merging}
        />
      )}
    </div>
  );
}