<div align="center">
  <h1>🏛️ Archpilot CLI</h1>
  <p><strong>From "Vibe Coding" to Verifiable Engineering.</strong><br>Scaffold production-grade enterprise architecture documents, enforce Spec-Driven Development, and eliminate AI hallucinations right from your terminal.</p>
  
  <p>
    <a href="https://gauravs19.github.io/archpilot/"><img src="https://img.shields.io/badge/Documentation-Live-blue.svg" alt="Documentation" /></a>
    <a href="https://github.com/gauravs19/archpilot-cli/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License: MIT" /></a>
    <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-%3E%3D16.0.0-brightgreen.svg" alt="Node Version" /></a>
  </p>
</div>

---

## ⚡ Why Archpilot CLI?

When using LLMs (Claude, GitHub Copilot, AWS Kiro, Cursor) for software architecture, providing unstructured prompts leads to generic, junior-level output.

**Archpilot CLI** solves this by scaffolding highly structured **Spec-Kit** templates. It forces the workflow into 4 phases:
1. **Specify:** EARS-compliant requirements (`requirements.md`)
2. **Plan:** Component and data design (`design.md`)
3. **Task:** Atomic implementation steps (`tasks.md`)
4. **Govern:** Project constitution & boundaries (`constitution.md`)

When you feed these structured artifacts back into an LLM, it operates at a **Senior Enterprise Architect** level.

---

## 🚀 Installation

Install globally using `npm` to use the `archpilot` command anywhere:

```bash
# Clone the repository
git clone https://github.com/gauravs19/archpilot-cli.git

# Navigate and install
cd archpilot-cli
npm install

# Link globally
npm link
```

---

## 🛠️ Usage & Commands

### `archpilot init`
Initializes Archpilot in your current repository. Creates the `.archpilot` configuration folder and a `.specs` directory to house your architecture artifacts.
```bash
archpilot init
```

### `archpilot new <type>`
Instantly scaffolds a markdown template. If you don't specify a type, an interactive menu will guide you.
```bash
archpilot new spec --name "Payment Gateway"
archpilot new hld --name "Order Processing Engine"
```

**Available Templates:**
| Category | Command | Description |
|----------|---------|-------------|
| **Spec-Kit** | `spec` | Requirements using EARS syntax |
| **Spec-Kit** | `design` | Component, API, and Data modeling |
| **Spec-Kit** | `tasks` | Atomic tasks with Acceptance Criteria |
| **Spec-Kit** | `constitution`| Hard constraints and AI Agent boundaries |
| **Design** | `hld` | High-Level Design (Context, Containers) |
| **Design** | `lld` | Low-Level Design (Sequence, DB schemas) |
| **Design** | `adr` | Architecture Decision Record |
| **Design** | `sdd` | Solution Design Document |
| **Data** | `contract` | Producer/Consumer Data Contract |
| **Ops** | `runbook` | Incident Response & Runbook |
| **Ops** | `postmortem` | Blameless Incident Post-Mortem |

### `archpilot list`
Displays a clean, categorized list of all available templates you can scaffold.

### `archpilot check [file]`
Validates a generated document to ensure it meets Archpilot standards (e.g., checks for proper EARS notation, measurable NFR targets, and missing security sections).
```bash
archpilot check .specs/payment-gateway-spec.md
```

### `archpilot rules [query]`
Connects to the upstream [Archpilot Standards Library](https://github.com/gauravs19/archpilot) to search for specific architectural rules right from your terminal.
```bash
archpilot rules "security"
```

---

## 🏗️ The Spec-Driven Workflow

1. Run `archpilot init` in your project.
2. Run `archpilot new spec` to write out exactly **what** the business needs.
3. Run `archpilot new design` to define **how** it will be built.
4. Pass both files to Claude, Cursor, or Copilot to generate the code. 
5. The LLM stays bounded, compliant, and architecturally sound.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/gauravs19/archpilot-cli/issues).

## 📄 License
This project is [MIT](https://github.com/gauravs19/archpilot-cli/blob/master/LICENSE) licensed. Built by [Gaurav Sharma](https://gauravs19.github.io/portfolio/).
