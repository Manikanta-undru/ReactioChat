// eslint-disable-next-line react/prop-types
const ProfilePic = ({ imageUrl, size }) => {
    const styles = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
    };
  
    return <div style={styles}></div>;
  };
export default ProfilePic;