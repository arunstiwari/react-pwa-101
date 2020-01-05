import React, {Component} from 'react';
import Link from "../../components/link/Link";
import List from "../../components/list/List";
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  width: 50%;
  margin: 10px auto;
`;

const Avatar = styled.img`
  width: 150px;
`;

class Profile extends Component {

  state = {
    data: {},
    repositories: [],
    loading: true
  }

  async componentDidMount() {
    const profile = await fetch('https://api.github.com/users/arunstiwari');
    const profileJSON = await profile.json();

    if (profileJSON) {
      const repositories = await fetch(profileJSON.repos_url);
      const repositoriesJSON = await repositories.json();

      this.setState({
        data: profileJSON,
        repositories: repositoriesJSON,
        loading: false
      })
    }
  }

  render() {
    const {data, loading, repositories} = this.state;
    if (loading) return <div>Loading ...</div>
    const items = [
      {label: 'html_url', value: <Link url={data.html_url} linkTitle={'Github URL'}></Link> },
      {label: 'repos_url', value: data.repos_url},
      {label: 'name', value: data.name},
      {label: 'company', value: data.company},
      {label: 'location', value: data.location},
      {label: 'email', value: data.email},
      {label: 'bio', value: data.bio}
    ]

    const projects = repositories.map(repository => ({
      label: repository.name,
      value: <Link url={repository.html_url} linkTitle={'Github URL'} />
    }));
    return (
      <ProfileWrapper>
        <Avatar src={data.avatar_url} alt='avatar' />
        <List items={items} title={'Profile'} />
        <List items={projects} title={'Projects'} />
      </ProfileWrapper>
    );
  }
}

export default Profile;
