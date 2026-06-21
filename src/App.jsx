import react from "react"
import { useState } from 'react'
import './App.css'
import HeaderSection from '../src/components/HeaderSection.jsx'
import AddSubjectRows from '../src/components/AddSubjectRow.jsx'
import SubjectForm from '../src/components/SubjectForm.jsx'

function App() {

  return (
  <>
  <HeaderSection/>
  <AddSubjectRows/>
  <SubjectForm/>
  </>
  )
}

export default App
