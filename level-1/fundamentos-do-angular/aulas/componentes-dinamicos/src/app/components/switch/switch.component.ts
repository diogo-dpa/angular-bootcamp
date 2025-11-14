import { Component } from '@angular/core';

type UserRole = 'admin' | 'editor' | 'visitor';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
})
export class SwitchComponent {
  userRole: UserRole = 'visitor';

  setUserRole(role: UserRole) {
    this.userRole = role;
  }
}
