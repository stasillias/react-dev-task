import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SearchView } from '../search-view/SearchView';
import { ReposListView } from '../repos-list-view/ReposListView';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={SearchView}></Route>
            <Route path="repos" component={ReposListView}></Route>
        </Switch>
    </main>
);