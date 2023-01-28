import { Component } from '@angular/core';
import { CrudService } from '../../auth/shared/crud.service';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  

  client:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetUserclient().subscribe(res => {
      console.log(res)
      this.client =res;
    });    
  }
 
  deleteUserclient(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteUserclient(id).subscribe((res) => {
        this.client.splice(i, 1);
      })
    }
  }
      

}
