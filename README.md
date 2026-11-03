# Personal Portfolio Website

Live site: https://mabdulrafay7zip.github.io/AICT-Portfolio-Project/

A one-page personal portfolio for Muhammad Abdul Rafay — AI & Machine
Learning Developer, BS Artificial Intelligence at Air University, Islamabad.
It is a static site: `index.html` is self-contained (styles and scripts are
inline; only Google Fonts loads from outside), so there is no build step and
nothing to install to view it.

> Note: this repository hosts the earlier AICT portfolio site. The current
> main portfolio lives at https://mabdulrafay7zip.github.io/ (the
> `mabdulrafay7zip.github.io` repository).

## What's on the page

- **Hero** — name, role, and "Open to remote AI/ML internships — worldwide",
  with stats for best model accuracy (97.5%), Netflix titles analysed
  (8,790), ML projects shipped (4) and internships completed (3).
- **My Short Story** — how the journey into AI started at Air University,
  and the focus on building machine learning systems that work.
- **Journey** — a four-chapter timeline: Foundations in Computing (2025),
  Python & Data (2025–2026), Machine Learning (2026), and Building &
  Shipping (Sep–Nov 2026).
- **Selected Work** — the featured live Netflix recommender demo, plus
  project rows linking to their GitHub repositories (see below).
- **Beyond the Code** — hobbies: book reading, cycling and photography.
- **Contact** — a "Get in Touch" band linking to `form.html`.

## Projects featured

- [Netflix Recommender — Live Demo](https://mabdulrafay7zip.github.io/Netflix-Recommender-Live-Demo/) —
  TF-IDF + cosine similarity over 8,790 titles; runs in the browser.
  Code: [Netflix-Recommender-Live-Demo](https://github.com/mabdulrafay7zip/Netflix-Recommender-Live-Demo).
- [Netflix ML Projects](https://github.com/mabdulrafay7zip/Netflix_ML_Projects) —
  recommender, content-type prediction (91.9% accuracy) and clustering on
  8,790 titles.
- [Handwritten Character Recognition](https://github.com/mabdulrafay7zip/HandwrittenCharacterRecognition) —
  SVM model, 97.5% accuracy.
- [Credit Scoring Model](https://github.com/mabdulrafay7zip/CreditScoringModel) —
  Random Forest credit-risk scoring, 75% accuracy, F1 0.83.
- [Disease Prediction](https://github.com/mabdulrafay7zip/DiseasePrediction) —
  diabetes prediction with Random Forest & SVM, 74% accuracy.

## Contact page

`form.html` is a contact page with name, email, subject and message fields,
plus direct links to GitHub and LinkedIn. Submitting the form opens the
visitor's own email app with the message addressed to Rafay — nothing is
stored on the website.

## Viewing locally

```bash
git clone https://github.com/mabdulrafay7zip/AICT-Portfolio-Project.git
cd AICT-Portfolio-Project
python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser. (Opening `index.html`
directly in a browser works too.)

## Project structure

```
AICT-Portfolio-Project/
├── index.html    # the whole portfolio page (inline CSS + JS)
├── form.html     # contact page (Bootstrap via CDN, inline CSS + JS)
├── images/       # portrait and project/hobby photos
├── book.webp     # book-reading hobby image
└── README.md     # this file
```

Author: Muhammad Abdul Rafay — ML Intern
