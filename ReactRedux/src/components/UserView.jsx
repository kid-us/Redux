import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/features/user";

const UserView = () => {
  const { loading, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h3>List of users</h3>
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      {user && user.length > 0 && (
        <table>
          <thead>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
          </thead>
          <tbody>
            {user.map((u) => {
              return (
                <tr key={u.name}>
                  <td>{u.name}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserView;
