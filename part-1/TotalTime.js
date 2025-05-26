//  to calculate time total
function calculateTime (arrayTime){
   const totalSecond = arrayTime.reduce((time , sum)=> time + sum, 0);
   const hour = totalSecond / 3600 ;
   const mim = totalSecond / 60 ;
    console.log({ hour, mim});
   return {hour, mim}
    }
    
    const time = calculateTime([6, 67, 3, 89])
    // console.log(time);
