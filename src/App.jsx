import { Route, Routes } from "react-router-dom"

import Churches from "./views/Churches"
import NewChurch from "./views/Church/new"
import Church from "./views/Church"
import NewMinistry from "./views/Ministry/new"
import Ministry from "./views/Ministry"
import NewEvent from "./views/Event/NewEvent"
import Event from "./views/Event"
import EditEvent from "./views/Event/EditEvent"
import NewAttendee from "./views/Attendee/new"
import NewDepartment from "./views/Department/NewDepartment"
import Department from "./views/Department"
import NewMember from "./views/Member/new"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Churches />} />
        <Route path="/church/new" element={<NewChurch />} />
        <Route path="/church/:id" element={<Church />} />
        <Route path="/church/:churchId/ministries/new" element={<NewMinistry />} />
        <Route path="/church/:churchId/ministries/:ministryId" element={<Ministry />} />
        <Route path="/church/:churchId/ministries/:ministryId/events/new" element={<NewEvent />} />
        <Route path="/church/:churchId/ministries/:ministryId/events/:eventId" element={<Event />} />
        <Route path="/church/:churchId/ministries/:ministryId/events/:eventId/edit" element={<EditEvent />} />
        <Route path="/church/:churchId/ministries/:ministryId/events/:eventId/attendees/new" element={<NewAttendee />} />
        <Route path="/church/:churchId/ministries/:ministryId/departments/new" element={<NewDepartment />} />
        <Route path="/church/:churchId/ministries/:ministryId/departments/:departmentId" element={<Department />} />
        <Route path="/church/:churchId/ministries/:ministryId/departments/:departmentId/members/new" element={<NewMember />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
