import React from 'react';

interface File {
  id: number;
  name: string;
}

interface FileTabsProps {
  activeTab: File | null;
  onTabChange: (file: File) => void;
}

const FileTabs: React.FC<FileTabsProps> = ({ activeTab, onTabChange }) => {
  const files: File[] = [
    { id: 1, name: 'index.js' },
    { id: 3, name: 'app.js' },
  ];

  const handleTabClick = (file: File) => {
    onTabChange(file);
  };

  return (
    <div className="file-tabs">
      {files.map(file => (
        <span
          key={file.id}
          className={activeTab && file.id === activeTab.id ? 'active' : ''}
          onClick={() => handleTabClick(file)}
        >
          {file.name}
        </span>
      ))}
    </div>
  );
};

export default FileTabs;