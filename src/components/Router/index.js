import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Description from '../Description';
import Gallery from '../Gallery';
import Contacts from '../Contacts';
import SinglePagePhoto from '../SinglePagePhoto';

export default function () {
  return (
    <Switch>
      <Route exact path='/' component={Description} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/photo' component={SinglePagePhoto} />
    </Switch>
  )
}