import React, { useState, useEffect } from 'react';
import { Tabs, Spin } from '@arco-design/web-react';
import axios from 'axios';

interface InputOutputPair {
  input: string;
  output: string;
}

interface InputOutputListProps {
  jsonFilePath: string;
}

const InputOutputList: React.FC<InputOutputListProps> = ({ jsonFilePath }) => {
  const [data, setData] = useState<InputOutputPair[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(jsonFilePath);
        setData(response.data);
      } catch (error) {
        console.error('Error loading JSON data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jsonFilePath]);

  if (loading) {
    return <Spin />;
  }

  return (
    <Tabs style={{ width: '30%' }}>
      {data.map((pair, index) => (
        <Tabs.TabPane key={index} title={`Pair ${index + 1}`}>
          <h4>Input:</h4>
          <pre style={{whiteSpace: 'pre-wrap'}}>{pair.input}</pre>
          <h4>Output:</h4>
          <pre style={{whiteSpace: 'pre-wrap'}}>{pair.output}</pre>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default InputOutputList;