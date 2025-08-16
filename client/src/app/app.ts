import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private http = inject(HttpClient);
  protected title = 'Dating App';
  protected members = signal<any>([]);

  async ngOnInit() {
    this.members.set(await this.getMembers());
  }
  // before using func getMembers
  // ngOnInit(): void {
  //   this.http.get('https://localhost:5001/api/Members').subscribe({
  //     next: (response) => this.members.set(response),
  //     error: (error) => console.error(error),
  //       complete: () => console.log('Request complete')
  //     });
  // }
  async getMembers() {
    try {
      return lastValueFrom(this.http.get('https://localhost:5001/api/Members'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
