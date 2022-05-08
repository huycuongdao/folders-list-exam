/**
 * One day in 2019, Branch8's new customers suddenly asked for the system to have the functionality of a Folder System.
 * In each Folder, the Admin is free to create a subfolder.
 * The backend of the Folder system has been completed.
 * Now our Tech Lead is working on the Front-end development of the Folder System.
 * Speicifications are:
 * 1. The URL path should be `/folder/:id`
 * 2. All subfolders of the current Folder will be displayed on the screen. Each subfolder is a link and can be clicked into it through the link.
 * 3. Above the child Folder, there will be a Breadcrumb showing the path of the current Folder (the parent of the current Folder until the root folder)
 *    each parent is a clickable Link that will open the folder
 *
 * Our Tech Lead has already finished the front-end Folder and is taken by the boss to handle another thing. This feature falls on your head.
 * Please take over and complete the function!
 *
 * Note:
 * - The backend API is written by a very experienced colleague. The format of the returned data cannot be moved! Please do not modify the file of getFolders.
 * - Tech Lead means "If you can, please make sure that after the page is loaded, the Folder will not slow down because of the larger number of Folders."
 * - PM means "This feature is very urgent, please complete it within three hours!"
 * - Colleagues said, "You are so good!"
 * - The boss said, "Customers say this feature is very important."
 */

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FolderPage from "./FolderPage";
import "antd/dist/antd.css";

const App = () => (
  <Router>
    <div>
      <h1>Hello</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Link to="/folder/0">folder</Link>}
        />
        <Route path="/folder/:id" component={FolderPage} />
      </Switch>
    </div>
  </Router>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
