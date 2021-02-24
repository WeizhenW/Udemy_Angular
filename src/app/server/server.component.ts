import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
    // template: `
    //     <p>The first server component</p>
    //     <p>The second server component</p>
    // `
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
    
    getServerStatus() {
        return this.serverStatus;
    }

}