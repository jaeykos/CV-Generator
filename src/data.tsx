class Education {
  id = 0
  degree = ""
  school = ""
  location = ""
  startDate = ""
  endDate = ""
  description = ""

  constructor(id: number) {
    this.id = id
  }
}

class Work {
  id = 0
  company = ""
  title = ""
  location = ""
  startDate = ""
  endDate = ""
  description = ""

  constructor(id: number) {
    this.id = id
  }
}

export { Education, Work }
