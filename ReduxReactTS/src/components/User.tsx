import { useAppSelector } from "../store/hooks";

const User = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div>
      <p>Total Users : {user.length}</p>
    </div>
  );
};

export default User;
