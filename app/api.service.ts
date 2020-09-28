import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  allHeader() {
    let header = new HttpHeaders('');
    header = header.append('GOSEARCH-API-KEY', 'ab01c58f-606d-4739-855c-c86f1107a536');
    header = header.append('Authorization', 'Basic N2Q5NmY2OTc5MDMxOWNmNmM1ZmViMjU4NDllYjQ0ODU6MGFhYmZkYjEwN2EwYTBjYmI0YTVlYTk3MjQyOTZjZGM=');
    header = header.append('Content-Type', 'application/x-www-form-urlencoded');
    return header;
  }

  upload(data) {
    const url = 'https://www.kmsp-store.com/gosearch/api/v1/file_upload';
    let header = new HttpHeaders('');
    header = header.append('GOSEARCH-API-KEY', 'ab01c58f-606d-4739-855c-c86f1107a536');
    header = header.append('Authorization', 'Basic N2Q5NmY2OTc5MDMxOWNmNmM1ZmViMjU4NDllYjQ0ODU6MGFhYmZkYjEwN2EwYTBjYmI0YTVlYTk3MjQyOTZjZGM=');

    const payload = new FormData();
    payload.append('document', data.documment);
    payload.append('search_title', data.title);
    payload.append('user', data.username);

    return this.http.post(url, payload, { headers: header });
  }

  latestUpload() {
    const url = 'https://www.kmsp-store.com/gosearch/api/v1/latest_upload';
    let header = this.allHeader();
    return this.http.get(url, { headers: header });
  }

  searchQuery(value) {
    const url = 'https://www.kmsp-store.com/gosearch/api/v1/search_query';
    let header = this.allHeader();
    const payload = 'search_query=' + value;
    return this.http.post(url, payload, { headers: header });
  }

}
