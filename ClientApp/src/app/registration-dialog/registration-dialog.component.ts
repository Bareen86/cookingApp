import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
    selector: 'app-registration-dialog',
    templateUrl: './registration-dialog.component.html',
    styleUrls: ['./registration-dialog.component.css'],
})
export class RegistrationDialogComponent implements OnInit {
    constructor(private authentificationService: AuthentificationService) {}
    submit(name: string, login: string, password: string) {
        this.authentificationService.signUp(name, login, password);
    }

    @Output() myEvent = new EventEmitter<string>();
    callParent() {
        this.myEvent.emit('eventDesc');
    }

    ngOnInit(): void {}
}
