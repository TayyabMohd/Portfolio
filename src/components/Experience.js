import checkmarkImage from "./check2.png";
import "./style.css";
function Experience() {
  return (
    <div>
      <section
        id="experience"
        style={{
          backgroundColor: "black",
          paddingBottom: "100px",
          paddingTop: "150px",
        }}
      >
        <p className="section__text__p1" style={{ color: "royalblue" }}>
          My
        </p>
        <h1 className="title" style={{ color: "royalblue" }}>
          Experience
        </h1>
        <div
          className="experience-details-container"
          style={{ color: "slateblue" }}
        >
          <div className="about-containers">
            <div className="details-container">
              <h2
                className="experience-sub-title"
                style={{ color: "mediumpurple" }}
              >
                Frontend Development
              </h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmarkImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>

                <article>
                  <img
                    src={checkmarkImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Bootstrap</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Java</h3>
                    <p>Advanced</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2
                className="experience-sub-title"
                style={{ color: "mediumpurple" }}
              >
                Frontend Development
              </h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmarkImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Php</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Novice</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
