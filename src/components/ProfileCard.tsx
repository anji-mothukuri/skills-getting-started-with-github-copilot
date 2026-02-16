import React from 'react';
import { User } from '../types/User';
import '../styles/ProfileCard.css';

interface ProfileCardProps {
  user: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => (
  <div className="profile-card">
    <img className="profile-avatar" src={user.avatarUrl || '/static/default-avatar.png'} alt={user.name} />
    <h2 className="profile-name">{user.name}</h2>
    <p className="profile-email">{user.email}</p>
    {user.bio && <p className="profile-bio">{user.bio}</p>}
  </div>
);

export default ProfileCard;
