import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

function NavBar(props) {
  
  const handleLogOut = () => {
     // Delegate to the users-service
  userService.logOut();
  // Update state will also cause a re-render
  props.setUser(null);
  }
  return (
    <nav>
      <h1>Welcome, {props.user.name}</h1>
      <Link to="/posts">Delete Account</Link>
      &nbsp; | {" "}
      <Link to="/posts/new">Update Account</Link>
      <br />
      <Link to="/drink">Drink</Link>
      <br />
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}

export default NavBar