export class TimeZone {
  static convertTZ(date: Date, tzString: string) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
  }
}
