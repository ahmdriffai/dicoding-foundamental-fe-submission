class FooterBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <style>
        .footer {
          width: 100%;
          position: relative;
          bottom: 0;
        }
      </style>
      <div class="mt-5 footer">
      
        <section class="">
        <!-- Footer -->
        <footer class="text-center text-white bg-primary">
               
          <!-- Copyright -->
          <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2022 Copyright:
            <a class="text-white" href="#">Ahmad Rifai</a>
          </div>
          <!-- Copyright -->
        </footer>
        <!-- Footer -->
      </section>
        
      </div>
      `;
    }
  }
  
  customElements.define('footer-bar', FooterBar);
  