import { Pipe, PipeTransform } from "@angular/core";
import { localize } from "./localize";

@Pipe({ name: "L" })
export class LocalizePipe implements PipeTransform {
  public transform(key: string, ...args: string[]): string {
    return localize(key, ...args);
  }
}
