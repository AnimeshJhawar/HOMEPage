import React from "react";
import web from "./about_image.jpeg";
const About = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> About Us </h1>
        <div class="card mb-5">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={web} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Youth & Risk-Taking: Know Your Risk Type?</h5>
                <p class="card-text">
                We, at the psychology lab of IIT Delhi, are exploring why certain people engage in impulsive and self-harmful behavior, while others engage in profitable and creative risk behaviors and what personality, cognitive and positive factors are unique within both.</p>
              </div>
            </div>
          </div>
        </div>
        <h1> PI and Co-PI</h1>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Dr. Kamlesh Singh</h5>
                <p class="card-text">
                  Professor (Psychology) <br />
                  Department of Humanities and Social Sciences, Indian Institute
                  of Technology Delhi
                  <br />
                  singhk@hss.iitd.ac.in{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Ms. Kirti Tyagi</h5>
                <p class="card-text">
                  PhD Scholar, Psychology <br />
                  Department of Humanities and Social Sciences,Indian Institute
                  of Technology Delhi
                  <br />
                  huz188109@hss.iitd.ac.in
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1> Design and Development Team:</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Saurav Mittal</h5>
                <p class="card-text">
                  Bachelor of Technology
                  <br />
                  Department of Chemical Engineering
                  <br />
                  Indian Institute of Technology Delhi
                  <br />
                  ch1180243@iitd.ac.in
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Himanshu Anuragi</h5>
                <p class="card-text">
                  Bachelor of Technology
                  <br />
                  Department of Biochemical Engineering and Biotechnology
                  <br />
                  Indian Institute of Technology Delhi
                  <br />
                  bb1190025@iitd.ac.in
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Animesh Jhawar</h5>
                <p class="card-text">
                  Bachelor of Technology
                  <br />
                  Department of Electrical Engineering <br />
                  Indian Institute of Technology Delhi
                  <br />
                  ee1200468@iitd.ac.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
