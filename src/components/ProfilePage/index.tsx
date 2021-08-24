import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Paulo Pupo</h1>
        <h2>@pupos_</h2>

        <p>
          Developer at <a href="www.linkedin.com/in/devpupo">@Byte_.</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 27 de dezembro de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>102</strong>
          </span>
          <span>
            <strong>2982 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
