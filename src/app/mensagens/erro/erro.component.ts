import { Component } from '@angular/core';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})
export class ErroComponent {

  public error: string;
  setError(error: string, tempo: number = 5000) {
    this.error = error;
    setTimeout(() => {
      this.error = null;
    }, tempo);
  }

}
