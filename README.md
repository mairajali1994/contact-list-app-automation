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
- Postman (API tests)

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
git clone https://github.com/mairajali1994/contact-list-app-automation
cd contact-list-app-automation
npm install
```

Create a `.env` file:

```env
BASE_URL=https://thinking-tester-contact-list.herokuapp.com
USER_EMAIL=exampletest@gmail.com
USER_PASSWORD=password
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

## 🔁 CI/CD with GitHub Actions

This project runs tests automatically on every push/pull request via GitHub Actions.
The report is uploaded as an artifact after each run.

## 🧾 Author & License

Developed by **Mairaj Ali**  
MIT License