import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  username: string = '';
  password: string = '';
  role: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('')
    });
  }

  onFormSubmit(){
      this.username = this.loginForm.value.username;
      this.password = this.loginForm.value.password;
      this.role = this.loginForm.value.role;

      if(this.role == "customer") {
        this.loginService.loginAsCustomer(this.username,this.password).subscribe({
          next : (data)=>{
              localStorage.setItem('username',data.username);
              localStorage.setItem('firstName',data.firstName);
              localStorage.setItem('lastNmae',data.lastName);
              localStorage.setItem('role',this.role);
              this.router.navigateByUrl('/search');
          },
          error: (e)=> { }
        });
      } else 
      if(this.role == "vendor") {
        this.loginService.loginAsVendor(this.username,this.password).subscribe({
          next : (data)=>{
              localStorage.setItem('username',data.username);
              localStorage.setItem('name',data.name);
              localStorage.setItem('role',this.role);
              this.router.navigateByUrl('/generate');
          },
          error: (e)=> { }
        });
      }
  }

}