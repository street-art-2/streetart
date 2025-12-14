class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #050a16;
          color: #94a3b8;
          padding: 4rem 2rem;
          border-top: 1px solid rgba(234, 179, 8, 0.1);
        }
        
        .footer-container {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #facc15;
          margin-bottom: 1rem;
        }
        
        .footer-logo-icon {
          margin-right: 0.5rem;
        }
        
        .footer-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          color: #94a3b8;
          transition: color 0.3s ease;
        }
        
        .social-link:hover {
          color: #facc15;
        }
        
        .footer-heading {
          color: white;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: #facc15;
        }
        
        .copyright {
          max-width: 1440px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(234, 179, 8, 0.1);
          text-align: center;
        }
      </style>
      <div class="footer-container">
        <div class="footer-col">
          <div class="footer-logo">
            <i data-feather="shield" class="footer-logo-icon"></i>
            STREET ART
          </div>
          <p class="footer-description">
            Before there was graffiti, there were warriors. Now they return, reborn in neon and chaos.
          </p>
          <div class="social-links">
            <a href="#" class="social-link">
              <i data-feather="twitter"></i>
            </a>
          
            <a href="#" class="social-link">
              <i data-feather="discord"></i>
            </a>
           
          </div>
        </div>
        
       
        
      
        
      
      <div class="copyright">
        &copy; ${new Date().getFullYear()} Street Art Warriors. All rights reserved.
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);