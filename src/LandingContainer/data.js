import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.png'

import lost1 from '../assets/lost1.jpg'
import lost2 from '../assets/lost2.jpg'
import lost3 from '../assets/lost3.jpg'
import lost4 from '../assets/lost4.jpg'

import profile01 from '../assets/profile01.jpg'
import profile02 from '../assets/profile02.jpg'
import profile03 from '../assets/profile03.jpg'
import profile04 from '../assets/profile04.jpg'
import profile05 from '../assets/profile05.jpg'

export const announcementData = [
    { id: 1, title: "Dog in Ukraine", reportedBy:'Edrie Isaac Cruz', date: '2022-04-21', img:news1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat eleifend ipsum a porttitor. Praesent tempus, urna quis luctus varius, lorem urna mollis mi, id suscipit dolor odio a ligula. Suspendisse ut luctus sem. Nullam sit amet volutpat lectus. Maecenas non enim in tellus luctus ultrices pellentesque in orci. Sed ac sagittis eros, ut faucibus velit. Vivamus ullamcorper arcu in augue maximus, sed imperdiet leo scelerisque. Nulla quis ultrices nisl, ac mattis risus. Aliquam facilisis tortor non leo vehicula maximus. Quisque quis nisl ex..'},
    { id: 2, title: "Upcoming Vaccination", reportedBy:'Edrie Isaac Cruz', date: '2022-03-09', img:news2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat eleifend ipsum a porttitor. Praesent tempus, urna quis luctus varius, lorem urna mollis mi, id suscipit dolor odio a ligula. Suspendisse ut luctus sem. Nullam sit amet volutpat lectus. Maecenas non enim in tellus luctus ultrices pellentesque in orci. Sed ac sagittis eros, ut faucibus velit. Vivamus ullamcorper arcu in augue maximus, sed imperdiet leo scelerisque. Nulla quis ultrices nisl, ac mattis risus. Aliquam facilisis tortor non leo vehicula maximus. Quisque quis nisl ex..'},
    { id: 3, title: "Pet Gadgets",reportedBy:'Edrie Isaac Cruz',  date: '2022-02-01', img:news3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat eleifend ipsum a porttitor. Praesent tempus, urna quis luctus varius, lorem urna mollis mi, id suscipit dolor odio a ligula. Suspendisse ut luctus sem. Nullam sit amet volutpat lectus. Maecenas non enim in tellus luctus ultrices pellentesque in orci. Sed ac sagittis eros, ut faucibus velit. Vivamus ullamcorper arcu in augue maximus, sed imperdiet leo scelerisque. Nulla quis ultrices nisl, ac mattis risus. Aliquam facilisis tortor non leo vehicula maximus. Quisque quis nisl ex..'},
    { id: 4, title: "Dog", reportedBy:'Edrie Isaac Cruz', date: '2022-01-12', img:news1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat eleifend ipsum a porttitor. Praesent tempus, urna quis luctus varius, lorem urna mollis mi, id suscipit dolor odio a ligula. Suspendisse ut luctus sem. Nullam sit amet volutpat lectus. Maecenas non enim in tellus luctus ultrices pellentesque in orci. Sed ac sagittis eros, ut faucibus velit. Vivamus ullamcorper arcu in augue maximus, sed imperdiet leo scelerisque. Nulla quis ultrices nisl, ac mattis risus. Aliquam facilisis tortor non leo vehicula maximus. Quisque quis nisl ex..'},
    { id: 5, title: "Dog", reportedBy:'Edrie Isaac Cruz', date: '2022-01-12', img:news1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat eleifend ipsum a porttitor. Praesent tempus, urna quis luctus varius, lorem urna mollis mi, id suscipit dolor odio a ligula. Suspendisse ut luctus sem. Nullam sit amet volutpat lectus. Maecenas non enim in tellus luctus ultrices pellentesque in orci. Sed ac sagittis eros, ut faucibus velit. Vivamus ullamcorper arcu in augue maximus, sed imperdiet leo scelerisque. Nulla quis ultrices nisl, ac mattis risus. Aliquam facilisis tortor non leo vehicula maximus. Quisque quis nisl ex..'},
  ];

export const lostfoundData = [
    { id: 1, approved:false ,petType:'Dog', owner: 'Edrie Cruz', status:'lost', email: 'edriecruz@gmail.com', address:'Marikina City', gender: 'Male', lastSeen: 'Antipolo' ,name: "Blacky", lost: '2022-04-21', img:lost1, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
    { id: 2, approved:true ,petType:'Dog', owner: 'N/A', status:'lost', email: 'juswa@gmail.com', address:'Marikina City', gender: 'Male', lastSeen: 'Antipolo' ,name: "Bullsbal", lost: '2022-03-09', img:lost2, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
    { id: 3, approved:true ,petType:'Dog', owner: 'Cad Mateo', status:'lost', email: 'cad@gmail.com', address:'Mandaluyong City', gender: 'Male', lastSeen: 'Antipolo' ,name: "Brownie", lost: '2022-02-01', img:lost3, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
    { id: 4, approved:true ,petType:'Dog', owner: 'Enrico Ramos', status:'found', email: 'enwicowamos@gmail.com', address:'Quezon City', gender: 'Male', lastSeen: 'Antipolo' ,name: "Bullydog", lost: '2022-01-12', img:lost4, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
    { id: 5, approved:false ,petType:'Dog', owner: 'N/A', status:'found', email: 'congressman@gmail.com', address:'Cainta, Rizal', gender: 'Male', lastSeen: 'Antipolo' ,name: "Chuck", lost: '2022-01-12', img:lost4, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
  ];

export const vaccinated = [
    {
      name: 'Jan',
      Vaccinated_Dogs: 10,
      Vaccinated_Cats: 5,
    },
    {
      name: 'Feb',
      Vaccinated_Dogs: 20,
      Vaccinated_Cats: 35,
    },
    {
      name: 'Mar',
      Vaccinated_Dogs: 28,
      Vaccinated_Cats: 9,
    },
    {
      name: 'Apr',
      Vaccinated_Dogs: 10,
      Vaccinated_Cats: 25,
    },
    {
      name: 'May',
      Vaccinated_Dogs: 21,
      Vaccinated_Cats: 23,
    },
    {
      name: 'Jun',
      Vaccinated_Dogs: 15,
      Vaccinated_Cats: 21,
    },
   
  ];

export const vaccinated2 = [
    {
        name: 'Jul',
        Vaccinated_Dogs: 13,
        Vaccinated_Cats: 11,
      },
      {
          name: 'Aug',
          Vaccinated_Dogs: 35,
          Vaccinated_Cats: 41,
      },
      {
          name: 'Sep',
          Vaccinated_Dogs: 25,
          Vaccinated_Cats: 12,
      },
      {
          name: 'Oct',
          Vaccinated_Dogs: 51,
          Vaccinated_Cats: 42,
      },
      {
          name: 'Nov',
          Vaccinated_Dogs: 30,
          Vaccinated_Cats: 10,
      },
      {
          name: 'Dec',
          Vaccinated_Dogs: 10,
          Vaccinated_Cats: 20,
      },
  ]


  export const animalDetails = [
    // {id: 1, img:profile01, name: 'Bulldog', breed: 'Unknown', age:1, birthdate: '1976-04-19T12:59-0500', hasVaccinated: 'yes', petType:'dog', details: 'Always angry', gender: 'male', owner:'N/A', address:'N/A', contact:'N/A'},
    // {id: 2, img:profile02, name: 'Chuchu', breed: 'Chihuahua', age:2, birthdate: '12-23-2020', hasVaccinated: 'no', petType:'dog', details: 'Small Dog', gender: 'female', owner:'Alwhin Mateo', address:'Tondo, Manila', contact:'09123456789'},
    // {id: 3, img:profile03, name: 'Chi', breed: 'Husky', age:2, birthdate: '11-22-2019', hasVaccinated: 'yes', petType:'dog', details: 'White with Scars in Neck', gender: 'female', owner:'Ico Ramos', address:'Commonwealth, Quezon City', contact:'09123456789'},
    // {id: 4, img:profile04, name: 'Chaozi', breed: 'Unknown', age:2, birthdate: '02-29-2020', hasVaccinated: 'yes', petType:'dog', details: 'Long Ear', gender: 'male', owner:'Jinggay Ramos', address:'Sm Fairview, Quezon City', contact:'09123456789'},
    // {id: 5, img:profile05, name: 'Dal', breed: 'Dalmatian', age:2, birthdate: '03-26-2020', hasVaccinated: 'yes', petType:'dog', details: 'Has 101 dots in body', gender: 'male', owner:'Isaac Ramos', address:'Taytay, Rizal', contact:'09123456789'},

  ]