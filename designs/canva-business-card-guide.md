# Canva build guide — navy and gold business card

## Before opening Canva

The selected reference is direction B: a dark navy front with fine gold border, gold emblem and gold wordmark; a matching navy reverse with **both partners' names and titles together**, shared contact details, and a QR area. Follow the supplied reference image: this is one shared partners' card, not separate cards for each person.

Use the transparent texture image `business-card-navy-texture.png` for the dark navy surface. Use `../public/assets/images/rmackay-logo-mark.png` for the existing firm emblem. Three gold outline SVG icons are supplied here: `canva-icon-phone.svg`, `canva-icon-email.svg`, and `canva-icon-location.svg`.

## Set up the Canva file

1. In Canva choose **Create a design → Custom size** and enter **90 mm × 50 mm** (landscape). This is a common card format; confirm the exact size and bleed with the chosen printer before final export.
2. Make a two-page design: page 1 is the front, page 2 the reverse. Turn on rulers/guides if available. Keep live text and logos at least **4 mm from every trim edge**. Do not draw your own bleed until the printer specifies it.
3. Upload `business-card-navy-texture.png`, the emblem PNG, and the three SVG icons. Place the texture edge-to-edge as the page background. If Canva requests a crop, cover the full page evenly; adjust brightness only if white text lacks contrast.

## Shared design system

- Navy: **#071A2F** (base; texture should stay close to this)
- Antique gold: **#C8A35C** (emblem, fine border, rules and icons)
- Warm white: **#F7F5F0** (name and contact text)
- Name/firm serif: **Cormorant Garamond SemiBold**; use **Cinzel** if Cormorant is unavailable.
- Supporting sans: **Montserrat**; use **Open Sans** if needed.
- Keep gold detail thin and restrained. Avoid large decorative scales, gradients, shadows and extra flourishes. Use the firm's existing emblem; don't redraw it.

## Page 1 — front

1. Keep the dark texture full bleed.
2. Add a fine gold rectangular outline about **3 mm inside** the edge. Use a 1 px line in Canva (roughly 0.25–0.35 mm in print).
3. Center the existing gold emblem in the upper half, around **11–13 mm wide**.
4. Under the emblem, set `R. MACKAY` in Cormorant Garamond SemiBold, uppercase, gold, approximately **19–21 pt**. Below it set `ADVOCATES` in Montserrat Medium, uppercase, letter spacing around **4**, approximately **9–10 pt**.
5. Optional small line at bottom: `KAMPALA, UGANDA` in Montserrat, warm white at **6–7 pt**, with modest letter spacing. Omit if it crowds the front.

## Page 2 — reverse (shared partners' card)

1. Reuse the navy texture. Add a thin gold rule along the lower edge, inside the safe area.
2. Use the left **68–70%** for the two partner name/title blocks and shared details; reserve the right **22–24%** for the QR, with a thin vertical gold divider between.
3. Set `ROBERT MACKAY` in warm white Cormorant Garamond SemiBold, approximately **11–12 pt**. Put `Founding Partner` below in gold Montserrat Medium, **7–8 pt**. Add a short fine gold rule between this block and the second partner.
4. Set `RICHARD RUGAMBWA` in warm white Cormorant Garamond SemiBold, approximately **11–12 pt**. Put `Managing Partner` below in gold Montserrat Medium, **7–8 pt**. Keep the two name blocks visually balanced.
5. Add phone, email and location icons from the supplied SVG files, each about **3 mm**. Align the following shared details on a shared left edge in warm white Montserrat, at least **6.5–7 pt**:
   - `+256 393 216 316`
   - `rmackay@rmackayadvocates.com`
   - `Kampala, Uganda`
6. Use the supplied `firm-contact-qr.svg` (preferred for crisp scaling) or `firm-contact-qr.png`. It encodes `https://rmackayadvocates.com/connect`. Keep it black on white, at least **18 × 18 mm**, with its white quiet zone intact. Don't recolor, crop, round, or add a logo over it. Test the exported proof by scanning on more than one phone. Never use a QR-looking pattern from an AI concept image.

## What should the QR open?

The selected destination is `https://rmackayadvocates.com/connect`, a standalone page with direct call, email, directions and contact-save actions. Keep the phone/email printed on the card so the QR is optional. Scan the deployed destination from a phone before printing.

## Export and printer check

Ask the printer for exact card size, bleed, safe-area, color profile and accepted file format first. Then use Canva's **PDF Print** export, enable crop marks/bleed only if the printer asks for them, and order a physical proof. Check that contact copy is readable at actual size and that the QR scans. Canva is convenient for an editable first production pass; use Illustrator/InDesign if the printer requests packaged prepress files or spot-foil separation.
