
export default {
    
    dueDate : (postDate, endDate) => {
        let newEndDate = parseInt(endDate) * 24*60*60*1000;
        if (!postDate) { //  check if our input is valid
            return console.log(`enter valid date`);
        }

        let newPostDate = new Date(postDate).getTime() + newEndDate; // returns end of bid date.
        return newPostDate;
    },

    timeConverter : (timeRemaining) => {

        if (timeRemaining >= 0) {

            let days, hours, minutes, seconds;

            days = parseInt(timeRemaining / 86400)
            timeRemaining = (timeRemaining % 86400)

            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);

            seconds = parseInt(timeRemaining);

            let showTime = {
                days : parseInt(days, 10),
                hours : ('0'+hours).slice(-2),
                minutes : ('0' + minutes).slice(-2),
                seconds : ('0' + seconds).slice(-2)
            }

            return showTime;

        }
    },

    countDown : (postDate, endDate) => {
                
        let startDate = new Date();
        startDate = startDate.getTime();

        let userPostDate = this.dueDate(postDate, endDate) // calling function dueDate

        let timeRemaining = parseInt(( userPostDate - startDate ) / 1000);
        console.log(timeRemaining);

       return this.timeConverter(timeRemaining); // calling timeConverter function 

        //stopTimer(timeRemaining); // stopping timer
    
    },

    startTimer : (postDate,endDate) => {
        postDate = this.state.jobs.date;
        endDate = this.state.auctionDays;
        this.intervalId = setInterval(() => Timer.countDown(postDate,endDate), 1000);
        let showTime = Timer.timerCountDown.countDown(postDate,endDate)
        console.log(showTime)
        //this.setState({

       // })
        //timerRunning = true;
    }

}