/**
 * 資料格式在這！
 * 請不要修改這個檔案
 * Please do not change this file
 */
function getFolders() {
  const data = {
    id: 0,
    name: "root",
    children: [
      {
        id: 1,
        name: "A",
        children: [
          { id: 3, name: "A1" },
          { id: 4, name: "A2" },
          {
            id: 5,
            name: "A3",
            children: [
              { id: 9, name: "aaa" },
              { id: 10, name: "bbb" },
              { id: 11, name: "ccc" }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "folder-2",
        children: [
          { id: 6, name: "B1" },
          {
            id: 7,
            name: "B2",
            children: [
              { id: 12, name: "zzz" },
              { id: 13, name: "xxx" },
              { id: 14, name: "yyy" }
            ]
          },
          { id: 8, name: "B3" }
        ]
      },
      {
        id: 15,
        name: "folder-2",
        children: [
          {
            id: 16,
            name: "B1",
            children: [
              { id: 22, name: "zzz" },
              { id: 23, name: "xxx" },
              { id: 24, name: "yyy" }
            ]
          },
          {
            id: 17,
            name: "B2",
            children: [
              { id: 19, name: "zzz" },
              { id: 20, name: "xxx" },
              { id: 21, name: "yyy" }
            ]
          },
          { id: 18, name: "B3" }
        ]
      }
    ]
  };
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}

export default getFolders;
