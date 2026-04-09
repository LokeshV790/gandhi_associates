# Backend Implementation Contracts

## Overview
This document outlines the backend implementation for the Vinod Gandhi & Associates website, including API contracts, data models, and integration approach.

## 1. Mocked Data (Currently in mockData.js)
- **Hero Section Content**: Static text and images
- **Stats**: Company statistics (30+ years, 1000+ clients, etc.)
- **About Section**: Company description and leadership info
- **Services**: List of 12 services with descriptions
- **Why Choose Us**: 4 key features
- **Contact Info**: Phone, email, address

## 2. Backend Features to Implement

### A. Contact Form Submission
- **Model**: ContactMessage
- **Fields**: name, email, phone, subject, message, createdAt, status
- **API**: POST /api/contact/submit
- **Purpose**: Store contact form submissions for admin review

### B. Case Laws Management
- **Model**: CaseLaw
- **Fields**: title, category, description, content, date, tags, slug
- **APIs**: 
  - GET /api/case-laws (list all, with search/filter)
  - GET /api/case-laws/:slug (get single case law)
- **Purpose**: Dynamic case law content management

### C. Service Inquiries
- **Model**: ServiceInquiry
- **Fields**: name, email, phone, serviceType, message, createdAt, status
- **API**: POST /api/services/inquire
- **Purpose**: Track service-specific inquiries

### D. Newsletter Subscription (Optional)
- **Model**: Subscriber
- **Fields**: email, subscribedAt, active
- **API**: POST /api/newsletter/subscribe

## 3. API Contracts

### 3.1 Contact Form Submission
```
POST /api/contact/submit
Body: {
  name: string (required),
  email: string (required, email format),
  phone: string (required),
  subject: string (required),
  message: string (required)
}
Response: {
  success: boolean,
  message: string,
  data: { id: string }
}
```

### 3.2 Case Laws
```
GET /api/case-laws?search=&category=
Response: {
  success: boolean,
  data: CaseLaw[]
}

GET /api/case-laws/:slug
Response: {
  success: boolean,
  data: CaseLaw
}
```

### 3.3 Service Inquiry
```
POST /api/services/inquire
Body: {
  name: string (required),
  email: string (required),
  phone: string (required),
  serviceType: string (required),
  message: string (required)
}
Response: {
  success: boolean,
  message: string
}
```

## 4. Frontend Integration Plan

### Files to Update:
1. **Contact.jsx**: Replace form submission mock with API call to `/api/contact/submit`
2. **CaseLaws.jsx**: Replace mock data with API call to `/api/case-laws`
3. **Services.jsx**: Add inquiry form with API call to `/api/services/inquire`

### Integration Approach:
- Use axios for all API calls (already installed)
- Use REACT_APP_BACKEND_URL from .env
- Add loading states and error handling
- Show toast notifications for success/error responses
- Keep mock data as fallback for static content (hero, about, services descriptions)

## 5. Database Collections

### contact_messages
- Store all contact form submissions
- Admin can review and respond

### case_laws
- Pre-populated with legal resources
- Searchable and filterable

### service_inquiries
- Track service-specific inquiries
- Link to service types

### subscribers (optional)
- Email newsletter subscriptions

## 6. Implementation Steps
1. Create MongoDB models in `/app/backend/models/`
2. Create API routes in `/app/backend/routes/`
3. Update `/app/backend/server.py` to include new routes
4. Update frontend components to use real APIs
5. Test all endpoints
6. Verify form submissions and data retrieval
