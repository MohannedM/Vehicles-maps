import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainLayout from '../modules/View/Layout/MainLayout'
import LandingPage from './LandingPage'
import NotFoundPage from './NotFoundPage'


const Pages: React.FC = () =>  {
  return (
  <MainLayout>
    <Switch>

          <Route path="/" exact component={LandingPage} />

          <Route path="/" component={NotFoundPage} />

    </Switch>
  </MainLayout>
  )
}

export default Pages;
