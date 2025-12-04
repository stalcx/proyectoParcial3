import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule],
  templateUrl: './cocktail-detail.page.html',
  styleUrls: ['./cocktail-detail.page.scss']
})
export class CocktailDetailPage implements OnInit {

  cocktail: any = null;
  ingredients: string[] = [];
  loading = false;
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.loadDetail(id);
  }

  loadDetail(id: string) {
    this.loading = true;
    this.errorMsg = '';
    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe({
        next: (data: any) => {
          this.cocktail = data?.drinks?.[0] ?? null;
          if (this.cocktail) {
            this.extractIngredients();
          } else {
            this.errorMsg = 'Cocktail not found';
          }
          this.loading = false;
        },
        error: (err) => {
          console.error('Error loading detail', err);
          this.errorMsg = 'Error loading detail';
          this.loading = false;
        }
      });
  }

  extractIngredients() {
    this.ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ing = this.cocktail[`strIngredient${i}`];
      const mea = this.cocktail[`strMeasure${i}`];
      if (ing) this.ingredients.push(`${ing}${mea ? ' - ' + mea.trim() : ''}`);
    }
  }

}
