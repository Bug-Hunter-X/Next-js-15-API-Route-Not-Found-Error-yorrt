# Next.js 15 API Route Not Found Bug

This repository demonstrates a bug encountered when upgrading a Next.js 14 application to Next.js 15.  A previously functional API route results in a `Route not found` error in Next.js 15.

## Bug Description

A simple API route, `/api/hello`, functions correctly in Next.js 14.  After upgrading to Next.js 15, the same route throws a `Route not found` error.  The code itself remains unchanged.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run `npm run dev` to start the development server in Next.js 15.
4. Access `/api/hello` in your browser.  The request will fail with a 404 error.

## Solution

The issue appears to be related to changes in the way Next.js 15 handles API routes. The solution involves adding the `app` directory to the Next.js configuration.

This project includes a branch with a fix demonstrating how the code must be adjusted to work correctly in Next.js 15.