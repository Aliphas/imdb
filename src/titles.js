import ScreamPoster from './images/screamPoster.jpg'
import ScreamImg from './images/titles/Scream/img1.jpg'
import ScreamImg2 from './images/titles/Scream/img2.jpg'
import ScreamImg3 from './images/titles/Scream/img3.jpg'
import ScreamImg4 from './images/titles/Scream/img4.jpg'

export default [
  {
    id: 0,
    name: 'Scream',
    year: 2022,
    MPAA: 'R',
    duration: '1h 54m',
    rating: 7.7,
    votes: '15k',
    popularity: 17,
    popularityChange: 39,
    posterImg: ScreamPoster,
    trailerImg: ScreamImg,
    trailerDuration: '1:11',
    videos: [
      {
        img: ScreamImg, 
        url: 'https://youtu.be/nRwLyKIBNU8',
        duration: '1:11',
        title: 'Watch the Final Trailer',
        descr: 'Twenty-five years after the original series of murders in Woodsboro, a new killer emerges, and Sidney Prescott must return to uncover the truth.'
      },
      {
        img: ScreamImg2, 
        url: 'https://youtu.be/nRwLyKIBNU8',
        duration: '1:11',
        title: 'Watch the Final Trailer',
        descr: 'Twenty-five years after the original series of murders in Woodsboro, a new killer emerges, and Sidney Prescott must return to uncover the truth.'
      },
    ],
    photos: [],
    genres: ['Horror', 'Mystery', 'Thriller'],
    directors: [
      {name: 'Matt Bettinelli-OlpinTyler', url: '#'},
      {name: 'Gillett', url: '#'}
    ],
    writers: [
      { name: 'James Vanderbilt', info: 'screenplay', url: '#' },
      { name: 'Guy Busick', info: 'screenplay', url: '#' },
      { name: 'Kevin Williamson', info: 'characters created by', url: '#' },
    ],
    stars: [
      { name: 'Neve Campbell', url: '#' },
      { name: 'Courteney Cox', url: '#' },
      { name: 'David Arquette', url: '#' },
    ],
    castUrl: '#',
    userReviewCount: '621',
    userReviewUrl: '#',
    criticReviewCount: '200',
    criticReviewUrl: '#',
    metascore: '61',
    metascoreUrl: '#'
  }
]