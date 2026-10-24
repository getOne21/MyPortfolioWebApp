import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  siAngular,
  siDocker,
  siDotnet,
  siFastify,
  siGit,
  siJavascript,
  siKubernetes,
  siMongodb,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSpringboot,
  siSwift,
  siTerraform,
  siTypescript,
  siVuedotjs,
} from 'simple-icons';
import { MotionPreferenceService } from '../../services/motion-preference.service';
import { TranslationService } from '../../services/translation.service';

interface TechLogo {
  name: string;
  icon?: { hex: string; path: string };
  mark?: string;
  color?: string;
}

@Component({
  selector: 'app-about',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './about.scss'
})
export class About {
  private ts = inject(TranslationService);
  private motion = inject(MotionPreferenceService);
  t = this.ts.t;
  reducedMotion = this.motion.reduced;

  readonly backend  = ['C#', '.NET / ASP.NET', 'Java', 'Spring Boot', 'Node.js', 'Fastify', 'Python', 'PostgreSQL', 'MongoDB', 'Azure Cosmos DB', 'REST APIs', 'SQL'];
  readonly frontend = ['JavaScript', 'TypeScript', 'Angular', 'React', 'Vue.js', '.NET MAUI', 'Swift', 'HTML5 / CSS3', 'SCSS'];
  readonly tools    = ['Azure', 'AWS', 'Terraform', 'Kubernetes', 'Azure Bicep', 'Docker', 'Microservices', 'CI / CD', 'Agile / Scrum', 'Git'];

  readonly marqueeCopies = [false, true];
  readonly techLogos: TechLogo[] = [
    { name: 'C# / .NET', icon: siDotnet },
    { name: 'Java', mark: 'J', color: '#ed8b00' },
    { name: 'Spring Boot', icon: siSpringboot },
    { name: 'Node.js', icon: siNodedotjs },
    { name: 'Fastify', icon: siFastify },
    { name: 'Python', icon: siPython },
    { name: 'PostgreSQL', icon: siPostgresql },
    { name: 'MongoDB', icon: siMongodb },
    { name: 'Azure Cosmos DB', mark: 'DB', color: '#0078d4' },
    { name: 'JavaScript', icon: siJavascript },
    { name: 'TypeScript', icon: siTypescript },
    { name: 'Angular', icon: siAngular },
    { name: 'React', icon: siReact },
    { name: 'Vue.js', icon: siVuedotjs },
    { name: '.NET MAUI', icon: siDotnet },
    { name: 'Swift', icon: siSwift },
    { name: 'Azure', mark: 'AZ', color: '#0078d4' },
    { name: 'AWS', mark: 'AWS', color: '#ff9900' },
    { name: 'Terraform', icon: siTerraform },
    { name: 'Kubernetes', icon: siKubernetes },
    { name: 'Docker', icon: siDocker },
    { name: 'Git', icon: siGit },
  ];

  logoColor(hex: string): string {
    return hex === '000000' || hex === '0F0F11' ? 'var(--text-primary)' : `#${hex}`;
  }
}
