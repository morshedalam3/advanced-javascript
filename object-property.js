const student = [
    {name: "Omer sunny", id: 33},
    {name: 'manna', id: 44},
    {name: 'kanchon', id: 55}
];
const nam = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 44);
const leader = student.find(s => s.id > 33);
console.log(leader);