import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../store/user/actions";

function HeaderMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.User.currentUser;
  });

  function handleLogOut(event) {
    event.preventDefault();
    dispatch(logoutAction());
  }

  return (
    <div className="tcl-col-6">
      <div className="header-nav">
        <ul className="header-nav__lists">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Our Team</a>
            <ul>
              <li>
                <a href="./login">Our Team 1</a>
              </li>
              <li>
                <a href="/">Our Team 2</a>
              </li>
              <li>
                <a href="/">Our Team 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Contact</a>
            <ul>
              <li>
                <a href="/">Contact 1</a>
              </li>
              <li>
                <a href="/">Contact 2</a>
              </li>
              <li>
                <a href="/">Contact 3</a>
                <ul>
                  <li>
                    <a href="/">Contact 11</a>
                  </li>
                  <li>
                    <a href="/">Contact 12</a>
                  </li>
                  <li>
                    <a href="/">Contact 13</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="header-nav__lists">
          {user ? (
            <li className="user">
              <Link to="/dashboard">
                <i className="icons ion-person"></i>
                {user.nickname}
              </Link>
              <ul>
                <li>
                  <a onClick={handleLogOut} href="/">
                    Log Out
                  </a>
                </li>
              </ul>
            </li>
          ) : (
            <li className="user">
              <Link to="/login">
                <i className="icons ion-person"></i> Tài khoản
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenu;
