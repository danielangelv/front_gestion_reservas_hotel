// formulario.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup = new FormGroup({}); // Asignamos un valor inicial vacío al FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nombreHotel: ['', Validators.required],
      capacidadReservas: ['', Validators.required],
      telefonoHotel: ['', Validators.required],
      direccionHotel: ['', Validators.required],
      correoHotel: ['', [Validators.required, Validators.email]],
      numHabitaciones: ['', Validators.required]
    });
  }

  // Método para obtener los valores del formulario
  onSubmit() {
    if (this.formulario.valid) {
      // Realizar las acciones necesarias con los datos del formulario
      console.log(this.formulario.value);
    }
  }
}

