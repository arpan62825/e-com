import { useState, useEffect } from "react";
import { Person } from "@mui/icons-material";
import profilePageFiller from "../assets/images/image.png";
import { database } from "../components/firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export default function Profile() {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("your name");
  const [email, setEmail] = useState("your email");
  const [contact, setContact] = useState("your phone number");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    onSnapshot(collection(database, "users"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setName(doc.data().name);
        setEmail(doc.data().email);
        setContact(doc.data().contact);
      });
    });
  }, []);

  useEffect(() => {
    if (!isEditing && name !== "your name") {
      try {
        console.log("Data was added to firestore");
        addDoc(collection(database, "users"), {
          name,
          email,
          contact,
        }).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }, [isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onSnapshot(collection(database, "users"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setName(doc.data().name);
        setEmail(doc.data().email);
        setContact(doc.data().contact);
      });
    });
  };

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="profile-page">
      <div className="filler-image">
        <img src={profilePageFiller} alt="Profile background" />
      </div>
      <div className="profile-container">
        <div className="profile-pic-section">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="profile-pic" />
          ) : (
            <Person className="profile-icon" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
          />
        </div>
        <div className="profile-info">
          {isEditing ? (
            <>
              <div className="profile-field">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="profile-field">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="profile-field">
                <label htmlFor="contact">Contact:</label>
                <input
                  type="tel"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <button className="save-button" onClick={handleSaveClick}>
                Save
              </button>
            </>
          ) : (
            <>
              <div className="profile-display">
                <label>Name:</label>
                <h2>{name}</h2>
              </div>
              <div className="profile-display">
                <label>Email:</label>
                <h2>{email}</h2>
              </div>
              <div className="profile-display">
                <label>Contact:</label>
                <h2>{contact}</h2>
              </div>
              <button className="edit-button" onClick={handleEditClick}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
