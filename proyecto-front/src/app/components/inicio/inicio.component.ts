import { Component, OnInit } from '@angular/core';
import {ContactoService} from 'src/app/service/contactoservice.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';


import Swal from 'sweetalert2';

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
      Swal.fire ({
          title: 'Exito!',
          text: 'Su mensaje se a enviado',
          icon: 'success',
          confirmButtonText: 'Vale'
        })
        return this.contactoForm.reset()

    })
  }
  customOptions: OwlOptions = {
    loop: true,
    margin:10,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
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
