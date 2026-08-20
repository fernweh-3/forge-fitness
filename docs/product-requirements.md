# Gym Website Product Requirements

## Goal

Build a responsive website for a local gym that helps visitors:

- Understand the gym's facilities and classes.
- View membership plans.
- Book a trial session.
- Contact the gym.

## Target users

- Adults looking for a local gym.
- Existing members checking classes.
- Visitors interested in a free trial.

## Pages

### Home

1. Header
   - Logo
   - Main navigation
2. Hero

   #### Hero section

   The Hero section uses a two-column layout on desktop:
   - Left column:
     - Display a clear, outcome-focused headline.
     - Display a short supporting paragraph.
     - Display the primary CTA: `Book a Free Trial`.
     - Display a secondary link or button: `Explore Classes`.

   - Right column:
     - Display a responsive image carousel featuring Forge Fitness facilities, training sessions, and the gym community.
     - Display one image at a time.
     - Use high-quality local or placeholder images for the initial demo.
     - Each image must have meaningful alternative text.
     - Use a consistent aspect ratio to prevent layout shifting.
     - Images should not contain essential text because image content may not be available to all users.

   #### Hero layout
   - On desktop and tablet widths, use a two-column layout.
   - The text column should be visually dominant.
   - The image column should occupy approximately 45–55% of the Hero content width.
   - On small screens, stack the layout vertically:
   - Text and CTA first.
   - Image carousel second.
   - The primary CTA must remain visible and prominent on mobile.
   - Avoid horizontal scrolling at all viewport sizes.
   - The layout must work at a minimum viewport width of 375px.

   #### Carousel behavior
   - Provide Previous and Next controls.
   - Provide slide indicators showing the current slide.
   - Each control must be keyboard accessible.
   - Each control must have an accessible name.
   - If the carousel auto-rotates, provide a visible Pause/Play control.
   - Pause automatic rotation when:
   - The user hovers over the carousel.
   - Keyboard focus enters the carousel.
   - The user interacts with a carousel control.
   - Do not automatically resume rotation after keyboard interaction unless the user explicitly starts it again.
   - Respect `prefers-reduced-motion: reduce`.
   - When reduced motion is enabled, disable automatic rotation and animation.
   - The carousel must remain usable without JavaScript animation.
   - The carousel should not be the only way to access important information.

   #### Carousel timing
   - If auto-rotation is enabled, display each slide for at least 5 seconds.
   - Do not use rapid or distracting transitions.
   - Use a subtle transition such as fade or a short slide transition.
   - Avoid autoplay if it does not add meaningful value to the Hero experience.

3. Benefits
   - Three concise benefits:
     - Expert coaching
     - Flexible classes
     - Supportive community

4. Featured classes
   - Show three selected classes.
   - Each class includes name, short description, and difficulty.
   - Link to the full Classes page.

5. Testimonial
   - Show one featured member testimonial.
   - Include the member's name and membership context.

6. Final CTA
   - Repeat the primary CTA: Book a Free Trial.

7. Footer with address, hours, and contact info.

### Memberships

- Monthly, annual, and student plans.
- Price, included benefits, and signup CTA.
- FAQ section.

### Classes

- Class list with name, instructor, level, duration, and schedule.
- Filters for class type and difficulty.
- Empty state when no classes match.

### Contact

- Contact form.
- Address, email, phone, and opening hours.
- Validation for required fields.

## Functional requirements

- The website must work on mobile, tablet, and desktop.
- Navigation must work with keyboard input.
- Forms must show validation errors.
- Buttons must have clear labels.
- Images must have meaningful alt text.
- The initial version can use mock data.
- Do not implement payments yet.

## Acceptance criteria

- A visitor can navigate to every page from the main navigation.
- A visitor can compare membership plans.
- A visitor can filter classes.
- A visitor can submit a trial-session form.
- The layout remains usable at 375px viewport width.
- No TypeScript errors or lint errors are introduced.
