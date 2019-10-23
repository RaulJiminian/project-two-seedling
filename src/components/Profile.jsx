import React from 'react';
import { fetchProfile } from '../services/api-helper';
import Modal from '../components/Modal';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      mapClass: [],
      mapDocumentation: [],
      showModal: false,
      showBlur: false
    };
  }

  flipModal = e => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      showBlur: !prevState.showBlur
    }));
  };

  componentDidMount = async () => {
    let profile = await fetchProfile(this.props.id);
    let mapClass = profile.classification.iconClassDescription;
    let mapDocumentation = profile.documentation;
    this.setState({
      profile: profile,
      mapClass: mapClass,
      mapDocumentation: mapDocumentation
    })
  }

  render() {
    const profile = this.state.profile;
    const mapClass = this.state.mapClass;

    return (
      <div className="wrap">
        {
          profile && (
            <>
              {(this.state.showBlur ? <div id="blur"></div> : <></>)}

              <div className="profile img-hover-zoom">
                <img src={profile.webImage.url} alt="painting" />
              </div>
              <div className="profile-two">
                <h1>{profile.label.title}</h1>
                <h3>{profile.label.makerLine}</h3>
                <br />
                <h4>Physical Medium: {profile.physicalMedium}</h4>
                <h5>Century Created: {profile.dating.period}th</h5>
                <h5>Creation Date: {profile.dating.presentingDate}</h5>
                <br />
                <p>{profile.label.description}</p>
                <br />
                <h2>Artist Information:</h2>
                <br />
                <h3>{profile.principalMakers[0].name}</h3>
                <ul className="tab">
                  <li>Nationality: {profile.principalMakers[0].nationality}</li>
                  <li>Date of Birth: {profile.principalMakers[0].dateOfBirth}</li>
                  <li>Place of Birth: {profile.principalMakers[0].placeOfBirth}</li>
                  <li>Date of Death: {profile.principalMakers[0].dateOfDeath}</li>
                  <li>Place of Death: {profile.principalMakers[0].placeOfDeath}</li>
                </ul>
                <br />
                <h3>Class Description:</h3>
                <ul className="tab">
                  {mapClass.map((value, index) => {
                    return <li key={index}>{value}</li>
                  })}
                </ul>
                <Modal flipModal={this.flipModal} showModal={this.state.showModal} mapDocumentation={this.state.mapDocumentation} />
                {this.state.mapDocumentation.length && !this.state.showModal && (
                  <div>
                    <button
                      className="toggle-button"
                      id="centered-toggle-button"
                      onClick={this.flipModal}
                    >Documentation</button>
                  </div>
                )}
              </div>
            </>
          )
        }
      </div>
    )
  }
}
