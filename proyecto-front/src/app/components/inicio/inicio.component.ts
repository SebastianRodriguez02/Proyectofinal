import { Component, OnInit } from '@angular/core';
import {ContactoService} from 'src/app/service/contactoservice.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  tituloComponente: string = 'Crear'
  contactoForm: FormGroup;
  regexNumero = /^[0-9]+$/;

  constructor(private fb: FormBuilder, private _contatoService:ContactoService){

    this.contactoForm = this.fb.group({

        nombre:['', Validators.required],
        correo:['', [Validators.required, Validators.email]],
        numero:['', [Validators.required, Validators.pattern(this.regexNumero)]],
        mensaje:['', Validators.required]
    })

  }
  ngOnInit(): void {

  }
  crearContacto(){
    console.log(this.contactoForm);
    this._contatoService.postContacto(this.contactoForm.value).subscribe(data=>{
      console.log("archivo subido")

    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }

}
