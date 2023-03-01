import { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const mapMissions = missions
      .map((mission) => (<MissionCard
        key={ mission.name }
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
      />));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { mapMissions }
      </div>
    );
  }
}

export default Missions;
