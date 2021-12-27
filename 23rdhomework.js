const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
 
  // [32, 57, 22]
  // Task 1
  // Print the name list - As an array
  // Expected Output
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]

// console.log(scores.map(score => score.name))

  // Task 2
  // >=40 pass.. find those student that passed (Use array method)
  // Expected Output
  // [{
  //     marks: 57,
  //     name: "Lillian Ellis"
  //   },
  //     {
  //     marks: 91,
  //     name: "Debra Beard"
  //   },
  //   {
  //     marks: 75,
  //     name: "Nettie Hancock"
  //   }]
  


const pass = (scores.filter(score => score.marks >= 40));
console.log(pass);
const pn = pass.map(nm => nm.name);
console.log(pn);


  // Task 3
  //  Find all the names who failed the exams (Array methods)
  // Expected Output
  //   ["Yvette Merritt",
  //   "Mccall Carter",
  //   "Pate Collier",
  //   "Hatfield Hodge"
  // ];
  
  const failed = scores.filter(score => score.marks <40);
  console.log(failed);
  const failedname = failed.map(fname => fname.name);
  console.log(failedname);

  // console pets = ["cats", "dogs", "parrots", "fish"];

  // console.log(pets.map((pet.length)))

  
  
  // reduce method for array

  const nums = [80, 60, 20 ,100]

  console.log(nums.reduce((sum, curr)=> sum + curr, 0));


  //average mark of class.

  const marks1 = scores.map( mk => mk.marks);
  console.log(marks1);
  tm= marks1.reduce((tm, cur) => tm + cur, 0);
  console.log(tm);
  avr=  tm / 7;
  console.log(avr)


//   // find the topper name
const a1 = scores.map(mk4 => mk4.marks);
a2 = Math.max(... a1);
// const rankholder = scores
//   .filter(a1)
//   .map(a1);
console.log(a2);
  
//  a1 = scores.map(mk4 => mk4.marks);
// console.log(a1)
// const hmk = Math.max(...a1)
// console.log(hmk)