import React, { useState, useEffect } from "react";
import { Widget } from "../../components/widget/Widget";
import { WidgetLabels } from "../../components/widgetLabels/WidgetLabels";
import { Dot } from "../../components/shared";
import { Dots } from "@dexma/ui-components";
import { api } from "../../api/api";
import "./top.css";
export const Top = () => {
  const [locations, setLocations] = useState(0);
  const [storesComunication, setStoresComunication] = useState(0);
  const [storeIncidents, setStoreIncidents] = useState(0);
  const [storesWithoutIncidents, setStoresWithoutIncidents] = useState(0);

  useEffect(() => {
    api
      .getLocations()
      .then(({ total_locations }) => setLocations(total_locations))
  }, []);

  useEffect(() => {
    api.getDataTable().then((res) => {
      setStoresComunication(res.uncommunicated_stores);
      setStoreIncidents(res.incidents);
      setStoresWithoutIncidents(res.perc_stores_without_incidents);
    });
  }, []);

  return (
    <div className="top"> 
          <Widget>
            <div className="widget-left">
              {
                locations ? <span className="widget-number">{locations}</span>
                : 
                <Dots steps={3} size={6} />
              }
              <span className="widget-label">Localizaciones</span>
            </div>
          </Widget>
          <Widget> 
                  
              <WidgetLabels />            
          </Widget>
          <Widget>
            <div className="store-with-dot">
              {
                storesComunication ? 
                  <div className="top-label">
                    <Dot style={{ backgroundColor: "#F25A5A",width:"16px",height:"16px",borderRadius:"50%" }} />
                    <span className="widget-number">{storesComunication}</span>
                  </div> 
                : 
                  <Dots steps={3} size={6} />
                }
              <span className="widget-label">Store sin comunicación</span>
            </div>
          </Widget>
          <Widget>
          <div className="store-with-dot">
              {
                storeIncidents ? 
                  <div className="top-label">
                    <Dot style={{ backgroundColor: "#F25A5A",width:"16px",height:"16px",borderRadius:"50%" }} />
                    <span className="widget-number">{storeIncidents}</span>
                  </div> 
                : 
                  <Dots steps={3} size={6} />
                }
              <span className="widget-label">Incidencias</span>
            </div>
          </Widget>
          <Widget>
            <div className="widget-left">
              {storesWithoutIncidents ? 
              <span className="widget-number">{`% ${storesWithoutIncidents}`}</span>
              :
                <Dots steps={3} size={6} />
              }
              <span className="widget-label">Store con incidencias</span>
            </div>
          </Widget>
    </div>
  );
};