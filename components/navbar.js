class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(5, 10, 22, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(234, 179, 8, 0.1);
          transition: all 0.3s ease;
        }
        
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          max-width: 1440px;
          margin: 0 auto;
        }
        
        .logo {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 1.5rem;
          color: #facc15;
          text-decoration: none;
        }
        
        .logo-icon {
          margin-right: 0.5rem;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #facc15;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #facc15;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="index.html" class="logo">
          <i data-feather="shield" class="logo-icon"></i>
          STREET ART
        </a>
        <div class="nav-links">
          <a href="index.html#story" class="nav-link">Story</a>
          <a href="index.html#explore" class="nav-link">Warriors</a>
          <a href="index.html#lore" class="nav-link">Lore</a>
          <a href="index.html#roadmap" class="nav-link">Roadmap</a>
          <a href="index.html#community" class="nav-link">Community</a>
</div>
<button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);