import '../CSS/footer.css'

export default function Footer() {
  return (
    <footer className='m-0'>
      <div class="footer">
        <div class="heading">
          <h2>
            VIJAY<sup>™</sup>
          </h2>
        </div>
        <div class="content">
          <div class="services">
            <h4>Services</h4>
            <p>
              <a href="#">App development</a>
            </p>
            <p>
              <a href="#">Web development</a>
            </p>
            <p>
              <a href="#">DevOps</a>
            </p>
            
          </div>
          <div class="social-media">
            <h4>Social</h4>
            <p>
              <a href="#">
                <i class="fab fa-linkedin"></i> Linkedin
              </a>
            </p>
            <p>
              <a href="#">
                <i class="fab fa-twitter"></i> Twitter
              </a>
            </p>
            <p>
              <a href="https://github.com/farazc60">
                <i class="fab fa-github"></i> Github
              </a>
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
            
            <p>
              <a href="#">Contact</a>
            </p>
          </div>
          <div class="details">
            
            
            <h4 class="mobile">Mobile</h4>
            <p>
              <a href="#">+91-1234567890</a>
            </p>
            <h4 class="mail">Email</h4>
            <p>
              <a href="#">vijay123@gmail.com</a>
            </p>
          </div>
        </div>
        <footer className='m-0 pb-3'>
          <hr />© 2023 codewithVijay.
        </footer>
      </div>
    </footer>
  );
}
