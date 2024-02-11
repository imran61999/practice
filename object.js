const student = {
    name: "imran" ,
    id: 374 ,
    address: "pomra",
    friends: ["noyon", "abdollah", "rakib", "sagor"],
    car: [{brand: "tata", height: 100, shop: "bonani"},{taka: 40000 , use: "9 month"}],
    habit: function(){
        console.log("My habit is cooking");
    },
    book: {
        name: "social science",
        mark: 100 ,
        creadit: 4 
        // information:{
        //     exam: 5,
        //     time: "3 hour",
        //     duration: 3
        // }
    }
}

console.log(student.habit());