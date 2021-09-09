import React from 'react';
import web from './LogoPs.JPG'; 
import web1 from './human.png';
const About = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> About Us </h1>
        <div class="card mb-5">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={web} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Psycology Project</h5>
        <p class="card-text">Game and survey website to test and analyse risk-taking behaviour among youth. The PhD project by Ms. Kirti Tyagi under Dr. Kamlesh Singh involves creating games to test user behaviour and analysing the responses received.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<h1>Creator:</h1>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={web1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Dr. Kamlesh Singh</h5>
        <p class="card-text">He supported and guided us.</p>
        </div>
    </div>
  </div>
</div>
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={web1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Ms. Kirti Tyagi</h5>
        <p class="card-text">She made the forms and made the work completed</p>
      </div>
    </div>
  </div>
</div>
<h1>Team:</h1>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={web1} class="card-img-top" alt="..." width="70" height="150"/>
      <div class="card-body">
        <h5 class="card-title">Sourav Sir</h5>
        <p class="card-text">hello Hello Hi</p>
        <a href="#" class="btn btn-primary">Portfolio</a>
      </div>
      </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={web1} class="card-img-top" alt="..." width="70" height="150"/>
      <div class="card-body">
        <h5 class="card-title">Himanshu Sir</h5>
        <p class="card-text">hello Hello Hi</p>
        <a href="#" class="btn btn-primary">Portfolio</a>
      </div>
      </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={web1} class="card-img-top" alt="..." width="70" height="150"/>
      <div class="card-body">
        <h5 class="card-title">Animesh</h5>
        <p class="card-text">hello Hello Hi</p>
        <a href="#" class="btn btn-primary">Portfolio</a>
      </div>
      </div>
  </div>
</div>
      </div>
    </>
  );
}

export default About;
