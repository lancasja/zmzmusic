import React, { Component } from 'react';
import CoverFlow from 'coverflow-react'; // https://www.npmjs.com/package/coverflow-react
import Header from './components/Header';
import VideosList from './components/VideosList';
import MailIcon from './images/mail-icon.svg';
import PhoneIcon from './images/phone-icon.svg';
import Logo from './images/logo.svg';
import './App.css';

// Album Art Images
import AA1 from './images/album-art/bob-mould-silver-age.jpg';
import AA2 from './images/album-art/dawn-oberg-rye.jpg';
import AA3 from './images/album-art/desertshore-arc-of-an-arrow-blind.jpg';
import AA4 from './images/album-art/dontae-winslow-winslow-dynasty-enter-the-dynasty.jpg';
import AA5 from './images/album-art/eddy-navia-and-chuchito-valdez-carnaval.jpg';
import AA6 from './images/album-art/forrest-day-familiar-company.jpg';
import AA7 from './images/album-art/forrest-day-self-titled.jpg';
import AA8 from './images/album-art/forrest-day-the-second.jpg';
import AA9 from './images/album-art/jesu-sun-kil-moon-30-seconds-to-the-decline-of-planet-earth.jpg';
import AA10 from './images/album-art/jimi-hendrix-winterland.jpg';
import AA11 from './images/album-art/john-degarmo-bluesville-hotel.jpg';
import AA12 from './images/album-art/juan-elias-lifes-happening.jpg';
import AA13 from './images/album-art/lost-dog-found-dine-on-danger.jpg';
import AA14 from './images/album-art/mark-kozelek.jpg';
import AA15 from './images/album-art/michael-ward-a-walk-in-the-park.jpg';
import AA16 from './images/album-art/michael-ward-weekends-on-the-wine-dark-sea.jpg';
import AA17 from './images/album-art/pamela-parker-evolutionary-process.jpg';
import AA18 from './images/album-art/scarlet-white-the-otherside.jpg';
import AA19 from './images/album-art/sick-pigeon.jpg';
import AA20 from './images/album-art/sun-kil-moon-benji.jpg';
import AA21 from './images/album-art/sun-kil-moon-common-as-light-and-love-are-red-valleys-of-blood.jpg';
import AA22 from './images/album-art/sun-kil-moon-the-album-leaf-perils-from-the-sea.jpg';
import AA23 from './images/album-art/train-california-37.jpg';
import AA24 from './images/album-art/train-save-me-san-francisco.jpg';
import AA25 from './images/album-art/walk-hard-soundtrack.jpg';
import AA26 from './images/album-art/dawn-oberg-bring.jpg';
import AA27 from './images/album-art/dawn-oberg-nothing-rhymes-with-orange.jpg';
import AA28 from './images/album-art/dawn-oberg-salvation-army-santa.jpg';
import AA29 from './images/album-art/desertshore-migrations-of-glass.jpg';
import AA30 from './images/album-art/desertshore-with-mark-kozelek.jpg';
import AA31 from './images/album-art/eddy-navia-and-chuchito-valdez-piano-and-churango.jpg';
import AA32 from './images/album-art/lori-carsillo-sugar-and-smoke.jpg';
import AA33 from './images/album-art/mark-kozelek-and-sean-yeaton-yellow-kitchen.jpg';
import AA34 from './images/album-art/mark-kozelek-like-rats.jpg';
import AA35 from './images/album-art/mark-kozelek-sings-christmas-carols.jpg';
import AA36 from './images/album-art/mark-kozelek-sings-favorites.jpg';
import AA37 from './images/album-art/mark-kozelek-with-ben-boye-and-jim-white.jpg';
import AA38 from './images/album-art/train-hey-soul-sister.jpg';
import AA39 from './images/album-art/train-if-its-love.jpg';
import AA40 from './images/album-art/yara-greyscale.jpg';

// Studio images
import hydestreet from './images/studios/hydestreet.jpg';
import gcraudio from './images/studios/gcraudio.jpg';

const albumArt = [
  AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8, AA9, AA10,
  AA11, AA12, AA13, AA14, AA15, AA16, AA17, AA18, AA19, AA20,
  AA21, AA22, AA23, AA24, AA25, AA26, AA27, AA28, AA29, AA30,
  AA31, AA32, AA33, AA34, AA35, AA36, AA37, AA38, AA39, AA40
]

const projectList = [
  'Sun Kil Moon', 'Bob Mould ', 'Dua Lipa ', 'Samsaya ', 'Daughter',
  'K.Flay', 'Tacocat	Reuben & the Dark', 'Panama Wedding', 'Jimi Hendrix', 'Train',
	'The Album Leaf', 'Jesu', 'Tony Royster Jr.', 'Kendra Morris', 'Forrest Day',
	'Angelo Moore', 'Dontae Winslow', 'Rappin 4-Tay', 'Melvin Seals ', 'Mike Patton ',
	'Raphael Saadiq', '50 Cent', 'Jonny Moseley', 'Gregg Bissonette', 'Prairie Prince ',
	'Will Oldham', 'Scarlet White', 'The Molice', 'Steve Shelley ', 'Sick Pigeon',
	'John C. Riley ', 'Kevin Corrigan', 'One Republic', 'Jim White ', 'Donny McCaslin ',
	'Roger Rocha ', 'Chuchito Valdez'
];

const videos = [
  { embed: 'fpitQejVPrQ', type: 'youtube', title: 'K.Flay - Rawks' },
  { embed: '8UQJER5TQHg', type: 'youtube', title: 'Daughter - Amsterdam' },
  { embed: 'c1VX87GSjVk', type: 'youtube', title: 'Reuben And The Dark' },
  { embed: 'ZZDvRft30ZE', type: 'youtube', title: 'Kendra Morris - These Eyes' },
  { embed: '116570638', type: 'vimeo', title: 'Panama Wedding - Trust' },
  { embed: 'DNpEzyst5IM', type: 'youtube', title: 'Sick Pigeon - Last Call' },
  { embed: 'cj9u4pWd_RQ', type: 'youtube', title: 'FD' },
  { embed: 'EtZerYMYTco', type: 'youtube', title: 'FD - Its Just Me' },
];

const studios = [
  {
    name: 'Hyde Street Studios',
    image: hydestreet,
    link: 'http://www.hydestreet.com/'
  },
  {
    name: 'GCR Audio',
    image: gcraudio,
    link: 'https://www.gcraudio.com/'
  }
];

const Albums = ({ albums }) => (
  <ul className="album-art">{
    albums.map((album, index) => {
      return (
        <li className="album-art--album">
          <img src={ album } alt=""/>
        </li>
      );
    })
  }</ul>
);


class App extends Component {
  render() {
    return (
      <div>
        <Header
          logo={ Logo }
          title="Nathan Winter"
          subTitle="Music Production"
          contactLinks={[
            {
              label: 'Email',
              icon: MailIcon,
              href: 'mailto:nathan.t.winter@gmail.com'
            },
            {
              label: 'Phone',
              icon: PhoneIcon,
              href: 'tel:5555555555'
            }
          ]}/>

        <section id="albums">
          <div className="section-header">
            <h3>Album Credits</h3>
          </div>

          <Albums albums={ albumArt }/>
        </section>

        <section id="project-list" className="dark">
          <div className="section-header">
            <h3>Projects</h3>
          </div>
          <ul className="project-list">{
            projectList.map((project, index) => {
              return (
                <li>{ project }</li>
              );
            })
          }</ul>
        </section>

        <section id="videos">
          <div className="section-header">
            <h3>Videos</h3>
          </div>
          <VideosList videos={ videos }/>
        </section>

        <section id="studios">
          <div className="section-header">
            <h3>Favorite Studios</h3>
          </div>
          
          <div className="studios">
            {
              studios.map((studio, index) => {
                return (
                  <a href={ studio.link } className="studio" target="_blank">
                    <img src={ studio.image } alt={ studio.name }/>
                    <span>{ studio.name }</span>
                  </a>
                );
              })
            }
          </div>
        </section>

        <footer>Nathan Winter ©2018</footer>
      </div>
    );
  }
}

export default App;
