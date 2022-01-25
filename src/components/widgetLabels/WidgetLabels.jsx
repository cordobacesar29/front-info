import React from "react";
import "./widgetlabels.css";
import { Tag } from "@dexma/ui-components";
import { Dots } from "@dexma/ui-components";

export const WidgetLabels = ({ item }) => {
  const toasts = [
    "prueba",
    "prueba",
    "prueba",
    "prueba",
    "esta es cinco",
    "prueba",
    "prueba",
    "prueba",
    "prueba",
    "prueba",
  ];
  const labels = toasts
    .slice(0, 5)
    .map((toast) => (
      <Tag
        style={{
          color: "#404145",
          backGroundColor: "#F7F9FA",
          marginLeft: "2px",
        }}
      >
        {toast}
      </Tag>
    ));

  return (
    <div className=".widget-label-container">
      <div className="widget-top">
        {labels}
        <div className="widget-dots">
          <Dots steps={3} size={2} />
        </div>
      </div>
      <div className="widget-top">
        <span>{item.string}</span>
      </div>
    </div>
  );
};
