import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';

import Headline from './headline/Headline';

import './app.scss';


class App extends PureComponent {
    render() {
        return (
            <div
                className="main_wrapper"
            >
                <Headline/>

                {/* User logged in */}

                    {/* Admin */}

                        {/* User verwalten */}

                        {/* Abteilung verwalten */}

                {/* !Admin */}

                    {/* Antrag erstellen */}

                    {/* History */}

                    {/* Calender with other user */}

                    {/* Manager? */}

                        {/* offene Anträge */}

                {/* User not logged in */}
            </div>
        );
    }
}

export default hot(App);
