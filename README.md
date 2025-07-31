# 🧪 Contact List App – Test Automation

This project automates end-to-end (UI) and API testing of the [Thinking Tester Contact List App](https://thinking-tester-contact-list.herokuapp.com/) using **Playwright (JavaScript)**. It follows the **Page Object Model (POM)** pattern.

---

## 🚀 Features

- 🔐 Login tests (positive & negative)
- 👤 Contact CRUD tests (UI + API)
- ✅ Page Object Model (POM) structure

---

## 🛠 Tools Used

- [Playwright](https://playwright.dev/)
- JavaScript (Node.js)
- dotenv (env configs)
- Postman (for manual API tests)

---

## 🗂 Project Structure

```
.
├── tests/
│   ├── e2e/
│   ├── api/
├── pages/
├── .env
├── playwright.config.js
├── README.md
```

---

## 📦 Setup

```bash
git clone <repo-url>
cd contact-list-playwright
npm install
npx playwright install
```

Create a `.env` file:

```env
BASE_URL=https://thinking-tester-contact-list.herokuapp.com
EMAIL=your_email@test.com
PASSWORD=your_password
```

---

## ▶️ Run Tests

```bash
# Run all tests
npx playwright test

# Run UI tests only
npx playwright test tests/ui

# Run API tests only
npx playwright test tests/api

# Run with HTML report
npx playwright show-report
```


## 🧾 Author & License

Developed by **Mairaj Ali**  
MIT License