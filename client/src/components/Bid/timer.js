
// export default {

//     intervalId : '',
//     clockRunning : false,

//     countDown : function (postDate, endDate) {

//         let startDate = new Date();
//         startDate = startDate.getTime();

//         let userPostDate = dueDate(postDate, endDate) // calling function dueDate

//         let timeRemaining = parseInt((userPostDate - startDate) / 1000);
//         console.log(timeRemaining);

//         timeConverter(timeRemaining); // calling timeConverter function 

//         stopTimer(timeRemaining); // stopping timer

//         dueDate : function (postDate, endDate) {
//             let newEndDate = parseInt(endDate) * 24 * 60 * 60 * 1000;
//             if (!postDate) { //  check if our input is valid
//                 return console.log(`enter valid date`);
//             }

//             let newPostDate = new Date(postDate).getTime() + newEndDate; // returns end of bid date.
//             return newPostDate;
//         }

//         timeConverter = (timeRemaining) => {

//             if (timeRemaining >= 0) {

//                 let days, hours, minutes, seconds;

//                 days = parseInt(timeRemaining / 86400)
//                 timeRemaining = (timeRemaining % 86400)

//                 hours = parseInt(timeRemaining / 3600);
//                 timeRemaining = (timeRemaining % 3600);

//                 minutes = parseInt(timeRemaining / 60);
//                 timeRemaining = (timeRemaining % 60);

//                 seconds = parseInt(timeRemaining);

//                 let showTime = {
//                     days: parseInt(days, 10),
//                     hours: ('0' + hours).slice(-2),
//                     minutes: ('0' + minutes).slice(-2),
//                     seconds: ('0' + seconds).slice(-2)
//                 }

//                 return console.log(showTime);

//             }
//         },

//         stopTimer: function  (timeRemaining) {
//             if (timeRemaining === 0) {
//                 clearInterval(intervalId);
//                 timeRunning = false;
//                 console.log('Time has run out');
//             }
//         },

//         startTimer = (timerRunning, intervalId) => {
//             intervalId = setInterval(() => countDown(postDate, endDate), 1000);
//             timerRunning = true;
//         }

//     }
// }


export default {

    intervalId : '',
    clockRunning : false,

    startTimer: function () {

        if(!this.clockRunning) {
            this.intervalId = setInterval(this.counter, 1000);
            this.clockRunning =true;
        }

    },

    stopTimer:function (intervalId) {

        clearInterval(this.intervalId);
        this.clockRunning = false;

    },

    getTimePeriod:function(postDate, endDate) {

        let startDate = new Date().getTime();
        endDate = parseInt(endDate)*24*60*60*1000;
        //console.log(postDate);
        //console.log(endDate);
        if (!postDate) {
            console.log('Enter valid date');
        } 

        let newPostDate = new Date(postDate).getTime() + endDate;

        let timeRemaining = (newPostDate - parseInt(startDate))/1000;

      //  if (timeRemaining < 0) {

      //      console.log('Bid has expired');
      //  } else {

            return timeRemaining;
      //  }
        
    },

    counter: function(postDate, endDate) {

        let timeCount = this.getTimePeriod(postDate, endDate);

        
        let convertedTime = this.timeConverter(timeCount)


        return convertedTime;
    },

    timeConverter: function(timeRemaining) {

        if (timeRemaining >= 0) {


            let days = parseInt(timeRemaining / 86400)
            timeRemaining = (timeRemaining % 86400)

            let hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            let minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);

            let seconds = parseInt(timeRemaining);

            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            if (minutes === 0) {
                minutes = '00';
            } else if (minutes < 10) {
                minutes = '0' + minutes;
            }

            if (hours < 10) {
                hours = '0' + hours;
            }

            let timeString = `${days} days ${hours}hrs : ${minutes}mins : ${seconds}secs`;

           // console.log( timeString);

            //let timerArray = [days, hours, minutes, seconds]
            //console.log(timerArray)
            
            return timeString;
        }   
            
    }


}