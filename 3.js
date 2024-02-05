// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let heights3='';

function count(names){
let minL=names[0].length;

// console.log(maxL)
    for(const name of names){
const L=name.length;
if(L<minL){
    minL=L;
    heights3=name;
    
}
    }
    return heights3;

}
const ans=count(heights2);
console.log(ans);


