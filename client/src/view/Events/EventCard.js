/**
 * @author @yiyinzhang
 * @description Create a new event and push it to eventbrite.
 */

 import React, { Fragment } from 'react';
 import { Card, Image} from 'semantic-ui-react';
 import moment from 'moment';
 import LinesEllipsis from 'react-lines-ellipsis';
 
 const EventCard = ({ event }) => {
   let { text } = event.description;
   if (text && text.length > 250) {
     text = `${text.substr(0, 250)}...`;
   }
   // const date = new Date();
   // const month = date.getMonth();
   // const monthString = date.toLocaleString('default', { month: 'long' });
   
   const timeDisplay = (time) => {
 
     //example: time = "2020-08-15T07:30:00"
     time = time.split("T");  // time = ["2020-08-15", "07:30:00"]
     let time0 = time[0].split("-"); // time0 = ["2020", "08", "15"];
     let monthString = time0[1].toLocaleString('default', { month: 'long' });
     let time1 = time[1].split(":"); // time1 = ["07", "30", "00"]
 
     let timeDate = monthString[1]+" "+time0[2]+","+time0[0];  //timeD="15/08/2020"
 
     let ampm = "AM";
     if(time1[0] >= 12 ){
       ampm = "PM";
       if(time1[0] > 12){
         time1[0] = time1[0] -12;
       }
     }
     let timeT = time1[0]+":"+time1[1]+" "+ampm;  //timeT="07:30 AM"
    
     return time = timeT;
   }
   const dateDisplay = (date) => {
 
     //example: date = "2020-08-15T07:30:00"
    //  date = date.split("T");  // date = ["2020-08-15", "07:30:00"]
    //  let date0 = date[0].split("-"); // date[0] = ["2020", "08", "15"];
    // let monthString = date0[1].toLocaleString('en-US', { month: 'long' });
    //  let timeDate = monthString+" "+date0[2]+", "+date0[0];  //timeD="15/08/2020"
    // let formattedDate = 
    //  console.log(moment(date).format("MMM Do YY"));
    return moment(date).format('LL');
    //  return date = timeDate;
   }
 
   return (
     <Fragment>
       <Card className="cardstyle" style={{  }}>
         {/* {event.logo ? <Image classname="image" src={event.logo.url} alt={event.name} /> : null} */}
         <Card.Content  >
         <div className="cardHeader">
           <p>{event.name.text}</p>
       </div>
       <br></br>
       <Card.Meta className="datetime">
           <span>{dateDisplay(event.start.local)}</span>
         </Card.Meta>
         <Card.Meta className="datetime">
           <span>{timeDisplay(event.start.local)}</span>
          -{' '}
           <span>{timeDisplay(event.end.local)}</span>
         </Card.Meta>     
         <br></br>
         <Card.Description className='event-desc' >
           <LinesEllipsis 
           text={event.description.text}
           ellipsis="..."
           maxLine={3}>
           </LinesEllipsis>
         <br></br>
         </Card.Description>
         <button className='eventButton'>
             <a href={event.url} className="eventButtontext">
              Event Details
             </a>
             </button>
         </Card.Content>
        
         </Card>
     </Fragment>
   )
 };
 
 
 
 
 
 
 export default EventCard;
 