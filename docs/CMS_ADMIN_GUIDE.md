# DOHaD India CMS Admin Guide

Welcome to the DOHaD India Content Management System. This guide provides simple instructions on how to manage events, content, and system settings.

## 1. How to Login
1. Navigate to your website's admin portal link located at the bottom of the website footer (or go directly to `/admin/login`).
2. Enter your authorized admin email and password.
3. Upon successful login, you will be redirected to the Admin Dashboard.

## 2. How to Create Events
1. In the Admin Dashboard, click on **Events** in the navigation menu.
2. Click the **"New Event"** button.
3. Fill in the required details:
   - **Title**: The name of your event.
   - **Date & Time**: Start and end dates.
   - **Description**: Provide a short description (shown on cards) and a full description.
   - **Event Type & Category**: Select whether it's a webinar, workshop, etc.
   - **Speakers & Location**: Add where it's happening and who is speaking.
   - **Registration Link**: If attendees need to register on an external platform, paste the URL here.
4. Check **"Featured"** if you want the event highlighted prominently.
5. Click **"Save"**.

## 3. How to Upload Images
1. When creating or editing an event, you will see an **Image Upload** section.
2. Click the upload area or drag and drop your image file.
3. Note: The system accepts **JPG, PNG, WEBP, GIF, and PDF** files up to **5MB**.
4. Once the upload finishes, the image will be safely stored in the cloud (Cloudinary) and linked to your event.

## 4. How to Edit Homepage Content
1. Go to the **Advisory Board** or **Settings** tab in your admin dashboard.
2. Here you can manage the list of advisory members and general site settings.
3. Save your changes, and they will reflect immediately on the main website.

## 5. How to Manage Newsletter Subscribers
1. Go to the **Newsletter** tab.
2. You will see a list of all users who have subscribed.
3. You can export or copy these emails to use in your email marketing tool (e.g., Mailchimp, Resend).

## 6. How to Publish/Unpublish Events
1. In the **Events** list, click **Edit** on an existing event.
2. Toggle the **"Published"** status.
3. **Unpublishing** hides the event from the public site without deleting it from your records. Save your changes.

## 7. How to Delete Events
1. In the **Events** list, locate the event you want to remove.
2. Click the **Delete** (trash bin) icon next to it.
3. Confirm the deletion. **Note:** This action cannot be undone.

## 8. Environment Variables Required
For the IT team, ensure the following are set in the Vercel production environment:
- `MONGODB_URI`: Connection string for the database.
- `JWT_SECRET`: A strong, random string used for secure logins.
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: Credentials for image storage.

## 9. Cloudinary Setup Basics
- All images uploaded through the CMS are routed directly to Cloudinary.
- Images are automatically placed in the `dohad-india` folder in your Cloudinary account.
- No manual Cloudinary management is needed for day-to-day operations unless you want to clean up old, unused images.

## 10. Deployment Notes
- The website is built using Next.js. Any changes to the code require a deployment (usually automated via GitHub -> Vercel).
- Content changes (Events, Advisory members) are dynamic and show up immediately without needing a new deployment!
