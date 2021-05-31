import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor(public LoginDialog: MatDialog, public RegistrationDialog: MatDialog) {}

    openLoginDialog() {
        const dialogRef = this.LoginDialog.open(LoginDialogComponent);
        dialogRef.afterClosed().subscribe((closeReason) => {
            if (closeReason === 'noAccount') {
                this.openRegistrationDialog();
            }
        });
    }
    openRegistrationDialog() {
        const dialogRef = this.RegistrationDialog.open(RegistrationDialogComponent);
        dialogRef.afterClosed().subscribe((closeReason) => {
            if (closeReason === 'AccountExist') {
                this.openLoginDialog();
            }
        });
    }
}
