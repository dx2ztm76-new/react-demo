import React, { useRef, useEffect, useState } from 'react';
import { Layout, List, Checkbox } from '@arco-design/web-react';

interface ImageDisplayProps {
  src: string;
}

const ResizableLayout: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>('');
  const [selectedDirectory, setSelectedDirectory] = useState<string>('');
  const fileList: string[] = ['file1.png', 'file2.jpg', 'file3.gif', 'file4.bmp'];
  const directories: string[] = ['dir1', 'dir2', 'dir3'];
  const baseurl: string = 'http://example.com/images';

  const handleFileChange = (file: string): void => {
    setSelectedFile(file);
  };

  const handleDirectoryChange = (directory: string): void => {
    setSelectedDirectory(directory);
  };

  const ImageDisplay: React.FC<ImageDisplayProps> = ({ src }) => {
    return (
      <div className="image-display">
        {src ? <img src={src} alt="Preview" /> : <p>No image selected</p>}
      </div>
    );
  };

  const dividerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: MouseEvent): void => {
    e.preventDefault();
    const divider = dividerRef.current;
    if (divider) {
      const x = e.clientX - window.pageXOffset;
      const newWidth = Math.max(50, x - divider.getBoundingClientRect().left);
      divider.style.width = `${newWidth}px`;
    }
  };

  useEffect(() => {
    const divider = dividerRef.current;
    if (divider) {
      const handleMouseDown = (e: MouseEvent): void => {
        document.addEventListener('mousemove', handleDrag);
      };

      divider.addEventListener('mousedown', handleMouseDown);

      const handleMouseUp = (): void => {
        document.removeEventListener('mousemove', handleDrag);
      };

      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        divider.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Layout.Sider width={200} style={{ resize: 'horizontal', overflow: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: 200 }}>
          <div className="scrollable-list" style={{ flex: '1' }}>
            <List
              dataSource={fileList}
              render={(item: string, index: number) => (
                <List.Item key={index}>
                  <Checkbox
                    onChange={() => handleFileChange(item)}
                    checked={selectedFile === item}
                  >
                    {item}
                  </Checkbox>
                </List.Item>
              )}
            />
          </div>
          <div className="scrollable-list" style={{ flex: '1' }}>
            <List
              dataSource={directories}
              render={(item: string, index: number) => (
                <List.Item key={index}>
                  <Checkbox
                    onChange={() => handleDirectoryChange(item)}
                    checked={selectedDirectory === item}
                  >
                    {item}
                  </Checkbox>
                </List.Item>
              )}
            />
          </div>
        </div>
      </Layout.Sider>
      <div
        ref={dividerRef}
        style={{
          width: '5px',
          cursor: 'ew-resize',
          backgroundColor: '#333',
          height: '100%',
        }}
      />
      <Layout style={{ flex: '1', overflow: 'auto' }}>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: '1', position: 'relative' }}>
            <ImageDisplay src={`${baseurl}/${selectedDirectory}/${selectedFile}`} />
          </div>
          <div style={{ flex: '1', position: 'relative' }}>
            <ImageDisplay src={`${baseurl}/${selectedDirectory}/anotherfile.png`} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ResizableLayout;