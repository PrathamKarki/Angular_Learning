import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './home/component/header/header';
import { Footer } from './home/component/footer/footer';

@Component({
  imports: [RouterOutlet, RouterLink, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  imgBanner: string = '/banner.png';
}