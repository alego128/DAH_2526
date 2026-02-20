import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonList, IonListHeader, IonItem, IonLabel, IonToggle, IonInput,
  IonButtons, IonButton, IonIcon 
} from '@ionic/angular/standalone';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonButton, IonIcon,
    IonList, IonListHeader, IonItem, IonLabel, IonToggle, IonInput,
    FormsModule
  ]
})
export class AjustesPage implements OnInit {

  modoOscuro: boolean = false;
  nombreUsuario: string = '';
  arrowBackOutline = arrowBackOutline;

  constructor(private router: Router, private settingsService: SettingsService) { }

  async ngOnInit() {
    // Cargar ajustes guardados
    this.modoOscuro = await this.settingsService.get('modo_oscuro') || false;
    this.nombreUsuario = await this.settingsService.get('nombre_usuario') || '';
    this.aplicarTema(this.modoOscuro);
  }

  // Cambiar modo oscuro
  async cambiarModoOscuro() {
    await this.settingsService.set('modo_oscuro', this.modoOscuro);
    this.aplicarTema(this.modoOscuro);
  }

  // Cambiar nombre de usuario
  async cambiarNombre() {
    if (this.nombreUsuario.trim().length === 0) return;
    await this.settingsService.set('nombre_usuario', this.nombreUsuario);
  }

  aplicarTema(esOscuro: boolean) {
    document.body.classList.toggle('dark', esOscuro);
  }

  volverHome() {
    this.router.navigate(['']);
  }
}
