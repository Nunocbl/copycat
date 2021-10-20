import { Component, OnInit } from '@angular/core';

export interface Manufacturer{
    name:string,
    url:string,
}

@Component({
  selector: 'brand-manager-page',
  templateUrl: './brand-manager-page.component.html',
  styleUrls: ['./brand-manager-page.component.scss']
})
export class BrandManagerPage implements OnInit {

    enableEdit: boolean = false
    selectedBrand: string = ''
    manufacturers:Manufacturer[] = [
        {
            name: 'AMBUTECH',
            url: 'https://ambutech.com/'
        },
        {
            name: 'Freedom Scientific',
            url: 'https://www.freedomscientific.com/'
        },
    ]

  constructor() { }

  ngOnInit(): void {
  }

  submitBrand(value:any){
      console.log(value)

  }

  editBrand(value:any){
      console.log(value)

  }

  removeBrand(brandPosition:string){

    //   this.manufacturers.splice(brandPosition, 1)


  }



}
