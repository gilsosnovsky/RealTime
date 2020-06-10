import React from "react";
import "./EmployeeJobOffers.css";
import SingleJobItem from "./SingleJobItem";

class EmployeeJobOffers extends React.Component {

  state = {
    jobs_list: [
      {
        type: 'מלצר',
        hours: "08:00 - 17:00",
        date: "28.07.2020",
        place: "אולם אירועים  מלון יהודה, ירושלים",
        salary: "420",
        long_info: "מידע ארוך על משרת המלצר",
        logo: "https://grupohonor.com.br/wp-content/uploads/2015/10/Logo-Default.png"
      },

      {
        type: 'טבח',
        hours: "08:30 - 16:00",
        date: "28.06.2020",
        place: "מלון דניאל, ים המלח",
        salary: "350",
        long_info: "מידע ארוך על משרת הטבח",
        logo: "https://images.globes.co.il/Images/NewGlobes/big_image/2014/aroma-575.2014731T130210.jpg"
      },

      {
        type: 'נהג',
        hours: "18:00 - 00:00",
        date: "03.07.2020",
        place: "תחנה מרכזית, ירושלים",
        salary: "500",
        long_info: "מידע ארוך על משרת הנהג",
        logo: "https://files.geektime.co.il/wp-content/uploads/2018/06/gett-1528377628.jpg"
      },
      
      {
        type: 'נהג',
        hours: "18:00 - 00:00",
        date: "03.07.2020",
        place: "תחנה מרכזית, ירושלים",
        salary: "500",
        long_info: "מידע ארוך על משרת הנהג",
        logo: "https://files.geektime.co.il/wp-content/uploads/2018/06/gett-1528377628.jpg"
      }
    ]
  }
  render() {
    return (
      <div id="jobs_employee">
        <div id="jobs_employee_title">
          משרות במיוחד עבורך
        </div>
        <ul>
          {
            this.state.jobs_list.map((job, index) => {
              return <SingleJobItem type={job.type}
                hours={job.hours}
                date={job.date}
                place={job.place}
                salary={job.salary}
                long_info={job.long_info}
                logo={job.logo}
                buttons_visibility="visible" />
            })
          }
        </ul>
      </div>
    );
  }
}
export default EmployeeJobOffers;