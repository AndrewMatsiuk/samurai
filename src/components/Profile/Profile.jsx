import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = () => {
  return (
    <div>
      Main content
      <ProfileInfo
        avatarUrl={
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00aa134c468bc3732e138ade945ada3bfc8a3172_full.jpg'
        }
      />
      <MyPosts />
    </div>
  );
};
