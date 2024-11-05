import React from "react"

export default function App() {
  return (
    <main>
      <img src="./images/headshot.jpg" alt="headshot" className="image"></img>

      <h1 className="name">San Vu</h1>
      <p className="role">Frontend Developer</p>
      <p className="email">sanxvu@gmail.com</p>

      <container>
        <button className="website-button"><i class="fa fa-globe"></i> Website</button>
        <button className="linkedin-button"><i class="fa fa-linkedin-square"></i> LinkedIn</button>
      </container>

      <container className="bio">
        <h2 className="header">About</h2>
        <p className="description">Hi! I recently graduated from San Jose State University with a B.S. in Computer Science and Minor in Interaction Design. While I look for full-time opportunities in the Bay Area, I am spending my free (funemployed) time learning new skills (like React) and pursuing different hobbies!</p>
        <h2 className="header">Interests</h2>
        <p className="description">Software development. UI/UX design. Product management. Community building. Teaching. Crochet. Line dancing. Pole dancing. Singing. Snowboarding. Rock climbing. TOO MANY.</p>
      </container>
      <container className="bottom-social-container">
        <button className="bottom-social-button"><i class="fa fa-instagram"></i></button>
        <button className="bottom-social-button"><i class="fa fa-youtube"></i></button>
        <button className="bottom-social-button"><i class="fa fa-github"></i></button>
      </container>
    </main>

  )
}