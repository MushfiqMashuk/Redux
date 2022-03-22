import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./Redux";

const Users = ({ usersState, usersDispatch }) => {
  const { loading, users, error } = usersState;
  console.log(usersState);
  useEffect(() => {
    usersDispatch();
  }, [usersDispatch]);

  return (
    <>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {!loading && !error && (
        <div>
          <h2>Users List</h2>
          <div>
            {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({ usersState: state.users });
const mapDispatchToProps = (dispatch) => {
  return {
    usersDispatch: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
