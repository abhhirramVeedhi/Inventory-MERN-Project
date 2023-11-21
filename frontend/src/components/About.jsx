import React from "react";
import './About.css'
import bgimg from  "../assets/bg.jpg"

function About() {

  const divStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
  return (
    <section className="section-white" style={divStyle}>
      <div className="container"  >
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title"><i FaBlog className='inline-block'></i>Inventory IQ</h2>
            <p className="section-subtitle">
              Our project is about an inventory management system called <strong>Inventory IQ</strong>.
              Our team members contributed to making this a successful reality.
            </p>
          </div>
          <div className="col-sm-5 col-md-2">
            <div className="team-item">
              <img src="./image/img.jpg" className="team-img" alt="pic" />
              <h3>KANCHERLA NAGA V SHANMUKA DIWAKAR</h3>
              <div className="team-info"><p>21BIT2722</p></div>
              <p>BACK END<br /></p>
            </div>
          </div>

          <div class="col-sm-3 col-md-2">

            <div class="team-item">

              <img src="./image/img3.jpg" class="team-img" alt="pic" />

              <h3>VEEDHI  ABHHIRRAM</h3>

              <div class="team-info"><p>21BIT0627</p></div>

              <p>BACK END<br /><br /><br /></p>

            </div>

          </div>
          <div class="col-sm-3 col-md-2">

            <div class="team-item">

              <img src="./image/img5.jpg" class="team-img" alt="pic" />

              <h3>ARABELLY ADITHYA <br />RAO </h3>

              <div class="team-info"><p>21BCE3817</p></div>

              <p>FRONT END<br /><br /></p>


            </div>

          </div>
          <div class="col-sm-3 col-md-2">
            <div class="team-item">
              <img src="./image/img2.jpg" class="team-img" alt="pic" />
              <h3>PIDUGU VENKATA VAMSI MUKESH </h3>
              <div class="team-info"><p>21BCE3785</p></div>
              <p>FRONT END<br /><br /><br /></p>

            </div>
          </div>
          <div class="col-sm-3 col-md-2">
            <div class="team-item">
              <img src="./image/img4.jpg" class="team-img" alt="pic" />
              <h3>SOMANNAGARI  RISHIKESAVA REDDY</h3>
              <div class="team-info"><p>21BCE2722</p></div>
              <p>FRONT END<br /><br /></p>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}

export default About;

