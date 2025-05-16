import { useSelector } from "react-redux";

const User = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <p>Total User : {user.length}</p>
    </div>
  );
};

export default User;
