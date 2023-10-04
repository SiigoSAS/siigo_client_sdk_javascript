import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DocumentType } from "@core/models/document-type.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class DocumentTypesService {
  env: string;

  constructor(private _http: HttpClient) {
    this.env = environment.apiEndpoint;
  }

  getDocumentTypes(): Observable<DocumentType[]> {
    return this._http
      .get<DocumentType[]>(`${this.env}/document-type/FV`)
      .pipe(map((response) => response.filter((docType) => docType.active == true)));
  }
}
