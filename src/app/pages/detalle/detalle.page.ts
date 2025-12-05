import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Receta } from 'src/app/interfaces/receta';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    CommonModule,
    FormsModule
  ]
})
export class DetallePage implements OnInit {

  receta!: Receta;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = history.state.receta;

    if (data) {
      this.receta = data;
    } else {
      console.error("❌ No llegó ninguna receta a la página detalle.");
    }
  }
}
