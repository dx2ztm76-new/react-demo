import React from 'react';

interface File {
  id: number;
  name: string;
  isFile: boolean;
  children?: File[];
}

interface FileTreeProps {
  onFileClick: (file: File) => void;
}

const FileTree: React.FC<FileTreeProps> = ({ onFileClick }) => {
  const files: File[] = [
    { id: 1, name: 'index.js', isFile: true },
    { id: 2, name: 'src', isFile: false, children: [{ id: 3, name: 'app.js', isFile: true }] },
  ];

  const renderTree = (file: File) => {
    if (!file.isFile) {
      return (
        <div key={file.id}>
          <span onClick={() => onFileClick(file)}>{file.name}</span>
          {file.children && file.children.map(child => renderTree(child))}
        </div>
      );
    }
    return <span key={file.id} onClick={() => onFileClick(file)}>{file.name}</span>;
  };

  return (
    <div className="file-tree">
      {files.map(file => renderTree(file))}
    </div>
  );
};

export default FileTree;