import React from "react";
import { Widget } from "../../components/widget/Widget";
import { WidgetLabels } from "../../components/widgetLabels/WidgetLabels";
import { widgetData } from "../../utils/widgetData";
import "./top.css";
export const Top = () => {
  // const [locations, setLocations] = useState("");
  // const [loading, setloading] = useState(true);
  // const [storesComunication, setStoresComunication] = useState(0);
  // const [storeIncidents, setStoreIncidents] = useState(0);
  // const [storesWithoutIncidents, setStoresWithoutIncidents] = useState(0);

  return (
    <div className="top">
      {widgetData.map((item) => {
        return (
          <Widget>
            {item.toast ? (
              <WidgetLabels item={item}/>
            ) : (
              <>
                <div className="widget-right">{item.icon && item.icon}</div>
                <div className="widget-left">
                  <span className="widget-number">{item.number}</span>
                  <span className="widget-label">{item.string}</span>
                </div>
              </>
            )}
          </Widget>
        );
      })}
    </div>
  );
};
