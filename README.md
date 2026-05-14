# Archpilot CLI

> A command-line tool to instantly scaffold enterprise architecture documents using the Archpilot Standards Library.

## Installation

\\\ash
# Install globally (if published to npm)
npm install -g archpilot-cli

# Or clone and link locally
git clone https://github.com/gauravs19/archpilot-cli.git
cd archpilot-cli
npm install
npm link
\\\

## Commands

### \rchpilot init\
Initializes Archpilot in your current project. Creates a \.archpilot/config.json\ and a \.specs/\ directory.

### \rchpilot new <type>\
Scaffolds a new architecture document from production-grade templates.
**Supported types:**
- \spec\ — Requirements Specification (EARS notation)
- \design\ — Design Specification
- \	asks\ — Atomic Task List
- \constitution\ — Project Constitution
- \lld\ — Low-Level Design
- \hld\ — High-Level Design
- \dr\ — Architecture Decision Record
- \contract\ — Data Contract
- \unbook\ — Service Runbook
- \postmortem\ — Blameless Post-Mortem

### \rchpilot list\
Lists all available document templates.

### \rchpilot check [file]\
Validates your architecture documents against Archpilot rules (EARS syntax, NFRs, etc).

## Methodology
This CLI enforces **Spec-Driven Development (SDD)**, preventing AI architectural hallucinations by shifting from "vibe coding" to verifiable, spec-driven engineering.

See the full standards library: [Archpilot on GitHub](https://github.com/gauravs19/archpilot)
