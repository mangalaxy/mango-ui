import React, {Fragment} from 'react';
import {Partners} from '../Home/Home';

import './ForTalents.scss';

const ForTalents = () => {
  return (
      <Fragment>
        <div className="bannerContainer" id='for-talent-banner'>
          <div className="image-filter"/>
          <div className="bannerContent md-6of12">
            <h1 className="bannerContent-title left">Our advantages</h1>
            <ul>
              <li className="bannerContent-description">The best companies in
                the world are looking for you.
              </li>
              <li className="bannerContent-description">Speedy job search.</li>
              <li className="bannerContent-description"> The whole process of
                hiring is under control (feedback,
                interview results, time management).
              </li>
              <li className="bannerContent-description">Job search process is
                fully under your control.
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="our-help">
            <div className="contentContainer md-6of12">
              <h2 className="mainHeaderH2">Support from our career
                advocates</h2>
              <ul>
                <li>Professional advice on creating a strong impression on
                  potential employers.
                </li>
                <li>Objective assessment of companies and selection the most
                  suitable for you.
                </li>
                <li>Support and follow-up of your interviews throughout the
                  negotiation process, until getting a job offer.
                </li>
                <li>Expert assessment of global trends in the development of
                  projects and tendencies in wage growth.
                </li>
              </ul>
            </div>
            <div className="imageContainer">
              <img src="/images/advocate.png" alt="Career advocate"/>
            </div>
          </div>
        </div>

        <section className="goal">
          <div className="halfBanner"/>
          <div className="contentContainer md-6of12">
            <h4>What are you waiting for?</h4>
            <button className="accent-btn">Apply now</button>
          </div>
        </section>

        <div className="container">
          <div className="how-it-works wide">
            <div className="contentContainer md-6of12">
              <h2 className="mainHeaderH2">How it works</h2>
              <p>Show your skills and aspirations to work for influential
                companies, and we will help set up your profile.</p>
              <p>Accept interview requests from leading companies and your
                chances of getting a desired job skyrocket.</p>
            </div>
            <div className="imageContainer comp">
              <img src="/images/how_it_works.png" alt="How it works"
                   className="responsive"/>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="why-trusted">
            <div className="imageContainer wide">
              <img src="/images/why_trusted.png" alt=""/>
            </div>
            <div className="imageContainer mobile">
              <div className="contentContainer">
                <h2 className="mainHeaderH2">How it works</h2>
                <p>Show your skills and aspirations to work for influential
                  companies, and we will help set up your profile.</p>
                <p>Accept interview requests from leading companies and your
                  chances of getting a desired job skyrocket.</p>
              </div>
              <img src="/images/Iphone.png" alt=""/>
            </div>

            <div className='contentContainer'>
              <h2 className="mainHeaderH2">Why we are trusted</h2>
              <ul>
                <li>Platform that allows you to avoid intermediaries between you
                  and potential employers.
                </li>
                <li>Individual approach to every talent.</li>
                <li>Free registration and easy access to negotiation with
                  employers.
                </li>
                <li>Involvement with most suitable projects and companies based
                  on
                  your tech stack and experience.
                </li>
                <li>Vast selection of open positions from leading companies.
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div id="global" className='container'>
          <h2 className='mainHeaderH2'>Global business</h2>
          <Partners/>
        </div>
      </Fragment>
  );
};

export default ForTalents;
