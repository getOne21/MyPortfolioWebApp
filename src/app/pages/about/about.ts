import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  private ts = inject(TranslationService);
  t = this.ts.t;

  readonly backend  = ['C#', '.NET / ASP.NET', 'Java', 'Spring Boot', 'REST APIs', 'SQL'];
  readonly frontend = ['Angular', 'React', 'Vue.js', 'TypeScript', 'HTML5 / CSS3', 'SCSS'];
  readonly tools    = ['Terraform', 'Azure Bicep', 'Docker', 'Microservices', 'CI / CD', 'Agile / Scrum', 'Git'];
}
