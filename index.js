const formatDate = (timeInSeconds) => {
    
        var hours   = Math.floor(timeInSeconds / 3600);
        var minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
        var seconds = timeInSeconds - (hours * 3600) - (minutes * 60);
      
        // round seconds
        seconds = Math.round(seconds * 100) / 100
      
         

        if (timeInSeconds > 0 && timeInSeconds <= 59) {
        return `${timeInSeconds}s`};
    
        if (timeInSeconds === 0 || timeInSeconds === undefined) {
          return `0s`;};
    
        if (timeInSeconds > 59 && timeInSeconds <= 3599 && seconds != 0) {
          return `${minutes}m ` + `${seconds}s`};

        if (timeInSeconds > 59 && timeInSeconds <= 3599 && seconds === 0) {
          return `${minutes}m`};
    
        if (timeInSeconds > 3599 && seconds != 0 && minutes != 0) {
          return `${hours}h ` + `${minutes}m ` + `${seconds}s`}

        if (timeInSeconds > 3599 && seconds === 0 && minutes === 0) {
          return `${hours}h`}
        
        if (timeInSeconds > 3599 && seconds === 0) {
          return `${hours}h ` + `${minutes}m`}
        
        if (timeInSeconds > 3599 && minutes === 0) {
          return `${hours}h ` + `${seconds}s`}
      

  }
  
  module.exports = formatDate;
  
