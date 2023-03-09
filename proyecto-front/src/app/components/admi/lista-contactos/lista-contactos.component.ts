import { Component, OnInit } from '@angular/core';
import { crearContacto } from 'src/app/models/modeloContacto';
import { ContactoService } from 'src/app/service/contactoservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  listaContactos: crearContacto [] = [];

  constructor(private _contactoService: ContactoService) { }

  ngOnInit(): void {
    this.obtenerContactos()
  }


  obtenerContactos() {
    this._contactoService.getContactos().subscribe(data => {
      console.log(data)
      this.listaContactos = data
    }, error => console.log(error))
  }

  eliminarContacto(id:any){
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
          this._contactoService.deleteContacto(id).subscribe(data => {
              Swal.fire({
                  icon: 'success',
                  title: 'Producto eliminado',
              })
              this.obtenerContactos()
          })

      }
  })
}
  }
