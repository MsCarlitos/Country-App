import { Component } from '@angular/core';
import { Countries } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries:Countries[] = [];
  constructor( private countriesService: CountriesService ){}
  searchByRegion( term: string ): void {
    this.countriesService.searchRegion(term)
      .subscribe( (countries: Countries[] ) => {
        this.countries = countries;
      });
  }
}
