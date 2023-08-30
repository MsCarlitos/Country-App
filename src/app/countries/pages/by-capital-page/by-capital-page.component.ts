import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {
  public countries:Countries[] = [];
  public isLoading: boolean = false;
  public initialValue:string = '';

  constructor( private countriesService: CountriesService ){}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }
  searchByCapital( term: string ): void {
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe( (countries: Countries[] ) => {
        this.countries = countries;
        this.isLoading = false;
        this.initialValue = term;
      });
  }
}
