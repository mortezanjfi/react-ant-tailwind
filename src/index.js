import React from "react";
import ReactDOM from "react-dom";
import frIR from "antd/lib/locale/fa_IR";
import { ConfigProvider } from "antd";

import "./assets/styles/index.css";

import AppRoutes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={frIR}>
      <AppRoutes />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
