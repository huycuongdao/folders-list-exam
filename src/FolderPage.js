import React, { useState, useEffect } from "react";
import { Breadcrumb, List, Card } from "antd";
import { Link, useParams } from "react-router-dom";
import getFolders from "./getFolders";
import { FolderOutlined } from "@ant-design/icons";

const getFolderData = (folders = {}, id, path) => {
  const { id: folderId, children } = folders;

  if (folderId === id) return [folders, path];
  if (!Array.isArray(children)) return [null, path];

  let result;
  let depthResult;

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const [matched, matchedDepth] = getFolderData(child, id, [...path, { id: child.id, name: child.name }]);
    if (matched) {
      result = matched;
      depthResult = matchedDepth;
      break;
    }
  }

  return [result, depthResult];
};

const FolderPage = () => {
  const { id } = useParams();

  const [rootFolder, setFolders] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const data = await getFolders();
    setLoading(false);
    setFolders(data);
  }, []);

  const [matched, path] = getFolderData(rootFolder, +id, [
    { id: rootFolder?.id, name: rootFolder?.name },
  ]) || [{}, []];

  const data = matched?.children || [];

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item key="home">
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        {path?.map((item, index) => (
          <Breadcrumb.Item key={item.id || index}>
            <Link to={`/folder/${item.id}`}>{item.name}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <div style={{ padding: 24 }}>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          loading={isLoading}
          renderItem={(item) => (
            <List.Item>
              <Link to={`/folder/${item.id}`}>
                <Card>
                  <FolderOutlined />
                  &nbsp;
                  {item.name}
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default FolderPage;
