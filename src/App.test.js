import React, { useRef, useEffect, useState } from 'react';
import { Layout, List, Checkbox, Divider, Image, Space, Grid } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import './ResizableLayout.css'; // 引入CSS文件

const {Row, Col } = Grid;

const ResizableLayout = () => {

  const fileList = ['105684408_p0.jpg', '102825311_p0.jpg', '105684408_p1.jpg', 'file4.bmp', 'file5.png', 'file6.jpg', 'file7.gif', 'file8.bmp', 'file9.png', 'file12.jpg', 'file13.gif', 'file14.bmp', 'file21.png', 'file22.jpg', 'file23.gif', 'file24.bmp', 'file31.png', 'file32.jpg', 'file33.gif', 'file34.bmp', 'file41.png'];
  const directories = ['dir1', 'dir2', 'dir3', 'dir1', 'dir2', 'dir3', 'dir1', 'dir2', 'dir3', 'dir1', 'dir2', 'dir3'];
  const baseurl = 'https://acgmtw.com/wp-content/uploads/2023/07/';


  const [selectedFile, setSelectedFile] = useState(fileList[0]);
  const [selectedDirectory, setSelectedDirectory] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [srcList, setSrcList] = useState([`${baseurl}${selectedFile}`, `${baseurl}${selectedFile}`]);

  const handleFileChange = (file) => {
    setSelectedFile(file);
    setSrcList([`${baseurl}${selectedFile}`, `${baseurl}${selectedFile}`]);
  };

  const handleDirectoryChange = (directory) => {
    setSelectedDirectory(directory);
  };

  // console.log(srcList)



  return (
    <Layout style={{ display: 'flex', height: '100vh' }}>
      <Layout.Sider resizeDirections={['right']} width={200} style={{ minWidth: '200px',paddingLeft: 'hidden'  }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
          <div className="scrollable-list" style={{ flex: '1 0 60%', height: '100%' }}>
            <List
              dataSource={fileList}
              bordered={false}

              render={(item, index) => (
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
          <Divider orientation={'center'} style={{ flex: '1 0 5%', height: '100%', margin: 0 }}>实验集</Divider>
          <div className="scrollable-list" style={{ flex: '1 0 35%', height: '100%' }}>
            <List
              dataSource={directories}
              bordered={false}
              render={(item, index) => (
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

      <Layout.Content style={{ flex: '1', overflow: 'auto', height: '100%' }}>
        {/* <div style={{ flex: '1', display: 'flex', flexDirection: 'column', height: '100%' }}> */}
        {/* <div style={{ flex: '1 1 50%', position: 'relative', }}> */}
        {/* <Image src={`${baseurl}/${selectedFile}`} height={'auto'}/> */}
        {/* </div> */}
        {/* <div style={{ flex: '1 1 50%', position: 'relative' }}> */}
        {/* <ImageDisplay src={`${baseurl}/${selectedDirectory}/${selectedFile}`} /> */}
        {/* <Image src={`${baseurl}/${selectedFile}`} height={'auto'}/> */}
        {/* </div> */}
        {/* </div> */}
        {/* <Image.PreviewGroup srcList={srcList} visible={visible} onVisibleChange={setVisible} /> */}
        {/* <div style={{width: '100%'}}> */}
        <Grid.Row  justify='center' style={{marginTop: '20px'}}>
          <Grid.Col span={24}>
            <Image.PreviewGroup infinite>
              <Space>
                {srcList.map((src, index) => (
                  <Image key={index} src={src} width={'100%'} style={{ maxWidth: '600px' }} />
                ))}
              </Space>
            </Image.PreviewGroup>
          </Grid.Col>
        <Grid.Col span={24}>
          <div>24 - 100%</div>
        </Grid.Col>
        </Grid.Row>
        {/* </div> */}

      </Layout.Content>
    </Layout>
  );
};

export default ResizableLayout;