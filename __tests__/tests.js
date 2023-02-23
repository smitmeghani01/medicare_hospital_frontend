import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import  Tags from  "../components/departments/Tags"
import  DoctorDetails from "../components/doctor/DoctorDetails"
import Choose from "../components/about/Choose"

describe('Tags in the Blog', () => {

    
  
    it('The tags should be correcty rendered for department Blog', () => {
      render(<Tags/>)
      expect(screen.getByRole('tag')).toBeInTheDocument()
    
    })
  
   
  
  })
 
 

  