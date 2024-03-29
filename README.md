# Project REST-Rant
REST-Rant is an app where users can review restaurants.

## Table of Contents
| Method | Path | Purpose |
|--------|------|---------|
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing page |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |

## Restaurants (Mock Data)
| Restaurant Name | City | State | Cuisines | Picture |
|-----------------|------|-------|----------|---------|
| Taegukgi Korean BBQ | San Diego | CA | Korean BBQ |(img)|
| Mister A's | San Diego | CA | Fine-Dining Steak & Seafood |(img)|
| Fogo De Chao | San Diego | CA | Brazilian Steakhouse |(img)|
| Prince Street Pizza | San Diego | CA | NY Style Pizza |(img)|