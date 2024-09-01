import React, { useEffect, useState, useRef } from 'react';
import * as monaco from 'monaco-editor';

interface CodeEditorProps {
  value: string;
  onChange: (newContent: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange }) => {
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        containerRef.current.style.height = `${window.innerHeight}px`;
        editor?.layout();
      }
    };

    const editorInstance = monaco.editor.create(containerRef.current!, {
      value: value || '',
      language: 'javascript',
      theme: 'vs-dark',
      automaticLayout: true,
    });

    setEditor(editorInstance);
    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => {
      editor?.dispose();
      window.removeEventListener('resize', updateHeight);
    };
  }, [value, editor]);

  useEffect(() => {
    if (editor) {
      editor.setValue(value || '');
    }
  }, [editor, value]);

  return <div ref={containerRef} />;
};

export default CodeEditor;