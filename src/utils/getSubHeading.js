export function getSubHeading(number) {
    switch (true) {
      case number > 1:
        return `${number} zadania`;
      case number === 1:
        return `${number} zadanie`
      case number === 0:
        default:
          return "Brak zadań"
    }
  }