import React from 'react';
import { fetchProfile } from '../services/api-helper';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      mapClass: []
    }
  }

  componentDidMount = async () => {
    let profile = await fetchProfile(this.props.id)
    let mapClass = profile.classification.iconClassDescription
    this.setState({
      profile: profile,
      mapClass: mapClass
    })
  }

  render() {
    const profile = this.state.profile;
    const mapClass = this.state.mapClass;

    if (profile) {
      return (
        <div>
          <div className="profile">
            <img src={profile.webImage.url} alt="painting" />
          </div>
          <div className="profile-two">
            <h1>Title: {profile.label.title}</h1>
            <h3>Artist Line: {profile.label.makerLine}</h3>
            <h3>Physical Medium: {profile.physicalMedium}</h3>
            <h5>Century Created: {profile.dating.period}th</h5>
            <h5>Creation Date: {profile.dating.presentingDate}</h5>
            <p>{profile.label.description}</p>
          </div>
          <div>
            <h2>Additional Information:</h2>
            <h3>Artist: {profile.principalMakers[0].name}</h3>
            <ul>
              <li>Nationality: {profile.principalMakers[0].nationality}</li>
              <li>Date of Birth: {profile.principalMakers[0].dateOfBirth}</li>
              <li>Place of Birth: {profile.principalMakers[0].placeOfBirth}</li>
              <li>Date of Death: {profile.principalMakers[0].dateOfDeath}</li>
              <li>Place of Death: {profile.principalMakers[0].placeOfDeath}</li>
            </ul>
            <h3>Class Description:</h3>
            <ul>
              {mapClass.map((value, index) => {
                return <li key={index}>{value}</li>
              })}
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }
}