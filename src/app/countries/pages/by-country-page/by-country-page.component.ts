import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  public countries:Countries[] = [];
  public isLoading: boolean = false;
  public initialValue:string = '';

  constructor( private countriesService: CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry( term: string ): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term)
      .subscribe( (countries: Countries[] ) => {
        this.countries = countries;
        this.isLoading = false;
        this.initialValue = term;
      });
  }
}
