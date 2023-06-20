import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import DefaultLayout from "./layouts/DefauLayout/DefaultLayout";
import { Fragment } from "react";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((element, index) => {
            let Layout = DefaultLayout;
            if (element.layout) {
              Layout = element.layout;
            } else if (element.layout === null) {
              Layout = Fragment;
            }
            const Page = element.component;
            return (
              <Route
                key={index}
                path={element.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
        <Routes>
          {privateRoutes.map((element, index) => {
            let Layout = DefaultLayout;
            if (element.layout != null) {
              Layout = element.layout;
            } else if (element.layout == null) {
              Layout = Fragment;
            }
            const Page = element.component;
            return (
              <Route
                key={index}
                path={element.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
