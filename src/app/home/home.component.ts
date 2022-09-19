import { Component,  } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  //atributos=variables.

 nombre:String="juan"
 edad:number=33

 numeros:number[]=[1,2,3,4,5,6,7,8,9,10]

 /*personajes:any[]=["https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/homero.jpg?alt=media&token=50889169-a831-46ec-adef-196001a2b581","https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/lisa.jpeg?alt=media&token=b6f69bf3-ffa2-49ac-842e-36a5af7a42ac","https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/magie.png?alt=media&token=468eaf2b-0faa-4db6-8139-9318313423a6","https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/marge.jpg?alt=media&token=c574c20f-cfd7-4e1c-bb77-13cd4ba8ae9e","https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/bart.png?alt=media&token=bb21b8e7-62b2-40ec-97b7-c31c1fa96766"]*/

  personajes: Personaje[]=[
    {"nombre":"homero",
    "edad":34,
    "foto":"https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/homero.jpg?alt=media&token=50889169-a831-46ec-adef-196001a2b581"},
    {"nombre":"Marge","edad":34,"foto":"https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/lisa.jpeg?alt=media&token=b6f69bf3-ffa2-49ac-842e-36a5af7a42ac"},
    {"nombre":"bart",
    "edad":10,
    "foto":"https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/magie.png?alt=media&token=468eaf2b-0faa-4db6-8139-9318313423a6"},
    {"nombre":"Lisa",
    "edad":8,
    "foto":"https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/marge.jpg?alt=media&token=c574c20f-cfd7-4e1c-bb77-13cd4ba8ae9e"},
    {"nombre":"Magie",
    "edad":2,
    "foto":"https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/bart.png?alt=media&token=bb21b8e7-62b2-40ec-97b7-c31c1fa96766"}


  ]


  constructor() { }


}
