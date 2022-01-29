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
  const [dataSort, setDataSort] = useState(dummyData);
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

  useEffect(() => {
    api.getDataTable().then((res) => setData(res.table));
  }, []);

  useEffect(() => {
    data?.length !== 0 && setNewData(sortInfo(incidentsArray, data));
  }, [data, incidentsArray]);

  return (
    <div className="bottom">
      <div className="top-bottom">
        <div className="headers-top">
          <span className="span-estado-store">Estados por store</span>
          <span className="dots-span">...</span>
        </div>
        <div className="headers-super-container">
          <div className="headers-container0">
            <div style={{ width: "50px" }}></div>
            <div className="headers">
              {headersData.slice(0, 3).map((item) => (
                <span
                  onClick={(e) => setDataSort(sortHeaders(e, dataSort))}
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
            {/* <div style={{ width: "10px" }}></div>  */}
            <div className="headers">
              {headersData.slice(3, 11).map((item) => (
                <span
                  onClick={(e) => setDataSort(sortHeaders(e, dataSort))}
                  className="headers-widths-dots">{item}</span>
              ))}
            </div>
          </div>
          {/* <div style={{ width: "10px" }}></div> */}
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

          {data.map((item, i) => (
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
            <td className="table-bottom-space"></td>
            <td className="table-bottom-data-index">Total Incidencias</td>
            <td className="table-bottom-data">
              {
                newData?.Comunicacion?.false !== null || undefined ? 
                  newData?.Comunicacion?.false
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Pasarela_Clima?.false !== null || undefined ?
                  newData?.Pasarela_Clima?.false
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Alumbrado?.false !== null || undefined ? 
                  newData?.Alumbrado?.false
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Clima?.false !== null || undefined ? 
                  newData?.Clima?.false
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Banderola?.false !== null || undefined ? 
                  newData?.Banderola?.false
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Rotulos?.false !== null || undefined ? 
                  newData?.Rotulos?.false
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Consumo_Clima?.false !== null || undefined ? 
                  newData?.Consumo_Clima?.false
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Confort?.false !== null || undefined ? 
                  newData?.Confort?.false
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data-space"> </td>
            <td className="table-bottom-data-space-big"> </td>
          </tr>
          <tr className="table-bottom-row">
            <td className="table-bottom-space"> </td>
            <td className="table-bottom-data-index">Total Stores</td>
            <td className="table-bottom-data">
            {
                newData?.Comunicacion?.true !== null || undefined ? 
                  newData?.Comunicacion?.true
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Pasarela_Clima?.true !== null || undefined ? 
                  newData?.Pasarela_Clima?.true
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Alumbrado?.true !== null || undefined ? 
                  newData?.Alumbrado?.true
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Clima?.true !== null || undefined ? 
                  newData?.Clima?.true
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Banderolas?.true !== null || undefined ? 
                  newData?.Banderolas?.true
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
            {
                newData?.Rotulos?.true !== null || undefined ? 
                  newData?.Rotulos?.true
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Consumo_Clima?.true !== null || undefined ? 
                  newData?.Consumo_Clima?.true
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data">
              {
                newData?.Confort?.true !== null || undefined ? 
                  newData?.Confort?.true
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
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
              {
                newData?.Comunicacion?.percent !== null || undefined ? 
                  `${newData?.Comunicacion?.percent}%`
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Pasarela_Clima?.percent})`,
              }}
            >
              {
                newData?.Pasarela_Clima?.percent !== null || undefined ? 
                  `${newData?.Pasarela_Clima?.percent}%`
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Alumbrado?.percent})`,
              }}
            >
              {
                newData?.Alumbrado?.percent !== null || undefined ? 
                  `${newData?.Alumbrado?.percent}%`
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Clima?.percent})`,
              }}
            >
              {
                newData?.Clima?.percent !== null || undefined ? 
                  `${newData?.Clima?.percent}%`
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Banderola?.percent})`,
              }}
            >
              {
                newData?.Banderola?.percent !== null || undefined ? 
                  `${newData?.Banderola?.percent}%`
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Rotulos?.percent})`,
              }}
            >
              {
                newData?.Rotulos?.percent !== null || undefined ? 
                  `${newData?.Rotulos?.percent}%`
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Consumo_Clima?.percent})`,
              }}
            >
              {
                newData?.Consumo_Clima?.percent !== null || undefined ? 
                  `${newData?.Consumo_Clima?.percent}%`
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td
              className="table-bottom-data"
              style={{
                backgroundColor: `rgba(255, 99, 71, ${newData?.Confort?.percent})`,
              }}
            >
              {
                newData?.Confort?.percent !== null || undefined ? 
                  `${newData?.Confort?.percent}%`
                :
                  <Dots steps={3} size={3}/>
              }
            </td>
            <td className="table-bottom-data-space"> </td>
            <td className="table-bottom-data-space-big"> </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
