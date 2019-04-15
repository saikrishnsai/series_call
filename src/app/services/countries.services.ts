import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class myCountries{

constructor(private _http:HttpClient){}
getCountries():any{
    return this._http.get("https://restcountries.eu/rest/v2/all")
}
}
