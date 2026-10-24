import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './about.scss'
})
export class About {
  private ts = inject(TranslationService);
  t = this.ts.t;

  readonly backend  = ['C#', '.NET / ASP.NET', 'Java', 'Spring Boot', 'Fastify', 'Python', 'PostgreSQL', 'MongoDB', 'Azure Cosmos DB', 'REST APIs', 'SQL'];
  readonly frontend = ['Angular', 'React', 'Vue.js', 'TypeScript', '.NET MAUI', 'Swift', 'HTML5 / CSS3', 'SCSS'];
  readonly tools    = ['Azure', 'AWS', 'Terraform', 'Kubernetes', 'Azure Bicep', 'Docker', 'Microservices', 'CI / CD', 'Agile / Scrum', 'Git'];
}
