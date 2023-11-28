import { Component, Input, OnInit } from '@angular/core';

import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {
  cursoId!: string;

  constructor(
    private cursoService: CursoService,
  ) { }

  ngOnInit() {
  }

}
