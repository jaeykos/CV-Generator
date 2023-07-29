import { useState } from "react"
import "./App.css"
import { Split } from "@geoffcox/react-splitter"
import { useCollapse } from "react-collapsed"
import { Education, Work } from "./data"
import expandLogo from "./assets/chevron-down.svg"
import collapseLogo from "./assets/chevron-up.svg"

function GeneralInfoInputDiv(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: true,
  })

  return (
    <>
      <div className="mainInputContainer">
        <div className="flex flex-row items-center">
          <div className="mainSectionTitle">General Information</div>
          <button {...getToggleProps()} className="  w-8 h-8 ml-auto">
            <img
              src={isExpanded ? collapseLogo : expandLogo}
              alt="expand collapse"
            />
          </button>
        </div>
        <div {...getCollapseProps()}>
          <div className="subDivContainer">
            <label htmlFor="nameInput" className="inputLabel">
              Name
            </label>
            <input
              className="inputField"
              type="text"
              id="nameInput"
              value={props.nameVal}
              onChange={(e) => {
                props.setNameVal(e.target.value)
              }}
            />
            <label htmlFor="emailInput" className="inputLabel">
              Email
            </label>
            <input
              className="inputField"
              type="text"
              id="emailInput"
              value={props.emailVal}
              onChange={(e) => {
                props.setEmailVal(e.target.value)
              }}
            />
            <label htmlFor="phoneInput" className="inputLabel">
              Phone
            </label>
            <input
              className="inputField"
              type="text"
              id="phoneInput"
              value={props.phoneVal}
              onChange={(e) => {
                props.setPhoneVal(e.target.value)
              }}
            />
            <label htmlFor="locationInput" className="inputLabel">
              Location
            </label>
            <input
              className="inputField"
              type="text"
              id="locationInput"
              value={props.locationVal}
              onChange={(e) => {
                props.setLocationVal(e.target.value)
              }}
            />
            <label htmlFor="summaryInput" className="inputLabel">
              Summary
            </label>
            <textarea
              className="inputField"
              id="summaryInput"
              value={props.summaryVal}
              onChange={(e) => {
                props.setSummaryVal(e.target.value)
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

function GeneralInfoOutputDiv(props) {
  function populateSummary() {
    if (props.summaryVal.length > 0) {
      return (
        <div className="ml-auto text-lg mt-2 mb-2 italic text-center">
          {props.summaryVal}
        </div>
      )
    }
  }

  return (
    <>
      <div className="flex flex-row  border-b-2  pb-5 pt-5 border-slate-500">
        <div className=" text-5xl font-semibold  w-3/4 break-words">
          {props.nameVal}
        </div>
        <div className="flex flex-col ml-auto w-1/4 justify-end">
          <div className="ml-auto text-sm">{props.emailVal}</div>
          <div className="ml-auto text-sm">{props.phoneVal}</div>
          <div className="ml-auto text-sm">{props.locationVal}</div>
        </div>
      </div>
      {populateSummary()}
    </>
  )
}

function EducationInputDiv(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: true,
  })
  const AddEducationExp = () => {
    props.setEdExpNo(props.edExpNo + 1)
    props.setEducationExps([
      ...props.educationExps,
      new Education(props.edExpNo),
    ])
    console.log(props.educationExps.length)
  }
  const removeEdExp = (e: MouseEvent) => {
    props.setEducationExps(
      props.educationExps.filter(
        (item: Education) =>
          item.id != e.target.parentElement.parentElement.id.toString()
      )
    )
    console.log("item removed")
  }
  return (
    <>
      <div className="mainInputContainer ">
        <div className="flex flex-row items-center">
          <div className="mainSectionTitle">Education</div>
          <button className="textButton ml-4" onClick={AddEducationExp}>
            Add
          </button>
          <button {...getToggleProps()} className=" w-8 h-8 ml-auto">
            <img
              src={isExpanded ? collapseLogo : expandLogo}
              alt="expand collapse"
            />
          </button>
        </div>

        <div {...getCollapseProps()}>
          {props.educationExps.map((educationExp: Education) => {
            return (
              <>
                <div id={educationExp.id.toString()}>
                  <div className="subDivContainer">
                    <div className="inputLabel">Degree</div>
                    <input
                      className="inputField"
                      type="text"
                      value={educationExp.degree}
                      onChange={(e) => {
                        const tempArray = props.educationExps.map(
                          (item: Education) => {
                            if (
                              item.id ==
                              Number(e.target.parentElement?.parentElement.id)
                            ) {
                              item.degree = e.target.value
                              return item
                            } else {
                              return item
                            }
                          }
                        )
                        props.setEducationExps(tempArray)
                      }}
                    />

                    <div className="inputLabel">School</div>
                    <input
                      className="inputField"
                      type="text"
                      value={educationExp.school}
                      onChange={(e) => {
                        const tempArray = props.educationExps.map(
                          (item: Education) => {
                            if (
                              item.id ==
                              Number(e.target.parentElement?.parentElement.id)
                            ) {
                              item.school = e.target.value
                              return item
                            } else {
                              return item
                            }
                          }
                        )
                        props.setEducationExps(tempArray)
                      }}
                    />

                    <div className="inputLabel">Location</div>
                    <input
                      className="inputField"
                      type="text"
                      value={educationExp.location}
                      onChange={(e) => {
                        const tempArray = props.educationExps.map(
                          (item: Education) => {
                            if (
                              item.id ==
                              Number(e.target.parentElement?.parentElement.id)
                            ) {
                              item.location = e.target.value
                              return item
                            } else {
                              return item
                            }
                          }
                        )
                        props.setEducationExps(tempArray)
                      }}
                    />

                    <div className="inputLabel">Start Date</div>
                    <input
                      className="inputField"
                      type="date"
                      value={educationExp.startDate}
                      onChange={(e) => {
                        const tempArray = props.educationExps.map(
                          (item: Education) => {
                            if (
                              item.id ==
                              Number(e.target.parentElement?.parentElement.id)
                            ) {
                              item.startDate = e.target.value
                              return item
                            } else {
                              return item
                            }
                          }
                        )
                        props.setEducationExps(tempArray)
                      }}
                    />

                    <div className="inputLabel">End Date</div>
                    <input
                      className="inputField"
                      type="date"
                      value={educationExp.endDate}
                      onChange={(e) => {
                        const tempArray = props.educationExps.map(
                          (item: Education) => {
                            if (
                              item.id ==
                              Number(e.target.parentElement?.parentElement.id)
                            ) {
                              item.endDate = e.target.value
                              return item
                            } else {
                              return item
                            }
                          }
                        )
                        props.setEducationExps(tempArray)
                      }}
                    />

                    <div className="inputLabel">Description</div>
                    <textarea
                      className="inputField"
                      value={educationExp.description}
                      onChange={(e) => {
                        const tempArray = props.educationExps.map(
                          (item: Education) => {
                            if (
                              item.id ==
                              Number(e.target.parentElement?.parentElement.id)
                            ) {
                              item.description = e.target.value
                              return item
                            } else {
                              return item
                            }
                          }
                        )
                        props.setEducationExps(tempArray)
                      }}
                    />
                    <button
                      className="textButton ml-auto"
                      onClick={(e) => removeEdExp(e)}
                    >
                      remove
                    </button>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

function WorkInputDiv(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: true,
  })
  const AddWorkExp = () => {
    props.setWorkExpNo(props.workExpNo + 1)
    props.setWorkExps([...props.workExps, new Work(props.workExpNo)])
    console.log(props.workExps.length)
  }
  const removeWorkExp = (e: MouseEvent) => {
    props.setWorkExps(
      props.workExps.filter(
        (item: Work) =>
          item.id != e.target.parentElement.parentElement.id.toString()
      )
    )
    console.log("item removed")
  }
  return (
    <>
      <div className="mainInputContainer ">
        <div className="flex flex-row items-center">
          <div className="mainSectionTitle">Work</div>
          <button className="textButton ml-4" onClick={AddWorkExp}>
            Add
          </button>
          <button {...getToggleProps()} className=" w-8 h-8 ml-auto">
            <img
              src={isExpanded ? collapseLogo : expandLogo}
              alt="expand collapse"
            />
          </button>
        </div>

        <div {...getCollapseProps()}>
          {props.workExps.map((workExp: Work) => {
            return (
              <>
                <div id={workExp.id.toString()}>
                  <div className="subDivContainer">
                    <div className="inputLabel">Title</div>
                    <input
                      className="inputField"
                      type="text"
                      value={workExp.title}
                      onChange={(e) => {
                        const tempArray = props.workExps.map((item: Work) => {
                          if (
                            item.id ==
                            Number(e.target.parentElement?.parentElement.id)
                          ) {
                            item.title = e.target.value
                            return item
                          } else {
                            return item
                          }
                        })
                        props.setWorkExps(tempArray)
                      }}
                    />

                    <div className="inputLabel">Company</div>
                    <input
                      className="inputField"
                      type="text"
                      value={workExp.company}
                      onChange={(e) => {
                        const tempArray = props.workExps.map((item: Work) => {
                          if (
                            item.id ==
                            Number(e.target.parentElement?.parentElement.id)
                          ) {
                            item.company = e.target.value
                            return item
                          } else {
                            return item
                          }
                        })
                        props.setWorkExps(tempArray)
                      }}
                    />

                    <div className="inputLabel">Location</div>
                    <input
                      className="inputField"
                      type="text"
                      value={workExp.location}
                      onChange={(e) => {
                        const tempArray = props.workExps.map((item: Work) => {
                          if (
                            item.id ==
                            Number(e.target.parentElement?.parentElement.id)
                          ) {
                            item.location = e.target.value
                            return item
                          } else {
                            return item
                          }
                        })
                        props.setWorkExps(tempArray)
                      }}
                    />

                    <div className="inputLabel">Start Date</div>
                    <input
                      className="inputField"
                      type="date"
                      value={workExp.startDate}
                      onChange={(e) => {
                        const tempArray = props.workExps.map((item: Work) => {
                          if (
                            item.id ==
                            Number(e.target.parentElement?.parentElement.id)
                          ) {
                            item.startDate = e.target.value
                            return item
                          } else {
                            return item
                          }
                        })
                        props.setWorkExps(tempArray)
                      }}
                    />

                    <div className="inputLabel">End Date</div>
                    <input
                      className="inputField"
                      type="date"
                      value={workExp.endDate}
                      onChange={(e) => {
                        const tempArray = props.workExps.map((item: Work) => {
                          if (
                            item.id ==
                            Number(e.target.parentElement?.parentElement.id)
                          ) {
                            item.endDate = e.target.value
                            return item
                          } else {
                            return item
                          }
                        })
                        props.setWorkExps(tempArray)
                      }}
                    />

                    <div className="inputLabel">Description</div>
                    <textarea
                      className="inputField"
                      value={workExp.description}
                      onChange={(e) => {
                        const tempArray = props.workExps.map((item: Work) => {
                          if (
                            item.id ==
                            Number(e.target.parentElement?.parentElement.id)
                          ) {
                            item.description = e.target.value
                            return item
                          } else {
                            return item
                          }
                        })
                        props.setWorkExps(tempArray)
                      }}
                    />
                    <button
                      className="textButton ml-auto"
                      onClick={(e) => removeWorkExp(e)}
                    >
                      remove
                    </button>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

function EducationOutputDiv(props) {
  return (
    <>
      <div className="flex flex-col mx-auto ">
        <div className=" text-2xl font-semibold mb-2 text-center">
          {props.educationExps.length > 0 ? "Education" : ""}
        </div>
        {props.educationExps.map((item: Education) => (
          <div className="mb-3">
            <div className="flex flex-row">
              <div className=" font-semibold mr-auto">{item.degree}</div>
              <div className="flex flex-row">
                <div>
                  {item.startDate} - {item.endDate}
                </div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                {item.school} {item.location != "" ? ", " + item.location : ""}
              </div>
            </div>

            <div className="p-2">{item.description}</div>
          </div>
        ))}
      </div>
    </>
  )
}

function WorkOutputDiv(props) {
  return (
    <>
      <div className="flex flex-col mx-auto border-solid ">
        <div className=" text-2xl font-semibold mb-2 text-center">
          {props.workExps.length > 0 ? "Experience" : ""}
        </div>
        {props.workExps.map((item: Work) => (
          <div className="mb-3">
            <div className="flex flex-row">
              <div className=" font-semibold mr-auto">{item.title}</div>
              <div className="flex flex-row">
                <div>
                  {item.startDate} - {item.endDate}
                </div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                {item.company} {item.location != "" ? ", " + item.location : ""}
              </div>
            </div>

            <div className=" p-2">{item.description}</div>
          </div>
        ))}
      </div>
    </>
  )
}

function App() {
  const [nameVal, setNameVal] = useState("")
  const [emailVal, setEmailVal] = useState("")
  const [phoneVal, setPhoneVal] = useState("")
  const [locationVal, setLocationVal] = useState("")
  const [summaryVal, setSummaryVal] = useState("")
  const [edExpNo, setEdExpNo] = useState(0)
  const [educationExps, setEducationExps] = useState([])
  const [workExpNo, setWorkExpNo] = useState(0)
  const [workExps, setWorkExps] = useState([])

  const InfoPropsToPass = {
    nameVal,
    setNameVal,
    emailVal,
    setEmailVal,
    phoneVal,
    setPhoneVal,
    locationVal,
    setLocationVal,
    summaryVal,
    setSummaryVal,
    edExpNo,
    setEdExpNo,
    educationExps,
    setEducationExps,
    workExps,
    setWorkExps,
    workExpNo,
    setWorkExpNo,
  }

  console.log("this is educationExps:")
  console.log(educationExps)

  const conditionalEdOutputDiv = () => {
    if (educationExps.length != 0) {
      return (
        <>
          <EducationOutputDiv {...InfoPropsToPass} />
        </>
      )
    }
  }
  const conditionalWorkOutputDiv = () => {
    if (workExps.length != 0) {
      return (
        <>
          <WorkOutputDiv {...InfoPropsToPass} />
        </>
      )
    }
  }

  function clearAll() {
    setNameVal("")
    setEmailVal("")
    setPhoneVal("")
    setLocationVal("")
    setSummaryVal("")
    setEdExpNo(0)
    setWorkExpNo(0)
    setEducationExps([])
    setWorkExps([])
  }

  function generateExample() {
    setNameVal("Jae Kang")
    setEmailVal("JaeKang@odin.com")
    setPhoneVal("987-765-3210")
    setLocationVal("Calgary, AB, Canada")
    setSummaryVal("On track to completing the Odin Project")
    const exampleEducation = new Education(0)
    exampleEducation.degree = "Bachelor of Arbitrary Major"
    exampleEducation.location = "New York City, New York, United States"
    exampleEducation.school = "Arbitrary University"
    exampleEducation.startDate = "2022-01-01"
    exampleEducation.endDate = "2023-01-01"
    exampleEducation.description =
      "Capstone project includes developing this CV Generator"
    const exampleEducations = [exampleEducation]
    setEducationExps(exampleEducations)

    const exampleWork = new Work(0)
    exampleWork.title = "Web Developer"
    exampleWork.location = "New York City, New York, United States"
    exampleWork.company = "Arbitrary Company"
    exampleWork.startDate = "2023-01-01"
    exampleWork.endDate = "2024-01-01"
    exampleWork.description = "Developed this CV generator"
    const exampleWorks = [exampleWork]
    setWorkExps(exampleWorks)
  }

  return (
    <>
      <div className="flex flex-row bg-slate-400 w-full h-full">
        <div className="p-4 overflow-y-scroll w-2/5 border-r-2 border-r-slate-600">
          <div className="flex flex-row pb-3 items-end">
            <div className=" text-5xl font-semibold text-slate-900  ">
              CV Generator
            </div>
            <button
              className="textButton leading-4 w-24 text-l ml-4"
              onClick={generateExample}
            >
              Generate Example
            </button>
            <button
              className="textButton leading-4  text-l ml-3"
              onClick={clearAll}
            >
              Clear All
            </button>
          </div>
          <GeneralInfoInputDiv {...InfoPropsToPass} />
          <EducationInputDiv {...InfoPropsToPass} />
          <WorkInputDiv {...InfoPropsToPass} />
        </div>
        <div className=" w-3/5">
          <div
            id="cvContainer"
            className="bg-slate-50 p-6 mt-3 mx-auto shadow-lg "
          >
            <GeneralInfoOutputDiv {...InfoPropsToPass} />
            {conditionalEdOutputDiv()}
            {conditionalWorkOutputDiv()}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
