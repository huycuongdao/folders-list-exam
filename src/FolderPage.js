import React, { useState, useEffect } from "react";
import { Breadcrumb, List, Card } from "antd";
import { Link } from "react-router-dom";
import getFolders from "./getFolders";
import { FolderOutlined } from "@ant-design/icons";

const FolderPage = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    getFolders().then(setState);
  }, []);

  const data = state.children;
  return (
    <div>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{state.name}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card>
                <Link to={`/folder/${item.id}`}>
                  <FolderOutlined />
                  {item.name}
                </Link>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default FolderPage;
