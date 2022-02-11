import { authService, firebaseInstance } from "fbase";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const SocialAuthForm = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    } else if (name === "twitter") {
      provider = new firebaseInstance.auth.TwitterAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="authBtns">
      <button onClick={onSocialClick} name="google" className="authBtn">
        Continue with Google <FontAwesomeIcon icon={faGoogle} />
      </button>
      <button onClick={onSocialClick} name="github" className="authBtn">
        Continue with Github <FontAwesomeIcon icon={faGithub} />
      </button>
      <button onClick={onSocialClick} name="twitter" className="authBtn">
        Continue with Twitter <FontAwesomeIcon icon={faTwitter} />
      </button>
    </div>
  );
};
export default SocialAuthForm;
