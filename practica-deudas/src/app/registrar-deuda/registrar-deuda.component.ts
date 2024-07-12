import { Component } from '@angular/core';

interface Deuda {
  numeroDocumento: string;
  empresa: string;
  monto: number;
  fechaVencimiento: Date;
}

@Component({
  selector: 'app-registrar-deuda',
  templateUrl: './registrar-deuda.component.html',
  styleUrls: ['./registrar-deuda.component.css']
})
export class RegistrarDeudaComponent {
  deuda: Deuda = {
    numeroDocumento: '',
    empresa: '',
    monto: 0,
    fechaVencimiento: new Date()
  };

  onSubmit() {
    console.log('Deuda registrada:', this.deuda);
    // Aquí puedes agregar lógica para almacenar la deuda en localStorage o en algún otro lugar.
  }
}
