import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;  
  serverCreationStatus = 'Server NOT created!';
  serverName = 'Demo of 2-way binding';
  username = '';
  buttonDisabled = true;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  //event binding function
  onCreateServer() {
    this.serverCreationStatus = 'Server IS successfully created! The server name is ' + this.serverName;
  }

  //event binding function
  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // onInputUsername() {
  //   if(this.username) {
  //     this.buttonDisabled = false;
  //   }
  // }

  onResetUsername() {
    this.username = '';
  }


}
