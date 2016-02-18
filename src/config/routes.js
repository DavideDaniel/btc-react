import React from 'react';
import Main from '../components/Main';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import SearchPage from '../components/SearchPage';
import DonorsPage from '../components/DonorsPage';
import CampaignsPage from '../components/CampaignsPage';
import CandidatesPage from '../components/CandidatesPage';
import OregonPage from '../components/OregonPage';
import FaqPage from '../components/FaqPage';
import {Route, IndexRoute} from 'react-router';

export default (
  <Route path="/" component={Main}>
    <Route path="search" component={SearchPage} />
    <Route path="oregon" component={OregonPage} />
    <Route path="campaigns" component={CampaignsPage} />
    <Route path="donors" component={DonorsPage} />
    <Route path="candidates" component={CandidatesPage} />
    <Route path="about" component={AboutPage} />
    <Route path="faq" component={FaqPage} />
    <IndexRoute component={HomePage} />
  </Route>
);