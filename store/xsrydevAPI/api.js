import axios from "axios"
const xsrydevAPI = axios.create({
  baseURL: "https://xsry-dev-98640.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return xsrydevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_cvbr_list(payload) {
  return xsrydevAPI.get(`/api/v1/cvbr/`)
}
function api_v1_cvbr_create(payload) {
  return xsrydevAPI.post(`/api/v1/cvbr/`, payload)
}
function api_v1_cvbr_retrieve(payload) {
  return xsrydevAPI.get(`/api/v1/cvbr/${payload.id}/`)
}
function api_v1_cvbr_update(payload) {
  return xsrydevAPI.put(`/api/v1/cvbr/${payload.id}/`, payload)
}
function api_v1_cvbr_partial_update(payload) {
  return xsrydevAPI.patch(`/api/v1/cvbr/${payload.id}/`, payload)
}
function api_v1_cvbr_destroy(payload) {
  return xsrydevAPI.delete(`/api/v1/cvbr/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return xsrydevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return xsrydevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_xcdv_list(payload) {
  return xsrydevAPI.get(`/api/v1/xcdv/`)
}
function api_v1_xcdv_create(payload) {
  return xsrydevAPI.post(`/api/v1/xcdv/`, payload)
}
function api_v1_xcdv_retrieve(payload) {
  return xsrydevAPI.get(`/api/v1/xcdv/${payload.id}/`)
}
function api_v1_xcdv_update(payload) {
  return xsrydevAPI.put(`/api/v1/xcdv/${payload.id}/`, payload)
}
function api_v1_xcdv_partial_update(payload) {
  return xsrydevAPI.patch(`/api/v1/xcdv/${payload.id}/`, payload)
}
function api_v1_xcdv_destroy(payload) {
  return xsrydevAPI.delete(`/api/v1/xcdv/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return xsrydevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return xsrydevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return xsrydevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return xsrydevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return xsrydevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return xsrydevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return xsrydevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return xsrydevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return xsrydevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return xsrydevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return xsrydevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cvbr_list,
  api_v1_cvbr_create,
  api_v1_cvbr_retrieve,
  api_v1_cvbr_update,
  api_v1_cvbr_partial_update,
  api_v1_cvbr_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_xcdv_list,
  api_v1_xcdv_create,
  api_v1_xcdv_retrieve,
  api_v1_xcdv_update,
  api_v1_xcdv_partial_update,
  api_v1_xcdv_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
