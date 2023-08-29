import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public countries:Countries[] = [];
  constructor( private countriesService: CountriesService ){}
  searchByCountry( term: string ): void {
    this.countriesService.searchCountry(term)
      .subscribe( (countries: Countries[] ) => {
        this.countries = countries;
      });
  }
}
