import { Component, OnInit } from '@angular/core';

interface Deuda {
  numeroDocumento: string;
  empresa: string;
  monto: number;
  fechaVencimiento: Date;
  pagada: boolean;
}

@Component({
  selector: 'app-alertar-vencimiento',
  templateUrl: './alertar-vencimiento.component.html',
  styleUrls: ['./alertar-vencimiento.component.css']
})
export class AlertarVencimientoComponent implements OnInit {
  deudas: Deuda[] = [];
  deudasVencidas: Deuda[] = [];

  ngOnInit() {
    // Aquí puedes cargar las deudas desde localStorage o algún otro lugar.
    this.checkVencimiento();
  }

  checkVencimiento() {
    const today = new Date();
    this.deudasVencidas = this.deudas.filter(deuda =>
      deuda.fechaVencimiento.toDateString() === today.toDateString() && !deuda.pagada
    );
  }
}
