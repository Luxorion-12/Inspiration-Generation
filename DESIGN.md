# Design System Document

## 1. Overview & Creative North Star

### Creative North Star: "The Kinetic Curator"
This design system moves away from the static, rigid nature of traditional productivity tools. Instead, it embraces a "Kinetic" energy where ideas feel fluid and generative. We achieve this by breaking the traditional 1x1 grid with intentional depth, overlapping elements, and a sense of gravitational flow. 

The aesthetic is **Playful High-End**: it uses a sophisticated palette of electric purples (`primary: #6a1cf6`) and layered neutrals, balanced by a layout that suggests motion. The 3x3 grids are not just containers; they are floating decks of inspiration that "pour" content into the results area below. By using exaggerated typography scales and air-tight spacing, we ensure the interface feels custom-built and editorial rather than a generic template.

---

## 2. Colors

### Palette Strategy
The color system is anchored by the vibrant **Electric Purple** (`primary: #6a1cf6`). This is our "Energy" color, reserved for the most critical actions and focus points.

- **Primary & Interactive:** Use `primary` for the central '+' button. For a "signature" look, apply a gradient transitioning from `primary` (#6a1cf6) to `primary_container` (#ac8eff) to give interactive elements a 3D, tactile soul.
- **Surface & Neutrals:** The foundation is `surface` (#f5f6f7). This light neutral is designed to be the "canvas" for more energetic elements.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. We define space through tonal shifts. 
- Use `surface_container_low` (#eff1f2) for the 3x3 grid backgrounds.
- Place individual grid items on `surface_container_lowest` (#ffffff) to make them pop.
- Contrast is created through depth and color blocks, never through "outlining."

### Signature Textures & Glass
To achieve a premium "Glassmorphism" effect for floating panels or the central '+' action:
- Use `surface_container_lowest` (#ffffff) at 70% opacity.
- Apply a heavy `backdrop-blur` (20px+).
- This ensures the "flowing" content underneath is visible but diffused, creating a sense of physical layering.

---

## 3. Typography

The typography is a dialogue between the structured **Plus Jakarta Sans** (Headlines) and the readable **Manrope** (Body/UI).

- **Display & Headlines:** Use `display-lg` for the "Inspiration Generator" title. The wide aperture of Plus Jakarta Sans provides a modern, high-tech feel.
- **Body Copy:** `body-lg` (Manrope) is the workhorse for generated ideas. It is optimized for both Latin and Chinese characters, maintaining a clean vertical rhythm.
- **Chinese Support:** For Chinese characters, ensure a `line-height` of 1.6x the font size to prevent the dense strokes from feeling cluttered. Match the visual weight of Manrope by using **PingFang SC** or **Source Han Sans** for local fallbacks.
- **Hierarchy:** Use `label-md` in `on_surface_variant` (#595c5d) for meta-data, creating a clear distinction between "content" and "interface."

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Stacking**. 
1. **Level 0 (Base):** `surface` (#f5f6f7)
2. **Level 1 (Sections):** `surface_container` (#e6e8ea) — Use for the 3x3 grid areas.
3. **Level 2 (Cards):** `surface_container_lowest` (#ffffff) — Use for the individual inspiration tiles.

### Ambient Shadows
Shadows must be invisible but felt. 
- **Style:** Extra-diffused. `Blur: 24px`, `Opacity: 6%`.
- **Color:** Instead of black, use a tinted shadow derived from `primary_dim` (#5d00e3) for the central button and `on_surface` (#2c2f30) for cards.

### The "Ghost Border" Fallback
If an element lacks contrast against its background, use a **Ghost Border**: `outline_variant` (#abadae) at **15% opacity**. This creates a suggestion of an edge without the "boxiness" of standard UI.

---

## 5. Components

### The Central "+" Action (Signature Component)
- **Shape:** Circular (`roundedness: full`).
- **Color:** Gradient from `primary` to `primary_dim`.
- **Interaction:** On hover, increase the shadow spread and scale to 105%. It should feel like the "heart" of the generator.

### 3x3 Grid Tiles
- **Rounding:** `xl` (1.5rem) to maintain the "playful" aesthetic.
- **Border:** None. Use `surface_container_lowest` for the tile color.
- **Active State:** When a tile is selected as a "source" for inspiration, apply a `primary` border at 2px using the "Ghost Border" technique (20% opacity).

### Result List (The "Flow" Area)
- **Concept:** This area should feel like the "output" of the two grids. Use the `24` (8.5rem) spacing token at the top to create a "gravity" gap.
- **Dividers:** **Forbidden.** Separate list items using `spacing: 4` (1.4rem) of vertical white space or by alternating background tints between `surface` and `surface_container_low`.

### Inputs & Text Fields
- **Background:** `surface_container_high` (#e0e3e4).
- **Rounding:** `md` (0.75rem).
- **Focus State:** Transition the background to `surface_container_lowest` and add a `primary` glow.

---

## 6. Do's and Don'ts

### Do
- **Do** use asymmetrical spacing. If the left 3x3 grid is slightly higher than the right, it creates a "dynamic" tension that feels custom.
- **Do** prioritize the Chinese typography's legibility; ensure that `headline-sm` is used for category titles within the grids.
- **Do** use the `20` (7rem) spacing token for the main margins to give the content "room to breathe."

### Don't
- **Don't** use 100% black text. Always use `on_surface` (#2c2f30) for a softer, premium editorial feel.
- **Don't** use sharp corners. Every element should have at least the `md` (0.75rem) rounding to keep the "Playful" brand promise.
- **Don't** use "Drop Shadows" on everything. Reserve shadows only for elements that "float" (the + button and active cards). Everything else should rely on tonal layering.