import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'El Heteropatriarcado';
  nombre:string = 'Santi Abascal';
  edad: number = 42;

  getName(): string{
return this.title+" feat. "+this.nombre+". Un jovenzuelo de "+this.edad+" años.";
  }
}

