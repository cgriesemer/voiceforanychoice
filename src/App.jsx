import './App.css'

function App() {
    return (
      <div className="container">
      <header>
        <h1>Chris Griesemer - Voice Over Actor</h1>
        <p>Central Texas | Professional Voice Over since 2001</p>
      </header>
      {/* About Section */}
      <section id="about">
        <h2>About</h2>
        <p>
          My name is Chris Griesemer, and I am a Voice Over actor based in Central Texas. I've been doing professional voice over work since 2001. Where has the time gone??
        </p>
        <p>
          I provide a lightning quick turnaround for your projects, all done in a high-end professional studio that is designed for flawless and perfectly mastered voice over tracks.
        </p>
        <p>
          I've done hundreds of commercials, video games, web series, podcasts and every VO project you can imagine.
        </p>
        <p>
          In addition to providing a conversational, approachable, trustworthy voice to your project, I am one of the foremost recognized dialect VO actors in the industry. Your potential range of characters runs the gamut.
        </p>
        <p>
          Please check out the demo section below to hear a sampling of these.
        </p>
      </section>
      {/* Demo Reels Section */}
      <section id="demo-reels">
        <h2>Demo Reels</h2>
        <p>Listen to a sampling of my work below:</p>
        <div className="demo-reel-list">
          <div>
            <h3>Video Game</h3>
            <audio controls>
              <source src="/Chris Griesemer - Video Game.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <h3>Character</h3>
            <audio controls>
              <source src="/Chris_Griesemer_Character.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <h3>Commercial</h3>
            <audio controls>
              <source src="/Chris_Griesemer_Commercial.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <h3>Narration</h3>
            <audio controls>
              <source src="/Chris_Griesemer_Narration.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </section>
      {/* Credits Section */}
      <section id="credits">
        <h2>Credits</h2>
        <h3>Companies</h3>
        <ul className="credits-list">
          <li>Keystone Light</li>
          <li>Mazda</li>
          <li>Anheuser-Busch</li>
          <li>Outback Steakhouse</li>
          <li>BBC-America</li>
          <li>Guinness Brewery</li>
          <li>Landmark Theaters</li>
          <li>Home Depot</li>
          <li>Frontier Airlines</li>
          <li>Arc Thrift Stores</li>
          <li>Hard Rock Hotel and Casino</li>
          <li>ESPN Radio</li>
          <li>Colorado Board of Tourism</li>
          <li>Baylor University</li>
          <li>University of Denver</li>
        </ul>
        <h3>Video Games</h3>
        <ul className="credits-list">
          <li>Final Assault VR</li>
          <li>Final Approach VR</li>
          <li>Wizards 101</li>
          <li>Pirates 101</li>
          <li>Job Simulator VR</li>
          <li>Assassins Creed III</li>
          <li>SoCom Navy Seals</li>
          <li>Resident Evil 6</li>
          <li>Primal Hunt VR</li>
          <li>...among many, many more.</li>
        </ul>
      </section>
      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Commercials</li>
          <li>Video Games</li>
          <li>Web Series</li>
          <li>Podcasts</li>
          <li>Character Voices & Dialects</li>
          <li>Fast Turnaround</li>
          <li>Professional Studio Quality</li>
        </ul>
      </section>
      {/* Featured Videos Section */}
      <section id="featured-videos">
        <h2>Featured Videos</h2>
        <div className="video-grid">
          <div className="video-item">
            <iframe src="https://player.vimeo.com/video/535582426?fl=pl&fe=sh" width="100%" height="315" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Vimeo Video"></iframe>
          </div>
          <div className="video-item">
            <iframe src="https://www.youtube.com/embed/0ldTSB_tCTA" width="100%" height="315" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YouTube Video 1"></iframe>
          </div>
          <div className="video-item">
            <iframe src="https://www.youtube.com/embed/IrhC4G80jF8" width="100%" height="315" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YouTube Video 2"></iframe>
          </div>
          <div className="video-item">
            <iframe src="https://www.youtube.com/embed/vRi1EFIW6pY" width="100%" height="315" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YouTube Video 3"></iframe>
          </div>
          <div className="video-item">
            <iframe src="https://www.youtube.com/embed/naxbco0sGNU" width="100%" height="315" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YouTube Video 4"></iframe>
          </div>
          <div className="video-item">
            <iframe src="https://www.youtube.com/embed/nQhaxVfFtmE" width="100%" height="315" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YouTube Video 5"></iframe>
          </div>
          <div className="video-item">
            <iframe src="https://www.youtube.com/embed/jv2hsBN25rY" width="100%" height="315" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YouTube Video 6"></iframe>
          </div>
          <div className="video-item">
            <iframe src="https://www.youtube.com/embed/bWCdWefhNgE" width="100%" height="315" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YouTube Video 7"></iframe>
          </div>
          <div className="video-item">
            <iframe src="https://www.youtube.com/embed/171UsbY4t5U" width="100%" height="315" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YouTube Video 8"></iframe>
          </div>
        </div>
      </section>
      {/* Contact Section */}
            {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:voiceforanychoice@gmail.com">voiceforanychoice@gmail.com</a></p>
        <p>Location: Central Texas</p>
      </section>
    </div>
  );
}

export default App;
