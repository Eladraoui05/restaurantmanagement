import Person1Img from './images/person1-img.jpg';
import Person2Img from './images/person2-img.jpg';
import Person3Img from './images/person3-img.jpg';
import Person4Img from './images/person4-img.jpg';

const reviews = [
    {
        id: 1,
        description: 'J\'ai adoré l\'expérience, le service était impeccable et l\'ambiance très chaleureuse. Je reviendrai avec plaisir !',
        img: [Person1Img],
        name: 'Ahmed Benali',
        initialMotion: '-300px'
    },
    {
        id: 2,
        description: 'Un endroit exceptionnel, la cuisine est délicieuse et l\'accueil est au top. Je recommande vivement !',
        img: [Person2Img],
        name: 'Sofia El Amrani',
        initialMotion: '350px'
    },
    {
        id: 3,
        description: 'L\'atmosphère est magique et la qualité des produits est irréprochable. Une expérience à ne pas manquer pour les amoureux de la gastronomie !',
        img: [Person3Img],
        name: 'Zineb Ouali',
        initialMotion: '-300px'
    },
    {
        id: 4,
        description: 'Excellente expérience culinaire, un endroit chaleureux et un service irréprochable. Je reviendrai sans hésiter !',
        img: [Person4Img],
        name: 'Youssef Rahmouni',
        initialMotion: '350px'
    }
];

export default reviews;
