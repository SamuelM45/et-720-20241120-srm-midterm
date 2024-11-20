import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="container">
      <div class="row">
        <p class="col-sm-4">&copy; 2016 Skillfair</p>
        <ul class="col-sm-8">
          <li class="col-sm-1">
            <img src="https://content.codecademy.com/projects/make-a-website/lesson-4/twitter.svg" alt="Twitter">
          </li>
          <li class="col-sm-1">
            <img src="https://content.codecademy.com/projects/make-a-website/lesson-4/facebook.svg" alt="Facebook">
          </li>
          <li class="col-sm-1">
            <img src="https://content.codecademy.com/projects/make-a-website/lesson-4/instagram.svg" alt="Instagram">
          </li>
          <li class="col-sm-1">
            <img src="https://content.codecademy.com/projects/make-a-website/lesson-4/medium.svg" alt="Medium">
          </li>
        </ul>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {}
