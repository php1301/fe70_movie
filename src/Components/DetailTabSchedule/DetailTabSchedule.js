import React from "react";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import styles from "../../assets/styles/DetailTab/DetailTabSchedule.module.css";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
export default function DetailTabSchedule() {
  const { movieSchedule } = useSelector(
    (rootReducer) => rootReducer.quanLyRapReducer
  );
  return (
    // <Tabs tabPosition="left" className={`${styles.schedule_tab}`}>
    //   {movieSchedule.heThongRapChieu?.map((rap, index) => {
    //     return (
    //       <TabPane
    //         tab={
    //           <div>
    //             <img
    //               src={rap.logo}
    //               alt="..."
    //               width={50}
    //               height={50}
    //               className="mr-3"
    //             />
    //             {rap.tenHeThongRap}
    //           </div>
    //         }
    //         key={index}
    //       >
    //         {rap.cumRapChieu?.map((cumRap, index) => {
    //           return (
    //             <div key={index} className={`${styles.tab_content} mb-5`}>
    //               <div className="row">
    //                 <img src={rap.logo} alt="..." width={50} height={50} />
    //                 <div className={`${styles.tab_content_info} ml-2`}>
    //                   <h2 className="p-0 m-0">{cumRap.tenCumRap}</h2>
    //                   <p className="p-0 m-0">{cumRap.tenCumRap}</p>
    //                 </div>
    //               </div>
    //               <div className={`${styles.tab_content_time} row mt-3`}>
    //                 {cumRap.lichChieuPhim?.slice(0, 12).map((lich, index) => {
    //                   return (
    //                     <NavLink className="col-1 p-2 m-2 text-center" to="/" key={index}>
    //                       {moment(lich.ngayChieuGioChieu).format("hh:mm A")}
    //                     </NavLink>
    //                   );
    //                 })}
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </TabPane>

    //     );
    //   })}
    // </Tabs>
    <div>
      {movieSchedule.heThongRapChieu?.map((rap, index) => {
        return <div className="w-100 mb-5" key={index}>
          <div className={`${styles.schedule_rap}`}>
            <h2 className="m-0">{rap.tenHeThongRap}</h2>
          </div>
          <div className={`${styles.schedule_time}`}>
            {rap.cumRapChieu?.map((cumRap, index) => {
              return (
                <div key={index} className={`${styles.tab_content} mt-5 mb-5`}>
                  <div className="row">
                    <img src={rap.logo} alt="..." width={50} height={50} />
                    <div className={`${styles.tab_content_info} ml-2`}>
                      <h2 className="p-0 m-0">{cumRap.tenCumRap}</h2>
                      <p className="p-0 m-0">{cumRap.tenCumRap}</p>
                    </div>
                  </div>
                  <div className={`${styles.tab_content_time} row mt-3`}>
                    {cumRap.lichChieuPhim?.slice(0, 12).map((lich, index) => {
                      return (
                        <NavLink
                          className="col-1 p-2 m-2 text-center"
                          to="/"
                          key={index}
                        >
                          {moment(lich.ngayChieuGioChieu).format("hh:mm A")}
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>;
      })}
    </div>
  );
}
