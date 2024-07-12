import { Component, OnInit } from '@angular/core';

interface Deuda {
  numeroDocumento: string;
  empresa: string;
  monto: number;
  fechaVencimiento: Date;
  pagada: boolean;
}

@Component({
  selector: 'app-consultar-deudas',
  templateUrl: './consultar-deudas.component.html',
  styleUrls: ['./consultar-deudas.component.css']
})
export class ConsultarDeudasComponent implements OnInit {
  deudas: Deuda[] = [];
  today: Date = new Date();

  ngOnInit() {
    // Aquí puedes cargar las deudas desde localStorage o algún otro lugar.
  }
}
