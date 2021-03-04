import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'First';
  allUser: IUser[] = [];
  userObj={
    name: '',
    password: '',
    id: -1,
    mobile :'',
    email :''
  }
  isEdit =false;


  constructor(private commonService: CommonService) { }
  ngOnInit() {
    this.getLatestUser();
  }
  addUser(formValue: IUser) {
    console.log(formValue);
    this.commonService.createUser(formValue).subscribe((response) => {
      this.getLatestUser();
    })  
  }
  getLatestUser() {
    this.commonService.getAllUser().subscribe((response: IUser[]) => {
      this.allUser = response;
    });
  }
  updateUser(formValue :IUser){
    this.isEdit=true
    this.userObj=formValue;
  }
  deleteUser(formValue :IUser){
    
    this.commonService.deleteUser(formValue).subscribe(()=>{
      this.getLatestUser();
    })
  }
  editUser(){
    this.isEdit=!this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser()
    })
  }
}
