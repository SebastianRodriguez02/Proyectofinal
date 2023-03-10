import { Component, OnInit } from '@angular/core';
import { iniciarSesion } from 'src/app/models/modelregistro';
import { RegistroService } from 'src/app/service/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{

  listaUsuarios : iniciarSesion [] =[];

  constructor(private _registroService: RegistroService){ }

  ngOnInit(): void {
    this.obtenerUsuarios()
  }


  obtenerUsuarios() {
    this._registroService.getRegistros().subscribe(data => {
      console.log(data)
      this.listaUsuarios = data
    }, error => console.log(error))
  }

  eliminarUsuario(id:any){
    Swal.fire({
      title: 'Esta seguro que desea eliminar el contacto?',
      text: "Esta accion no sera reversible",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
  }).then((result) => {
      if (result.isConfirmed) {
          this._registroService.deleteRegistro(id).subscribe(data => {
              Swal.fire({
                  icon: 'success',
                  title: 'Usuario eliminado',
              })
              this.obtenerUsuarios()
          })

      }
  })
}

}
