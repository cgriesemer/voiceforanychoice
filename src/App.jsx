import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Chris Griesemer - Voice Over Actor</h1>
        <p>Central Texas | Professional Voice Over since 2001</p>
      </header>

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

      <section id="contact">
        <h2>Contact</h2>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" required style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" required rows="5" style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}></textarea>
          </div>
          <button type="submit" style={{ background: '#ffb347', color: '#232526', padding: '0.7rem 2rem', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Send</button>
        </form>
        <p style={{ marginTop: '2rem' }}>Email: <a href="mailto:chris@voiceforanychoice.com">chris@voiceforanychoice.com</a></p>
        <p>Location: Central Texas</p>
      </section>
    </div>
  )
}

export default App
