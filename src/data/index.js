import {
  get,
  post,
  put,
  del
} from './api';

export const getChurches = async () => {
  return await get('/churches');
};

export const getChurch = async (id) => {
  return await get(`/churches/${id}`);
};

export const createChurch = async (data) => {
  return await post('/churches', data);
};

export const updateChurch = async (id, data) => {
  return await put(`/churches/${id}`, data);
};

export const deleteChurch = async (id) => {
  return await del(`/churches/${id}`);
};

export const getMinistries = async (churchId) => {
  return await get(`/churches/${churchId}/ministries`);
};

export const getMinistry = async (churchId, ministryId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}`);
}

export const createMinistry = async (churchId, data) => {
  return await post(`/churches/${churchId}/ministries`, data);
};

export const updateMinistry = async (churchId, ministryId, data) => {
  return await put(`/churches/${churchId}/ministries/${ministryId}`, data);
};

export const deleteMinistry = async (churchId, ministryId) => {
  return await del(`/churches/${churchId}/ministries/${ministryId}`);
};

export const getEvents = async (churchId, ministryId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/events`);
};

export const getEvent = async (churchId, ministryId, eventId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}`);
};

export const createEvent = async (churchId, ministryId, data) => {
  return await post(`/churches/${churchId}/ministries/${ministryId}/events`, data);
};

export const updateEvent = async (churchId, ministryId, eventId, data) => {
  return await put(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}`, data);
};

export const deleteEvent = async (churchId, ministryId, eventId) => {
  return await del(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}`);
};

export const getAttendees = async (churchId, ministryId, eventId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}/attendees`);
};

export const getAttendee = async (churchId, ministryId, eventId, attendeeId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}/attendees/${attendeeId}`);
};

export const createAttendee = async (churchId, ministryId, eventId, data) => {
  return await post(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}/attendees`, data);
};

export const updateAttendee = async (churchId, ministryId, eventId, attendeeId, data) => {
  return await put(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}/attendees/${attendeeId}`, data);
};

export const deleteAttendee = async (churchId, ministryId, eventId, attendeeId) => {
  return await del(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}/attendees/${attendeeId}`);
};

export const getAttendanceRecords = async (churchId, ministryId, eventId, attendeeId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}/attendees/${attendeeId}/attendance_records`);
}

export const getAttendanceRecord = async (churchId, ministryId, eventId, attendeeId, attendanceRecordId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}/attendees/${attendeeId}/attendance_records/${attendanceRecordId}`);
};

export const createAttendanceRecord = async (churchId, ministryId, eventId, attendeeId, data) => {
  return await post(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}/attendees/${attendeeId}/attendance_records`, data);
}

export const updateAttendanceRecord = async (churchId, ministryId, eventId, attendeeId, attendanceRecordId, data) => {
  return await put(`/churches/${churchId}/ministries/${ministryId}/events/${eventId}/attendees/${attendeeId}/attendance_records/${attendanceRecordId}`, data);
}

export const getDepartments = async (churchId, ministryId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/departments`);
};

export const getDepartment = async (churchId, ministryId, departmentId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}`);
};

export const createDepartment = async (churchId, ministryId, data) => {
  return await post(`/churches/${churchId}/ministries/${ministryId}/departments`, data);
};

export const updateDepartment = async (churchId, ministryId, departmentId, data) => {
  return await put(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}`, data);
};

export const deleteDepartment = async (churchId, ministryId, departmentId) => {
  return await del(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}`);
};

export const createDepartmentMeetingDate = async (churchId, ministryId, departmentId, date) => {
  return await post(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}/meeting_dates`, { date });
};

export const getMembers = async (churchId, ministryId, departmentId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}/members`);
};

export const getMember = async (churchId, ministryId, departmentId, memberId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}/members/${memberId}`);
};

export const createMember = async (churchId, ministryId, departmentId, data) => {
  return await post(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}/members`, data);
};

export const updateMember = async (churchId, ministryId, departmentId, memberId, data) => {
  return await put(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}/members/${memberId}`, data);
};

export const deleteMember = async (churchId, ministryId, departmentId, memberId) => {
  return await del(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}/members/${memberId}`);
};

export const getTrackRecords = async (churchId, ministryId, departmentId, memberId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}/members/${memberId}/track_records`);
};

export const getTrackRecord = async (churchId, ministryId, departmentId, memberId, trackRecordId) => {
  return await get(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}/members/${memberId}/track_records/${trackRecordId}`);
};

export const createTrackRecord = async (churchId, ministryId, departmentId, memberId, data) => {
  return await post(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}/members/${memberId}/track_records`, data);
};

export const updateTrackRecord = async (churchId, ministryId, departmentId, memberId, trackRecordId, data) => {
  return await put(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}/members/${memberId}/track_records/${trackRecordId}`, data);
};

export const deleteTrackRecord = async (churchId, ministryId, departmentId, memberId, trackRecordId) => {
  return await del(`/churches/${churchId}/ministries/${ministryId}/departments/${departmentId}/members/${memberId}/track_records/${trackRecordId}`);
};
