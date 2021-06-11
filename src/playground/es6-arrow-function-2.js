// const add = function (a,b){
//     console.log(arguments);
//     return a+b;
// }

// console.log(add(33,22,22,44,555))

// const add = (a,b)=> {
//     console.log(arguments);
//     return a+b;
// }

// console.log(add(33,22,22,44,555))


// const user = {
//     name: 'gagana',
//     cities: ['matara','galla','clmba'],
//     printPlacesLived : function (){
//         console.log(this.name);
//         console.log(this.cities);

//         const that = this;

//         // this.cities.forEach(function (city){
//         //     console.log(that.name + ' '+ 'has lived in' + city)
//         this.cities.forEach((city) =>{
//             console.log(this.name + ' '+ 'has lived in' + city)//mehema dammama this danna pluwan
//             //object scope ekata bound wenawa
//         })
//     }
// };

// const user = {
//     name: 'gagana',
//     cities: ['matara','galla','clmba'],
//     printPlacesLived : () => {//meka aithi wenne global scope ekata, meka user scope ekata nwei bound weela tynnee
//         console.log(this.name);
//         console.log(this.cities);

//         const that = this;

//         // this.cities.forEach(function (city){
//         //     console.log(that.name + ' '+ 'has lived in' + city)
//         this.cities.forEach((city) =>{
//             console.log(this.name + ' '+ 'has lived in' + city)//mehema dammama this danna pluwan
//             //object scope ekata bound wenawa
//         })
//     }
// };

// const user = {
//     name: 'gagana',
//     cities: ['matara','galla','clmba'],
//     printPlacesLived() {//object eka athule function ekak widiyata danna pluwan
//         console.log(this.name);
//         console.log(this.cities);

//         const that = this;

//         // this.cities.forEach(function (city){
//         //     console.log(that.name + ' '+ 'has lived in' + city)
//         this.cities.forEach((city) =>{
//             console.log(this.name + ' '+ 'has lived in' + city)//mehema dammama this danna pluwan
//             //object scope ekata bound wenawa
//         })
//     }
// };

//map
const user = {
    name: 'gagana',
    cities: ['matara','galla','clmba'],
    printPlacesLived() {//mehema dammamath function kiyala dammama wagema thama wada karannee
        
        // const cityMessages = this.cities.map((city) =>{//me map eka call kirimen map wena eliment array eka cityMessages kiyana variabke ekata wadinawa
        //    //methana arrow function ekak dala tyna nisa this eka access karannath pluwan
        //     return this.name + ' has lived in ' + city + ' !';
        // })
        // return cityMessages;

        ////////////////////////OR////////////////////////////////
        // return this.cities.map((city) =>{
        //      return this.name + ' has lived in ' + city + ' !'; //arrow function eke return eka placeLived() ekenreturn karanawa
        //  })

         ////////////////////////OR//////////////////////////////// 
        return this.cities.map((city) => this.name + ' has lived in ' + city + ' !');
    }
};


const multiplier = {
    numbers: [2,3,4,5],
    multiplyBy: 3,
    multiplySet() {
        return this.numbers.map((number) => number*this.multiplyBy );
    }
}

console.log(user.printPlacesLived()); 

console.log(multiplier.multiplySet()); 
