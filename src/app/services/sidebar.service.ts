import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Enviar documentos',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Archivos', url: '/' },
        // { titulo: 'automatiza-firmas', url: 'automatiza-firmas' },
        // { titulo: 'mis-documentos', url: 'mis-documentos' },
        // { titulo: 'mis-contactos', url: 'mis-contactos' },
        // { titulo: 'enviar-documentos', url: 'enviar-documentos' },
        // { titulo: 'habilitar-firmas', url: 'habilitar-firmas' },
     
      ]
    },
  ];

  constructor() { }
}
