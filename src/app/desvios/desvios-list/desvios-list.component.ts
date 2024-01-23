import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Desvio } from '../../model/desvio';

@Component({
  selector: 'app-desvios-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatIconModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './desvios-list.component.html',
  styleUrl: './desvios-list.component.scss',
})
export class DesviosListComponent {

  private firestore: Firestore = inject(Firestore);
  desviosFire$: Observable<any>;

  queryField = new FormControl();
  value: string = '';
  regionais: string[] = [];
  regional: string = 'GERAL';
  contador: number = 0;
  bloco: any;
  // itemsRef: AngularFireList<any>;

  constructor(
    private router: Router
  ) {

    const desviosCollection = collection(this.firestore, 'desvios');

    this.desviosFire$ = collectionData(desviosCollection) as Observable<Desvio[]>;
    // this.desviosFire$ = this.desviosService
    //   .list()
    //   .pipe(
    //     map((result: any) =>
    //       result.sort((a: any, b: any) => a.linha.localeCompare(b.linha))
    //     )
    //   );
    // this.desviosService
    //   .list()
    //   .pipe(tap((desvios: Desvio[]) => (this.contador = desvios.length)))
    //   .subscribe();
  }

  blocos() {
    window.open('https://carnaval-2023-bhtrans.web.app/', '_blank');
  }
  load() {
    throw new Error('Method not implemented.');
  }

  onSearch() {
    // let value = this.queryField.value;
    // if (value && (value = value.trim()) !== '') {
    //   this.desviosFire$ = this.desviosService.listFire().pipe(
    //     map((desvios) =>
    //       desvios.filter((desvio: any) =>
    //         desvio.linha.includes(value.toUpperCase())
    //       )
    //     ),
    //     map((result) =>
    //       result.sort((a: any, b: any) => a.linha.localeCompare(b.linha))
    //     ),
    //     tap((desvios: Desvios) => (this.contador = desvios.length))
    //   );
    // }
  }
}
