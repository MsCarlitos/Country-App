import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  public countries:Countries[] = [];
  constructor( private countriesService: CountriesService ){}
  searchByCapital( term: string ): void {
    this.countriesService.searchCapital(term)
      .subscribe( (countries: Countries[] ) => {
        this.countries = countries;
      });
  }
}
