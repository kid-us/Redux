import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchUsers } from "../store/features/user/user";

const UserView = () => {
  const { error, loading, user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h3>Number of Cakes List of users </h3>
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}

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
                <tr key={u.id}>
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
