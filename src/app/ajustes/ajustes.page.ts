import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonList, IonListHeader, IonItem, IonLabel, IonToggle, 
  IonButtons, IonButton, IonIcon 
} from '@ionic/angular/standalone';
import { arrowBackOutline } from 'ionicons/icons'; // <-- importamos el icono

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonButton, IonIcon,
    IonList, IonListHeader, IonItem, IonLabel, IonToggle,
    FormsModule
  ]
})
export class AjustesPage implements OnInit {

  modoOscuro: boolean = false;
  arrowBackOutline = arrowBackOutline; // <-- declaramos la variable para el HTML

  constructor(private router: Router, private settingsService: SettingsService) { }

  async ngOnInit() {
    this.modoOscuro = await this.settingsService.get('modo_oscuro') || false;
    this.aplicarTema(this.modoOscuro);
  }

  async cambiarModoOscuro() {
    await this.settingsService.set('modo_oscuro', this.modoOscuro);
    this.aplicarTema(this.modoOscuro);
  }

  aplicarTema(esOscuro: boolean) {
    document.body.classList.toggle('dark', esOscuro);
  }

  volverHome() {
    this.router.navigate(['']);
  }
}
