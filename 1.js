// push rare number in array

const array=[1,2,3,2,4,5,6,5,7,8,4];

const array2=[];


function chacke(array){

    for(const arr of array){
if(array2.includes(arr)===!true){

array2.push(arr);

}



    }
return array2;
}

const output=chacke(array);
console.log(output)
