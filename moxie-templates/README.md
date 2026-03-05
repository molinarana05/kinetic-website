# Moxie-Digital Document Templates

This folder contains the official HTML templates for all client-facing legal and billing documents.

## Files

| File | Purpose |
|---|---|
| `sla_template.html` | Service Level Agreement template |
| `invoice_template.html` | Invoice template |

## How to generate a PDF

Use headless Chrome (already installed on macOS) to render a client-ready PDF:

```bash
# SLA
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox \
  --print-to-pdf="SLA_ClientName.pdf" \
  --print-to-pdf-no-header \
  file:///path/to/sla_template.html

# Invoice
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox \
  --print-to-pdf="Invoice_ClientName.pdf" \
  --print-to-pdf-no-header \
  file:///path/to/invoice_template.html
```

## What to personalise for each client
- Client name & address
- Provider address (already set to Greater Noida)
- Agreement effective date
- Invoice date & invoice number
- Monthly retainer amount
- Scope of services in the deliverables cards (SLA) / table rows (Invoice)
- Signature image paths (already pointing to Molina & Anikesh's sig files)

## Design Notes
- **Dark header band** with document title and agreement ID
- **Yellow (#CCFF00) accent bar** — Moxie brand colour
- **Two-column deliverables grid** in SLA
- **Styled payment table** with dark header row
- **Side-by-side signature block** (Provider left, Client right)
- `@page { margin: 0 }` ensures Chrome's timestamp/header footer is suppressed
