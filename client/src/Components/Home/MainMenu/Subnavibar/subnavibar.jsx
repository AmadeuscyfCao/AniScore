import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import {navibarStyle} from './subnavibar.module.scss';

class Subnavibar extends Component {
    constructor() {
        super();
        this.toHomePage = this.toHomePage.bind(this);
        this.toBangumi = this.toBangumi.bind(this);
        this.toSeason = this.toSeason.bind(this);
        this.toUpcoming = this.toUpcoming.bind(this);
        this.toRank = this.toRank.bind(this);
    }

    toHomePage() {
        this.props.history.push('/');
    }

    toBangumi() {
        this.setState ({
            current: 'bangumi',
        })
        this.props.history.push('/bangumi')
    }

    toSeason() {
        this.props.history.push('/bangumi/season');
    }

    toUpcoming() {
        this.props.history.push('/upcomingbangumi');
    }

    toRank() {
        this.props.history.push('/rank');
    }

    render() {
        let fontStyle = {
            fontSize: '10pt',
        }
        return(
            <div className = {navibarStyle}>
                <Menu pointing secondary style = {{display: 'block', margin: '0 auto'}}>
                    <Menu.Item style = {fontStyle}
                        name='Home Page'
                        active={this.props.current === 'home'}
                        onClick = {this.toHomePage}
                    />
                    <Menu.Item style = {fontStyle}
                        name='Bangumi'
                        active={this.props.current === 'bangumi'}
                        onClick = {this.toBangumi}
                    />
                    <Menu.Item style = {fontStyle}
                        name='Season'
                        active = {this.props.current === 'season'}
                        onClick = {this.toSeason}
                    />
                    <Menu.Item style = {fontStyle}
                        name='Upcoming'
                        active = {this.props.current === 'upcoming'}
                        onClick = {this.toUpcoming}
                    />
                    <Menu.Item style = {fontStyle}
                        name='Rank'
                        active = {this.props.current === 'rank'}
                        onClick = {this.toRank}
                    />
                </Menu>
            </div>
        )
    }
}

export default withRouter(Subnavibar);