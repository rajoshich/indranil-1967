import React, { Component } from 'react';

// import icons and fa

export class  Main extends Component {
  render() {
  return (
    <div className="App">
      <section className="hero">
        < Banner />
      </section>
      < Projects />
      < Details />
      < Testimonials />
      < Contact />
      < Footer />
    </div>

  );
}
}


class Banner extends Component {
  render() {
    return (
      <div>
        <div class="background-image"></div>
        <div class="hero-content-area">
          <h1>Indranil Chakravarty</h1>
          <h3>subtitle</h3>
          <br />
          <a href="#" class="btn">Contact Us Now</a>
        </div>
      </div>
    );
  }
}


class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer-container">
          <p>Images courtesy of
  <a href="http://unsplash.com/">Unsplash</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto molestiae</p>
          <ul>
            <li><a href="#"><i class="fab fa-twitter-square fa-2x"></i></a></li>
            <li><a href="#"><i class="fab fa-facebook-square fa-2x"></i></a></li>
            <li><a href="#"><i class="fab fa-snapchat-square fa-2x"></i></a></li>
            <li><a href="https://github.com/Arronk/responsive-hero-website-template" target="_blank"><i class="fab fa-github-square fa-2x"></i></a></li>
          </ul>
        </div>
      </ footer>
    );
  }
}


class Testimonials extends Component {
  render() {
    return (
      <section class="testimonials">
        <h3 class="title">Testimonials from our adventurers:</h3>
        <hr />
        <p class="quote">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quae modi deserunt pariatur debitis similique repudiandae
perspiciatis sunt minima, culpa a sint aut dignissimos magnam est enim non corrupti. Suscipit?</p>
        <p class="author"><em>-Aza</em></p>
        <p class="quote">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores officia veniam inventore cumque suscipit quam optio
molestiae repellat delectus commodi totam dicta sint voluptatem, esse excepturi a. Voluptate, quam tenetur.</p>
        <p class="author"><em>-Taza</em></p>
        <p class="quote">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, vel sit. Dolorum doloribus necessitatibus enim laboriosam
tempora adipisci deserunt excepturi sit, explicabo aliquam fugiat mollitia itaque at pariatur molestias quos!</p>
        <p class="author"><em>-Lockie</em></p>
      </section>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <section class="destinations">
        <h3 class="title">Some of my recent projects:</h3>
        < hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum soluta et voluptas nam ab vel quibusdam, at, veritatis
        enim repellendus quo modi veniam vero rerum beatae impedit. Aliquam, quae! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sint, saepe! Sequi laudantium eos facilis rerum quo deserunt eligendi impedit ipsam voluptate. Quaerat
      impedit ducimus itaque facilis voluptate similique nobis maiores.</p>
        <div class="grid">
          <img src="https://raw.githubusercontent.com/Arronk/responsive-hero-website-template/master/assets/img/mountain1.jpg" class="small" alt="img1" />
          <img src="https://raw.githubusercontent.com/Arronk/responsive-hero-website-template/master/assets/img/mountain2.jpg" class="large" alt="img2" />
          <img src="https://raw.githubusercontent.com/Arronk/responsive-hero-website-template/master/assets/img/mountain3.jpg" class="large" alt="img3" />
          <img src="https://raw.githubusercontent.com/Arronk/responsive-hero-website-template/master/assets/img/mountain4.jpg" class="small" alt="img4" />
        </div>
      </section>
    );
  }
}

class Details extends Component {
  render() {
    return (
      <section class="packages">
        <h3 class="title">Tour Packages</h3>
        <p id="packagepara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit et sapiente consequuntur hic. Aliquam dolorum
    at nihil laborum eos asperiores, maxime deserunt aliquid exercitationem beatae nemo consequuntur, esse nesciunt.</p>
        <hr />

        <ul class="grid">
          <li>
            <i class="fas fa-compass fa-4x"></i>
            <h4>Guided Trips</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nostrum iste inventore excepturi placeat veritatis
        eligendi. Aliquam recusandae fugiat asperiores fuga vero nihil, labore, dolorem eaque nam, soluta tenetur! Accusamus.</p>
          </li>
          <li>
            <i class="fas fa-camera-retro fa-4x"></i>
            <h4>Photo Trips</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, delectus hic? Distinctio architecto animi ex
        fugiat, modi soluta! Facere doloribus eligendi blanditiis officia vel veniam quasi voluptates error? Nam, voluptatem.</p>
          </li>
          <li>
            <i class="fas fa-bicycle fa-4x"></i>
            <h4>Biking Trips</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum recusandae architecto natus perferendis asperiores
            id repellendus, corporis itaque quod, ut, mollitia nam labore consequuntur excepturi sed laudantium. Eaque, voluptates
            rem.
      </p>
          </li>
          <li>
            <i class="fas fa-flag-checkered fa-4x"></i>
            <h4>Racing Trips</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam minima, est, praesentium facilis dignissimos accusamus
        quidem impedit eveniet laborum inventore ipsum vero aut fugit amet ad, earum repudiandae eligendi asperiores.</p>
          </li>
        </ul>
      </section>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <section class="contact">
        <h3 class="title">Learn more</h3>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem enim natus neque doloribus dolores, quisquam, laborum quaerat
      deserunt soluta nam voluptates ratione, provident laboriosam ipsum porro dolorem reprehenderit eos. Sunt!</p>
      </section>
    );
  }
}

export default Main;
