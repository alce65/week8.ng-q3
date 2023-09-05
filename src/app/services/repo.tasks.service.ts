import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/model/task';

@Injectable({
  providedIn: 'root',
})
export class RepoTasksService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/tasks/';
  }

  getAll(): Observable<Task[]> {
    return this.http.get(this.url) as Observable<Task[]>;
  }

  create(data: Omit<Task, 'id'>): Observable<Task> {
    return this.http.post(this.url, data) as Observable<Task>;
  }

  delete(id: number): Observable<any> {
    const url = this.url + id;
    return this.http.delete(url);
  }
}
