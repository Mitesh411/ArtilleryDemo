# Artillery Demo Test Suite

An enterprise-ready demonstration repository for performance, load, and reliability testing using [Artillery](https://www.artillery.io/). This repository demonstrates load testing strategies for WebSocket/Socket.IO applications and real-browser automation scenarios powered by Playwright, complete with GitHub Actions CI/CD pipeline integration.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Load Tests](#running-load-tests)
  - [Socket.IO Load Testing](#socketio-load-testing)
  - [Playwright Browser Testing](#playwright-browser-testing)
- [Generating Test Reports](#generating-test-reports)
- [CI/CD Pipeline Integration](#cicd-pipeline-integration)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 Overview

**Artillery** is an open-source, cloud-native performance and load testing tool designed for modern infrastructure and applications. This project serves as a reference architecture and starter kit for:

* **Real-time Event Load Testing**: Benchmarking Socket.IO websocket connections, latency, and event response handling under load.
* **Browser-based User Journey Load Testing**: Simulating end-to-end user journeys using headless Chromium/Playwright browser automation.
* **Automated CI/CD Workflows**: Executing performance suites automatically on push events via GitHub Actions and archiving detailed test reports.

---

## ✨ Features

- **Socket.IO Engine Integration**: Test real-time bi-directional event communication and enforce SLA assertions (`maxErrorRate`, max response time threshold).
- **Playwright Engine Integration**: Combine synthetic user monitoring with load testing by leveraging real browser automation steps (`flows.js`).
- **CI/CD Ready**: Dockerized execution pipeline using the official `artilleryio/artillery:latest` container in GitHub Actions.
- **HTML Reporting**: Automated JSON report generation and HTML report rendering for clear performance visualization.

---

## 📂 Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── blank.yml                   # GitHub Actions pipeline for automated load testing
├── tests/
│   └── performance/
│       ├── socket-io.yml               # Socket.IO performance test configuration
│       ├── browser-test-with-steps.yml # Playwright browser test configuration
│       └── flows.js                    # Custom Playwright browser steps
├── socket-io.yml                       # Root Socket.IO test suite configuration
└── README.md                           # Documentation
```

---

## ⚙️ Prerequisites

To run these tests locally, ensure you have the following installed:

* **Node.js**: `v16.x` or later
* **npm**: `v8.x` or later
* **Artillery CLI**:
  ```bash
  npm install -g artillery
  ```

* *(Optional)* **Playwright plugin for Artillery** (for browser-based testing):
  ```bash
  npm install -g artillery-engine-playwright
  ```

---

## 🏁 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ArtilleryDemo.git
   cd ArtilleryDemo
   ```

2. **Verify Artillery Installation:**
   ```bash
   artillery --version
   ```

---

## 🧪 Running Load Tests

### Socket.IO Load Testing

The Socket.IO test scenario emits messages to a target server channel and validates echo responses and latency metrics.

* **Execute test:**
  ```bash
  artillery run tests/performance/socket-io.yml
  ```

* **Configuration Summary (`tests/performance/socket-io.yml`):**
  * **Target**: `http://lab.artillery.io`
  * **Engine**: `socketio`
  * **Ensure Criteria**: Error rate < 1%, Max response time < 500ms

### Playwright Browser Testing

Simulate real browser interaction (e.g., navigating to pages, clicking links) under load using Playwright integration.

* **Execute browser test:**
  ```bash
  artillery run tests/performance/browser-test-with-steps.yml
  ```

---

## 📊 Generating Test Reports

You can generate detailed JSON performance logs and render interactive HTML reports for analysis.

1. **Run test and export raw output:**
   ```bash
   mkdir -p reports
   artillery run --output reports/report.json tests/performance/socket-io.yml
   ```

2. **Generate interactive HTML report:**
   ```bash
   artillery report --output reports/report.html reports/report.json
   ```

3. **View Report:** Open `reports/report.html` in your web browser.

---

## 🔄 CI/CD Pipeline Integration

This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/blank.yml`.

### Workflow Steps:
1. **Trigger**: Automatically runs on `push` to the `main` branch.
2. **Container**: Uses `artilleryio/artillery:latest` official Docker image.
3. **Execution**:
   * Runs the Socket.IO load test.
   * Generates JSON raw reports and visual HTML reports.
4. **Artifact Upload**: Archives test reports (`reports/*`) as a downloadable artifact in GitHub Actions (`artillery-test-report`).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information if applicable.
