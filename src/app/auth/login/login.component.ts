import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  success: false;
  form : FormGroup


   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
   private crudService: CrudService,
   private http: HttpClient
  ) { 
    this.form = this.formBuilder.group({
     
      email:"",
      password:"",
   
    })
  }
onSubmit() {
  this.http.post('http://localhost:3000/auth/login', this.form.getRawValue, { withCredentials: true }).subscribe(
    (res: any) => {
      // this.success = true;
      console.log(res)
     this.router.navigate(['/admin'])
      location.reload();
    })
  }
}

