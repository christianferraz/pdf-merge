'use client';

import { File, X } from 'lucide-react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

interface FileListProps {
  files: File[];
  onReorder: (result: DropResult) => void;
  onRemove: (index: number) => void;
}

export function FileList({ files, onReorder, onRemove }: FileListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Arquivos selecionados</h2>
      <DragDropContext onDragEnd={onReorder}>
        <Droppable droppableId="pdf-list">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {files.map((file, index) => (
                <Draggable key={file.name} draggableId={file.name} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-lg group hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-3">
                        <File className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700">{file.name}</span>
                      </div>
                      <button
                        onClick={() => onRemove(index)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove file"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}