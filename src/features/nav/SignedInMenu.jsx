import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Image, Menu, Dropdown } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { signOutWithFirebase } from "../../app/firestore/firebaseService";

export default function SignedInMenu() {
  const {currentUser} = useSelector(state => state.auth);
  const history = useHistory();

  async function handleSignOut() {
    try {
      await signOutWithFirebase();
      history.push('/');
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={currentUser.photoURL || "/assets/user.png"} />
      <Dropdown pointing="top right" text={currentUser.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item as={Link} to='/account' text="My Account" icon="settings" />
          <Dropdown.Item
            onClick={handleSignOut}
            text="Sign Out"
            icon="power"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
