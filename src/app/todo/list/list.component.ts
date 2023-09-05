import { Component, OnInit } from '@angular/core';
import { RepoTasksService } from 'src/app/services/repo.tasks.service';
import { Task } from 'src/model/task';

@Component({
  selector: 'isd-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks: Task[];
  constructor(private repo: RepoTasksService) {
    this.tasks = [];
  }

  ngOnInit(): void {
    this.repo.getAll().subscribe((data) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }
  handleDelete(data: Task) {
    // Asincrono -> api
    this.repo.delete(data.id).subscribe(() => {
      // Sincrono -> array (estado)
      this.tasks = this.tasks.filter((item) => item.id !== data.id);
      console.log('Delete', data.id);
    });
  }

  handleAdd(data: Omit<Task, 'id'>) {
    this.repo.create(data).subscribe((data) => {
      this.tasks = [...this.tasks, data];
      console.log('Added', data);
    });
  }
}
