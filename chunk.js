 const chunkArray = (arr,len) => {
     // init chucked arr
     const chunkedArr = [];

     // Loop through arr
     arr.forEach(val => {
         // Get last element 
         const last = chunkArr[chunkedArr.length -1];

         // Check if last length is equal to the chunk len
         if(!last || last.length === len){
             chunkedArr.push([val]);
         } else {
             last.push(val)
         }
     })
     return chunkedArr
 }

 module.exports = chunkArray