import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { Observable, Subscription, from, map, of, tap } from 'rxjs';
import { Desvio } from '../../model/desvio';

@Component({
  selector: 'app-desvios-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './desvios-list.component.html',
  styleUrl: './desvios-list.component.scss',
})
export class DesviosListComponent implements OnDestroy {
  private firestore: Firestore = inject(Firestore);
  desviosFire$: Observable<any>;
  desviosCollection: any;
  subscription: Subscription = new Subscription();

  queryField: string = '';
  value: string = '';
  desvios: Desvio[] = [];
  desviosBusca: Desvio[] = [];

  contador: number = 0;
  bloco: any;
  // itemsRef: AngularFireList<any>;

  constructor(private router: Router) {
    this.desviosCollection = collection(this.firestore, 'desvios');

    this.desviosFire$ = collectionData(this.desviosCollection) as Observable<
      Desvio[]
    >;
    this.desviosFire$.pipe(
      map((result: any) => {
        result.sort((a: any, b: any) => a.linha.localeCompare(b.linha));
      })
    );

    this.subscription = this.desviosFire$.subscribe(
      (desvios: any) => (this.desviosBusca = desvios)
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  blocos() {
    window.open('https://carnaval-2023-bhtrans.web.app/', '_blank');
  }
  clear() {
    this.queryField = '';
  }

  onSearch() {
    if (this.queryField !== '') {
    }
  }
}
