import React from 'react';
import './InterviewDashboard.scss'
import ScheduleItem from "./SheduleItem/ScheduleItem";
import ReactPaginate from 'react-paginate';
import UpcomingItem from './UpcomingItem/UpcomingItem';
import OfferItem from './OfferItem/OfferItem';

const mockTalents = [
    {
        id: 1,
        photoURL: "https://randomuser.me/api/portraits/men/85.jpg",
        fullName: "Erik Hoffman",
        position: "Sr. Fullstack Engineer"
    },
    {
        id: 2,
        photoURL: "https://randomuser.me/api/portraits/men/75.jpg",
        fullName: "Jeremy Wilson",
        position: "Python Engineer"
    },
    {
        id: 3,
        photoURL: "https://randomuser.me/api/portraits/women/43.jpg",
        fullName: "Rebecca Owl",
        position: "Business Analyst"
    },
    {
        id: 4,
        photoURL: "https://randomuser.me/api/portraits/men/32.jpg",
        fullName: "Victor Nazarenko",
        position: "Sr. Java Developer"
    },
    {
        id: 5,
        photoURL: "https://randomuser.me/api/portraits/women/3.jpg",
        fullName: "Annika Schmidt",
        position: "UX Designer"
    },
    {
        id: 6,
        photoURL: "https://randomuser.me/api/portraits/women/82.jpg",
        fullName: "Anna Lewis",
        position: "Mid. JS Developer"
    },
    {
        id: 7,
        photoURL: "https://randomuser.me/api/portraits/men/29.jpg",
        fullName: "Robert Kelly",
        position: "Business Analyst"
    },
    {
        id: 8,
        photoURL: "https://randomuser.me/api/portraits/men/56.jpg",
        fullName: "Aman Mallaya",
        position: "Sr. Software Engineer"
    }
];

const mockUpcomingInterviews = [
    {
        id: 1,
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Arthur van Hoff',
        position: 'Data Scientist',
        day: 'Friday, Mar 11',
        time: '12:00-5:00',
        description: 'OnSite interview 1435 Market St., San Francisco, CA 94302, USA'
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Arthur van Hoff',
        position: 'Data Scientist',
        day: 'Friday, Mar 11',
        time: '12:00-5:00',
        description: 'OnSite interview 1435 Market St., San Francisco, CA 94302, USA'
    },
];

const mockOffers = [
    {
        id: 1,
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Arthur van Hoff',
        position: 'Data Scientist',
        day: 'Friday, Mar 11',
        time: '12:00-5:00',
        description: 'OnSite interview 1435 Market St., San Francisco, CA 94302, USA'
    }
];

const InterviewDashboard = (props) => {
    const scheduleList = mockTalents.map(talent => <ScheduleItem talent={talent} key={talent.id}/>);
    const upcomingList = mockUpcomingInterviews.map(interview => <UpcomingItem key={interview.id} interview={interview} />);
    const offersList = mockOffers.map(offer => <OfferItem key={offer.id} offer={offer} />);
    return (
        <div className='interview-dashboard'>
            <div className='interview-dashboard__left-side'>
                <div className='upcoming-interviews'>
                    <h2 className='interview-dashboard__subtitle'>
                        My upcoming interviews
                    </h2>
                    {upcomingList}
                </div>
                <div className='interview-offers'>
                    <h2 className='interview-dashboard__subtitle'>
                        Final offers extended
                    </h2>
                    {offersList}
                </div>
            </div>
            <div className='interview-dashboard__right-side'>
                <div className='interview-dashboard__talent-list'>
                    <h2 className='interview-dashboard__subtitle'>
                        Need scheduling or decision
                    </h2>
                    {scheduleList}
                </div>
                <ReactPaginate
                    pageCount={20}
                    containerClassName='jobs-pagination'
                    pageClassName='jobs-pagination__item'
                    pageLinkClassName='jobs-pagination__link'
                    activeLinkClassName='jobs-pagination__link--active'
                    onPageChange={() => {}}
                    previousLinkClassName='jobs-pagination__link--prev'
                    nextLinkClassName='jobs-pagination__link--next'
                    nextLabel=''
                    previousLabel=''
                />
            </div>
        </div>
    )
}

export default InterviewDashboard;

