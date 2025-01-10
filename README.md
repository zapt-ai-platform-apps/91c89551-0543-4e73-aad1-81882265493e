# AI Assistant App

## Overview
This app features an AI assistant that can explain any topic you inquire about, provide detailed files, and generate AI-driven images based on your descriptions.

## User Journeys
1. [Sign In](docs/journeys/sign-in.md) - Authenticate using ZAPT
2. [Ask for an Explanation](docs/journeys/ask-explanation.md) - Get detailed explanations on any topic
3. [Download Explanation File](docs/journeys/download-explanation-file.md) - Receive a file with the explanation
4. [Generate an AI Image](docs/journeys/generate-ai-image.md) - Create images based on your prompts

## External APIs
- **Supabase:** Used for authentication and managing user sessions.
- **Drizzle ORM:** Handles database interactions with a PostgreSQL database.
- **Resend:** Facilitates sending emails.
- **Sentry:** Provides error logging and monitoring.
- **Progressier:** Adds PWA functionalities.
- **Umami:** Tracks website analytics.

Make sure to configure the required environment variables as listed in the `.env` file.

---
**Note:** Replace placeholders and ensure all environment variables are properly set before deploying the app.