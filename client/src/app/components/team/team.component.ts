
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent {
  team = [
    {
      name: 'Alejandro Laborde',
      role: 'Lead Developer',
      image: '/attached_assets/Alejandro_Laborde.jpg'
    },
    {
      name: 'Matias Palmieri',
      role: 'Solutions Architect',
      image: '/attached_assets/Matias_Palmieri.HEIC'
    },
    {
      name: 'Cristian Celano',
      role: 'Technical Director',
      image: '/attached_assets/Cristian_Celano.HEIC'
    }
  ];
}
