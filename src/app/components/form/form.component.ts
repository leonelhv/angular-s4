import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { article } from '../interfaces/article.interface';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() articles!: article[];
  @Output() newArticle = new EventEmitter<article>();

  regexURL = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/g;

  articleForm = this.fb.group({
    title: ['delfin', [Validators.required]],
    text: ['animal acuatico', Validators.required],
    img: [
      'https://t2.ea.ltmcdn.com/es/posts/8/1/5/el_delfin_es_un_mamifero_o_un_pez_24518_600_square.jpg',
      [Validators.required, Validators.pattern(this.regexURL)],
    ],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.articleForm.invalid) {
      console.log(this.articleForm.value);
      this.articleForm.markAllAsTouched();
      return;
    }
    const { title, text, img } = this.articleForm.value;
    const objArticle: article = {
      title: title!.trim(),
      text: text!.trim(),
      img: img!.trim(),
    };
    this.newArticle.emit(objArticle);
    this.articleForm.reset();
  }

  get form(): { [key: string]: AbstractControl } {
    return this.articleForm.controls;
  }
}
