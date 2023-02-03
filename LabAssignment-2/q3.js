let array = [1,2,3,5,6,5];
const arrayAverage =()=>{
    let sum = 0;
    let arrLength = array.length;
    for (let i=0; i<arrLength; i++)
        {
            sum = sum + array[i]
        }
        return sum/arrLength;
    }
       
    document.write( "Average of array numbers is  = " + arrayAverage(array))