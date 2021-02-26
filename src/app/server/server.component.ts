import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .serverOnline {
            color: blue;
            font-size: 20px;
        }
    `]
    
    // template: `
    //     <p>The first server component</p>
    //     <p>The second server component</p>
    // `
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}