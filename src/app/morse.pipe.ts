import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morse'
})

export class MorsePipe implements PipeTransform {
  code: string = "";
  transform(sentence: string): string {
    for (let index = 0; index < sentence.length; index++) {
      switch (sentence.charAt(index)) {
        case 'a':
          this.code += '*- ';
          break;
        case 'b':
          this.code += '-*** ';
          break;
        case 'c':
          this.code += '-*-* ';
          break;
        case 'd':
          this.code += '-** ';
          break;
        case 'e':
          this.code += '* ';
          break;
        case 'f':
          this.code += '**-* ';
          break;
        case 'g':
          this.code += '--* ';
          break;
        case 'h':
          this.code += '**** ';
          break;
        case 'i':
          this.code += '** ';
          break;
        case 'j':
          this.code += '*--- ';
          break;
        case 'k':
          this.code += '-*- ';
          break;
        case 'l':
          this.code += '*-** ';
          break;
        case 'm':
          this.code += '-- ';
          break;
        case 'n':
          this.code += '-* ';
          break;
        case 'o':
          this.code += '--- ';
          break;
        case 'p':
          this.code += '*--* ';
          break;
        case 'q':
          this.code += '--*- ';
          break;
        case 'r':
          this.code += '*-* ';
          break;
        case 's':
          this.code += '*** ';
          break;
        case 't':
          this.code += '- ';
          break;
        case 'u':
          this.code += '**- ';
          break;
        case 'v':
          this.code += '***- ';
          break;
        case 'w':
          this.code += '*-- ';
          break;
        case 'x':
          this.code += '-**- ';
          break;
        case 'y':
          this.code += '-*-- ';
          break;
        case 'z':
          this.code += '--** ';
          break;
        case 'æ':
          this.code += '*-*- ';
          break;
        case 'ø':
          this.code += '---* ';
          break;
        case 'å':
          this.code += '*--*- ';
          break;
        case '1':
          this.code += '*----- ';
          break;
        case '2':
          this.code += '**--- ';
          break;
        case '3':
          this.code += '***-- ';
          break;
        case '4':
          this.code += '****- ';
          break;
        case '5':
          this.code += '***** ';
          break;
        case '6':
          this.code += '-**** ';
          break;
        case '7':
          this.code += '--*** ';
          break;
        case '8':
          this.code += '---** ';
          break;
        case '9':
          this.code += '----* ';
          break;
        case '0':
          this.code += '----- ';
          break;
        case '.':
          this.code += '*-*-*- ';
          break;
        case ',':
          this.code += '--**-- ';
          break;
        case ':':
          this.code += '---*** ';
          break;
        case '?':
          this.code += '**--** ';
          break;
        case '´':
          this.code += '*----* ';
          break;
        case '-':
          this.code += '-****- ';
          break;
        case '/':
          this.code += '-**-* ';
          break;
        case '(':
          this.code += '-*--* ';
          break;
        case ')':
          this.code += '-*--*- ';
          break;
        case '"':
          this.code += '*-**-* ';
          break;
        case '\n':
          this.code += '*-*- ';
          break;
        case '*':
          this.code += '-**- ';
          break;
        case '@':
          this.code += '*--*-* ';
          break;
        case ' ':
          this.code += ".";
          break;
        default:
          break;
      }
    }
    return this.code;
  }
}