import React, { useState } from 'react';
import { Layout } from '@arco-design/web-react';
import FileTree from './components/FileTree';
import CodeEditor from './components/CodeEditor';
import InputOutputList from './components/InputOutputList';

const { Sider, Content } = Layout;

interface File {
  id: number;
  name: string;
  isFile: boolean;
  content?: string;
  children?: File[];
}

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileClick = (file: File) => {
    if (file.isFile) {
      setSelectedFile(file);
    }
  };

  return (
    // <Layout style={{ height: '100vh' }}>
    //   <Sider width={200} style={{ background: '#fff' }}>
    //     <FileTree onFileClick={handleFileClick} />
    //   </Sider>
    //   <Content>
    //     {selectedFile && (
    //       <CodeEditor
    //         value={selectedFile.content || ''}
    //         onChange={(newContent: string) => {
    //           if (selectedFile) {
    //             setSelectedFile({ ...selectedFile, content: newContent });
    //           }
    //         }}
    //       />
    //     )}
    //   </Content>
    // </Layout>
    <InputOutputList jsonFilePath="io_example.json"></InputOutputList>
  );
};

export default App;