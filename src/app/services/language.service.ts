import { EventEmitter } from "@angular/core";

export class LanguageService {
    language: string = 'de';

    languageChoosen = new EventEmitter<string>();

    changeLanguage(lang:string){
        this.languageChoosen.emit(lang)
    }
}
