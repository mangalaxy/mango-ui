import React, {Component} from 'react';
import './Home.scss';
import Slider from 'react-slick';
import {top3Jobs} from "../../../mocks/top3JobsOnHomePage";
import {keys} from "../../../constants/en.json";

class Home extends Component {

  state = {
    jobCardData: []
  }

  componentDidMount() {
    this.setState({jobCardData: [...top3Jobs]})
  }

  render() {
    const {jobCardData} = this.state;
    const settings = {
      dots: true,
      arrows: false,
      rows: 1,
      slidesPerRow: 2,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 4000,
    };

    // Get our translate keys from home dictionary,
    // then inject them in appropriate places by keys.
    // 't' is shorthand for word 'translation'
    const t = keys.home;
    return (
          <>
            <section className='bannerContainer' id={'home-banner'}>
              <div className="bannerContent">
                <h1 className="bannerContent-title">{t["banner.title"]}</h1>
                <h4 className="bannerContent-description">{t["banner.description"]}</h4>
                <div className="buttonsContainer">
                  <button className="accent-btn">{t["btn.apply-now"]}</button>
                  <button className="accent-btn__inverted">{t["btn.learn-more"]}</button>
                </div>
              </div>
            </section>

            <section className='about-us'>
              <div className='container about-us__content'>
                <div className="contentRow">
                  <h3 className='contentRow__title'>{t["features.why-choose-us"]}</h3>
                  <p>{t["features.why-choose-us.text"]} </p>
                </div>
                <div className="contentRow">
                  <h3 className='contentRow__title'>{t["features.our-mission"]}</h3>
                  <p>{t["features.our-mission.text"]}</p>
                </div>
                <div className="contentRow">
                  <h3 className='contentRow__title'>{t["features.what-we-do"]}</h3>
                  <p>{t["features.what-we-do.text1"]}</p>
                  <p>{t["features.what-we-do.text2"]}</p>
                </div>
              </div>
            </section>

            <section id="steps">
              <div className="container">
                <h2 className='mainHeaderH2'>{t["figure.title"]}</h2>
                <RenderStepsDiagram/>
              </div>
            </section>

            <section id="pathfinder">
              <div className='image'/>
              <div className='content'>
                <p>{t["pathfinder.action-call"]}</p>
                <button className='accent-btn'>{t["btn.apply-now"]}</button>
              </div>
            </section>

            <section className='container' id='jobRoles'>
              <h2 className="mainHeaderH2">{t["job-roles.title"]}</h2>
              <div className="cardContainer">
                {jobCardData && jobCardData.map((job, index) =>
                      <JobCard key={index} job={job}/>)
                }
              </div>
              <button className='accent-btn'>{t["btn.apply-now"]}</button>
            </section>

            <section id='techCenters'>
              <h2 className="container mainHeaderH2">{t["tech-centers.title"]}</h2>
              <div className="citiesCarouselContainer">
                <Slider {...settings} className='large-slider'>
                  {cities.map((city, index) => <CityCard key={index} city={city}/>)}
                </Slider>
                <Slider {...settings} slidesToShow={2} slidesToScroll={2} className='small-slider'>
                  {cities.map((city, index) => <CityCard key={index} city={city}/>)}
                </Slider>
              </div>
            </section>

            <section className='container' id='partners'>
              <h2 className="mainHeaderH2">{t["partners.title"]}</h2>
              <Partners/>
            </section>
          </>
    );
  }
}

export default Home;

export const GreenDash = () => (<div className='greenDash'>
  <svg width="127" height="4" viewBox="0 0 127 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.925293 0.388916H126.103V3.39725H0.925293V0.388916Z" fill="#36B3A8" fillOpacity="0.9"/>
  </svg>
</div>);

const RenderStepsDiagram = () => {
  const steps = [
    {
      header: 'Registration',
      text: 'Talents fill up key information about technology stack, desired location and salary expectations',
      picture: require('../../../assets/images/MainPage/step1.png'),
    }, {
      header: 'Application',
      text: 'After successful registration a candidate expects invitation from multiple companies',
      picture: require('../../../assets/images/MainPage/step2.png'),
    }, {
      header: 'Invitation',
      text: 'A few vacancies are offered and a candidate is able to choose a proper company for him',
      picture: require('../../../assets/images/MainPage/step3.png'),
    }, {
      header: 'Negotiation',
      text: 'A candidate has an interview in a chosen company',
      picture: require('../../../assets/images/MainPage/step4.png'),
    }, {
      header: 'Presentation',
      text: 'Cheers, you nailed it, the job is yours',
      picture: require('../../../assets/images/MainPage/step5.png'),
    },
  ];

  return (
        <div className='steps-diagram'>
          {steps.map((step, index) => {
            const even = (index + 1) % 2 === 0;
            return (
                  <div className='steps-diagram__item' key={index}>
                    <div className={`steps-diagram__item-container ${even && 'steps-diagram__item-container--reverse'}`}>
                      <div className={`steps-diagram__text-block ${even && 'steps-diagram__text-block--reverse'}`}>
                        <div className='steps-diagram__cicle'>
                          <div className='steps-diagram__inner-cicle'>
                            {index + 1}
                          </div>
                        </div>
                        <div className='steps-diagram__line'>
                          <div className={`steps-diagram__step-header ${even && 'steps-diagram__step-header--reverse'}`}>{step.header}</div>
                          <div className={`steps-diagram__step-description ${even && 'steps-diagram__step-description--reverse'}`}>{step.text}</div>
                        </div>
                        <div className='steps-diagram__small-cicle'/>
                      </div>
                      <div className={`steps-diagram__img-block ${even && 'steps-diagram__img-block--reverse'}`}>
                        <img className='steps-diagram__img' src={step.picture} alt=''/>
                      </div>
                    </div>
                  </div>
            );
          })}
        </div>
  );
};

const JobCard = (props) => {
  const {job} = props;
  return (
        <div className='jobCardMain'>
          <h3>{job.name}</h3>
          <span>{job.city}, {job.country}</span>
          <div className="imageContainer">
            <img src={job.imageUrl} alt=""/>
          </div>
          {job.daysToApply && <span>{job.daysToApply} {job.daysToApply === 1 ? 'day' : 'days'} to apply</span>}
        </div>
  );
};

const cities = [
  {name: 'New york', image: '/images/cities/new-york.png'},
  {name: 'London', image: '/images/cities/london.png'},
  {name: 'San francisco', image: '/images/cities/san-francisco.png'},
  {name: 'Hong Kong', image: '/images/cities/hong-kong.png'},
  {name: 'Kyiv', image: '/images/cities/kyiv.png'},
  {name: 'Singapore', image: '/images/cities/singapure.png'},
  {name: 'Los Angeles', image: '/images/cities/los-angeles.png'},
  {name: 'Boston', image: '/images/cities/boston.png'},
  {name: 'Tel-Aviv', image: '/images/cities/tel-aviv.png'},
  {name: 'Berlin', image: '/images/cities/berlin.png'},
  {name: 'Chicago', image: '/images/cities/chicago.png'},
  {name: 'Seattle', image: '/images/cities/seattle.png'},
  {name: 'Paris', image: '/images/cities/paris.png'},
  {name: 'Austin', image: '/images/cities/austin.png'},
  {name: 'Tokyo', image: '/images/cities/tokyo.png'},
  {name: 'Toronto', image: '/images/cities/toronto.png'},
  {name: 'Amsterdam', image: '/images/cities/amsterdam.png'},
  {name: 'Sydney', image: '/images/cities/sydney.png'},
  {name: 'Atlanta', image: '/images/cities/atlanta.png'},
  {name: 'Miami', image: '/images/cities/miami.png'},
  {name: 'Stockholm', image: '/images/cities/stockholm.png'},
  {name: 'Vancouver', image: '/images/cities/vancouver.png'},
  {name: 'San Diego', image: '/images/cities/san-diego.png'},
  {name: 'Barcelona', image: '/images/cities/barselona.png'},
];

const partnersImages = [
  '/images/partners/aurea.png',
  '/images/partners/bcl.jpg',
  '/images/partners/upl.png',
  '/images/partners/webelect.png',
];

export const Partners = () => (
      <div className="partnersContainer">
        {partnersImages.map((path, index) => <img key={index} src={path} alt=""/>)}
      </div>
);

const CityCard = ({city}) => {
  return (
        <div className="cityContainer">
          {city &&
          <>
            <img src={city.image} alt={city.name}/>
            <h3>{city.name}</h3>
          </>}
        </div>
  )
}
