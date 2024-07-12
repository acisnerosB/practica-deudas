import { Component, OnInit } from '@angular/core';

interface Deuda {
  numeroDocumento: string;
  empresa: string;
  monto: number;
  fechaVencimiento: Date;
  pagada: boolean;
}

@Component({
  selector: 'app-marcar-como-pagado',
  templateUrl: './marcar-como-pagado.component.html',
  styleUrls: ['./marcar-como-pagado.component.css']
})
export class MarcarComoPagadoComponent implements OnInit {
  deudas: Deuda[] = [];

  ngOnInit() {
    // Aquí puedes cargar las deudas desde localStorage o algún otro lugar.
  }

  marcarComoPagado(deuda: Deuda) {
    deuda.pagada = true;
    // Aquí puedes actualizar la deuda en localStorage o algún otro lugar.
  }
}
