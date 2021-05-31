import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthentificationService } from '../authentification.service';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
    selector: 'app-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.css'],
})
export class LoginDialogComponent implements OnInit {
    constructor(private authentificationService: AuthentificationService) {}

    submit(login: string, password: string) {
        this.authentificationService.signIn(login, password);
    }

    @Output() myEvent = new EventEmitter<string>();
    callParent() {
        this.myEvent.emit('eventDesc');
    }

    ngOnInit(): void {}
}
