
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoService } from 'src/app/service/contactoservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-contacto',
  templateUrl: './gestion-contacto.component.html',
  styleUrls: ['./gestion-contacto.component.css']
})
export class GestionContactoComponent  implements OnInit {
    tituloComponente: string = 'Obtener'
    contactoForm: FormGroup
    regexNumero = /^[0-9]+$/;
    id: string | null

    constructor(private fb: FormBuilder, private _contactoService: ContactoService, private router: Router, private idRoute: ActivatedRoute) {
        this.contactoForm = this.fb.group({
            nombre: ['', Validators.required],
            correo: ['', Validators.required],
            numero: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
            mensaje: ['', Validators.required],

        })
        this.id = this.idRoute.snapshot.paramMap.get('id')

    }
    ngOnInit(): void {
        this.accionSolicitada()

    }

    enviarInformacion() {
        if (this.id == null){
          //crear contacto
          this._contactoService.postContacto(this.contactoForm.value).subscribe(data => {
            Swal.fire({
                icon: 'success',
                title: 'Contacto guardado',

            })
            this.router.navigate(['/gestioncontactos'])

        }, error => {
            console.log(error)
        })
        }else{
           // actualizar Contacto
         this._contactoService.putContacto(this.id, this.contactoForm.value).subscribe(data =>{
          Swal.fire({
            icon: 'success',
            title: 'Contacto actualizado',

        })
        this.router.navigate(['/listacontactos'])
         }, error => {

      })
        }

    }
    accionSolicitada() {
        if (this.id !== null)
            this.tituloComponente = 'Modificar'
        this._contactoService.getContacto(this.id).subscribe(data => {
            this.contactoForm.setValue({
                nombre: data.nombre,
                correo: data.correo,
                numero: data.numero,
                mensaje: data.mensaje
            })
        })
    }
}


