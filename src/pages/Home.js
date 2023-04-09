import {NavLink } from "react-router-dom";
const Home = () => {
    return(
        <>
        <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/messages">Messages</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
        </nav>
        </>
     
    )
}
<style scoped>

</style>
export default Home;