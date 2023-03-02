import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  contactoForm: FormGroup;

  constructor(private fb: FormBuilder){

    this.contactoForm = this.fb.group({

        nombre:['', Validators.required],
        correo:['', Validators.required, Validators.email],
        numero:['', Validators.required],
        mensaje:['', Validators.required]
    })

  }
  ngOnInit(): void {

  }
  crearContacto(){
    console.log(this.contactoForm);
    console.log(this.contactoForm.get('nombre'));
  }

}
