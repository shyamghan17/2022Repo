arr1 = [
    { id: 2, name: "TMA" },
    { id: 3, name: "Hibbernate" },
  ];
  
  arr2 = [
    { id: 1, name: "FB.DE" },
    { id: 2, name: "TMA" },
    { id: 3, name: "Hibbernate" },
    { id: 4, name: "Event.it A" },
    { id: 5, name: "Projket 2" },
    { id: 6, name: "Projekt 1" },
  ];
  
  const data = arr1.map(({ id }) => id);
  const result = arr2.filter(({ id }) => !data.includes(id));
  
  console.log(result);
  