const rate = [
  {
    num: 95,
    text: 'Pass Rate'  
  },
  {
    num: 100,
    text: 'Referral rate'  
  },
  {
    num: 0,
    text: 'Accident rate'  
  }
];

const instructor = [
  {
    name: "Mike Hart",
    img: "/instructor-mikehart.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laborum.."
  },
  {
    name: "Jhon Smith",
    img: "/instructor-johnsmith.jpg",
    text:"adipisicing elit. laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laborum."
  },
  {
    name: "Angela Hart",
    img: "/instructor-angelahart.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laborum."
  }
];

const combinedData = rate.map((rateItem, index) => ({
  rate: rateItem,
  instructor: instructor[index]
}));


export {combinedData};