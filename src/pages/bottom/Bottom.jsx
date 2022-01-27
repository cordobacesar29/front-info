import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import { DotTable } from "../../components/shared/dotTable/DotTable";
import { Dots } from '@dexma/ui-components'
import { colorScale, sortInfo, headersData, sortHeaders } from "../../utils/";
import "./bottom.css";
import "./headersWidths.css";
import { dummyData } from '../../utils/dummyData'


export const Bottom = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState();
  const [incidentsArray] = useState([
    "Comunicacion",
    "Pasarela_Clima",
    "Alumbrado",
    "Clima",
    "Banderola",
    "Rotulos",
    "Consumo_Clima",
    "Confort",
  ]);
  const [headers] = useState([
    "Total-Incidencias",
    "Total Stores",
    "%-Incidencias",
  ]);
  const [dataSort, setDataSort] = useState(dummyData);


  // useEffect(() => {
  //   api.getDataTable().then((res) => setData(res.table));
  // }, []);
  // useEffect(() => {
  //   data?.length !== 0 && setNewData(sortInfo(incidentsArray, data));
  // }, [data, incidentsArray]);

  // useEffect(() => {
  //   data?.length !== 0 && setDataSort(dummyData);
  // }, [dataSort]);

  return (
    <div className="bottom">
      <div className="top-bottom">
        <div className="headers-top">
          <span className="span-estado-store">Estados por store</span>
          <span>...</span>
        </div>
        <div className="headers-super-container">
          <div className="headers-container0">
            {/* <div style={{ width: "15px" }}></div> ` */}
            <div className="headers">
              {headersData.slice(0, 3).map((item) => (
                <span
                  onClick={(e) => console.log(sortHeaders(e, dataSort))}
                  className={
                    item === "ID"
                      ? "headers-widths-id"
                      : "headers-widths-ciudad"
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="headers-container1">
            <div style={{ width: "10px" }}></div>
            <div className="headers">
              {headersData.slice(3, 11).map((item) => (
                <span
                  onClick={(e) => setDataSort(sortHeaders(e, dataSort))}
                  className="headers-widths-dots">{item}</span>
              ))}
            </div>
          </div>
          <div style={{ width: "10px" }}></div>
          <div className="headers-container2">
            <div className="headers">
              {headersData.slice(11, 15).map((item) => (
                <span
                  onClick={(e) => setDataSort(sortHeaders(e, dataSort))}

                  className="headers-widths-impacto">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table className="table-container-table">

          {dataSort.map((item, i) => (
            <tr key={1} className="table-row" >
              <td key={2} className="table-space"> </td>
              <td key={3} className="table-data-index">{item.ID}</td>
              <td key={4} className="table-data">{item.Ciudad}</td>
              <td key={5} className="table-data">{item.Tipologia}</td>
              <td key={6} className="table-data">
                {item.Comunicacion?.length !== 0 ? (
                  <DotTable className={item.Pasarela_Clima ? "green" : "red"} />
                ) : (
                  "-"
                )}
              </td>
              <td key={7} className="table-data">
                {item.Pasarela_Clima?.length !== 0 ? (
                  <DotTable className={item.Pasarela_Clima ? "green" : "red"} />
                ) : (
                  "-"
                )}
              </td>
              <td key={8} className="table-data">
                {item.Alumbrado?.length !== 0 ? (
                  <DotTable className={item.Alumbrado ? "green" : "red"} />
                ) : (
                  "-"
                )}
              </td>
              <td key={9} className="table-data">
                {item.Clima?.length !== 0 ? (
                  <DotTable className={item.Clima ? "green" : "red"} />
                ) : (
                  "-"
                )}
              </td>
              <td key={10} className="table-data">
                {item.Banderola?.length !== 0 ? (
                  <DotTable className={item.Banderola ? "green" : "red"} />
                ) : (
                  "-"
                )}
              </td>
              <td key={11} className="table-data">
                {item.Rotulo?.length !== 0 ? (
                  <DotTable className={item.Rotulo ? "green" : "red"} />
                ) : (
                  "-"
                )}
              </td>
              <td key={12} className="table-data">
                {item.Consumo_Clima?.length !== 0 ? (
                  <DotTable className={item.Consumo_Clima ? "green" : "red"} />
                ) : (
                  "-"
                )}
              </td>
              <td key={13} className="table-data">
                {item.Confort?.length !== 0 ? (
                  <DotTable className={item.Confort ? "green" : "red"} />
                ) : (
                  "-"
                )}
              </td>
              <td key={14} className="table-space-middle"> </td>
              <td className="table-data">
                {item.Anomalías?.length !== 0 ? item.Anomalías : "-"}
              </td>
              <td key={15} className="table-data">
                {item.Impacto_Anomalías?.length !== 0
                  ? item.Impacto_Anomalías
                  : "-"}
              </td>
              <td
                key={16}
                className="table-data"
                style={{
                  backgroundColor: colorScale(item.Detected_Score),
                }}
              >
                {item.Detected_Score?.length !== 0 ? item.Detected_Score : "-"}
              </td>
              <td key={17} className="table-data">
                {item.Ahorro_Potencial?.length !== 0
                  ? item.Ahorro_Potencial
                  : "-"}
              </td>
            </tr>
          ))}
        </table>


      </div>
      <div className="table-bottom-container">
        <table className="table-bottom-style">
          <tr className="table-bottom-row">
            <td className="table-bottom-space"> </td>
            <td className="table-bottom-data-index">Total Incidencias</td>
            <td className="table-bottom-data">
              {newData?.Comunicacion?.false}
            </td>
            <td className="table-bottom-data">
              {newData?.Pasarela_Clima?.false}
            </td>
            <td className="table-bottom-data">{newData?.Alumbrado?.false}</td>
            <td className="table-bottom-data">{newData?.Clima?.false}</td>
            <td className="table-bottom-data">{newData?.Banderola?.false}</td>
            <td className="table-bottom-data">{newData?.Rotulos?.false}</td>
            <td className="table-bottom-data">
              {newData?.Consumo_Clima?.false}
            </td>
            <td className="table-bottom-data">{newData?.Confort?.false}</td>
            <td className="table-bottom-data-space"> </td>
            <td className="table-bottom-data-space-big"> </td>
          </tr>
          <tr className="table-bottom-row">
            <td className="table-bottom-space"> </td>
            <td className="table-bottom-data-index">Total Stores</td>
            <td className="table-bottom-data">{newData?.Comunicacion?.true}</td>
            <td className="table-bottom-data">
              {newData?.Pasarela_Clima?.true}
            </td>
            <td className="table-bottom-data">{newData?.Alumbrado?.true}</td>
            <td className="table-bottom-data">{newData?.Clima?.true}</td>
            <td className="table-bottom-data">{newData?.Banderola?.true}</td>
            <td className="table-bottom-data">{newData?.Rotulos?.true}</td>
            <td className="table-bottom-data">
              {newData?.Consumo_Clima?.true}
            </td>
            <td className="table-bottom-data">{newData?.Confort?.true}</td>
            <td className="table-bottom-data-space"> </td>
            <td className="table-bottom-data-space-big"> </td>
          </tr>
          <tr className="table-bottom-row">
            <td className="table-bottom-space"> </td>
            <td className="table-bottom-data-index">% Incidencias</td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Comunicacion?.percent})`,
              }}
            >
              {newData?.Comunicacion?.percent}%
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Pasarela_Clima?.percent})`,
              }}
            >
              {newData?.Pasarela_Clima?.percent}%
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Alumbrado?.percent})`,
              }}
            >
              {newData?.Alumbrado?.percent}%
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Clima?.percent})`,
              }}
            >
              {newData?.Clima?.percent}%
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Banderola?.percent})`,
              }}
            >
              {newData?.Banderola?.percent}%
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Rotulos?.percent})`,
              }}
            >
              {newData?.Rotulos?.percent}%
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Consumo_Clima?.percent})`,
              }}
            >
              {newData?.Consumo_Clima?.percent}%
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Confort?.percent})`,
              }}
            >
              {newData?.Confort?.percent}%
            </td>
            <td className="table-bottom-data-space"> </td>
            <td className="table-bottom-data-space-big"> </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
