import { faker } from "@faker-js/faker";
import { DateFormatter } from "../protocols/utils";

export class DateFormatterSpy implements DateFormatter {
  dateFormat: string = 'YYYY-MM-DD HH:mm:ss'
  inputDate: string | Date
  finalDate: Date = faker.date.past()
  format(inputDate: string|Date): Date {
    this.inputDate = inputDate
    return this.finalDate
  }
}