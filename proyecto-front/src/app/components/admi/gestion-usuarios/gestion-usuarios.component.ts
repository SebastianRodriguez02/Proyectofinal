
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroService } from 'src/app/service/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent {
  tituloComponente: string = 'Obtener'
  usuarioForm: FormGroup
  regexNumero = /^[0-9]+$/;
  id: string | null

  constructor(private fb: FormBuilder, private _registroService: RegistroService, private router: Router, private idRoute: ActivatedRoute) {
      this.usuarioForm = this.fb.group({
        nombre:['', Validators.required],
        apellido: ['', Validators.required],
        numero: ['', Validators.required],
        nombreMascota: ['', Validators.required],
        tipo: ['', Validators.required],
        contrasena: ['', Validators.required],
        retificacionContra: ['', Validators.required],


      })
      this.id = this.idRoute.snapshot.paramMap.get('id')

  }
  ngOnInit(): void {
      this.accionSolicitada()

  }

  enviarInformacion() {
      if (this.id == null){
        //crear usuario
        this._registroService.postRegistro(this.usuarioForm.value).subscribe(data => {
          Swal.fire({
              icon: 'success',
              title: 'Usuario guardado',

          })
          this.router.navigate(['/gestionusuarios'])

      }, error => {
          console.log(error)
      })
      }else{
         // actualizar usuario
       this._registroService.putRegistro(this.id, this.usuarioForm.value).subscribe(data =>{
        Swal.fire({
          icon: 'success',
          title: 'Usuario actualizado',

      })
      this.router.navigate(['/listausuarios'])
       }, error => {

    })
      }

  }
  accionSolicitada() {
      if (this.id !== null)
          this.tituloComponente = 'Modificar'
      this._registroService.getRegistro(this.id).subscribe(data => {
          this.usuarioForm.setValue({
              nombre: data.nombre,
              apellido: data.correo,
              numero: data.numero,
              nombreMascota: data.nombreMascota,
              tipo: data.tipo,
              contrasena: data.contrasena,
              retificacionContra: data.retificacionContra

          })
      })
  }
}


