import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule],
  templateUrl: './cocktails-list.page.html',
  styleUrls: ['./cocktails-list.page.scss'],
})
export class CocktailsListPage implements OnInit {

  cocktails: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCocktails();
  }

  loadCocktails() {
    this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .subscribe((data: any) => {

        console.log('Cocktails data:', data);

        // Validar que venga un arreglo válido
        if (!data || !Array.isArray(data.drinks)) {
          this.cocktails = [];
          return;
        }

        this.cocktails = data.drinks;
      });
  }

  openDetail(id: string) {
    console.log('ID seleccionado:', id);

    if (!id) {
      alert('No se pudo obtener el ID del cóctel');
      return;
    }

    this.router.navigate(['/cocktail', id]);
  }

}
