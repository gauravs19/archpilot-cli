'use strict';
const path = require('path');
const fs = require('fs');

const TEMPLATES_DIR = path.join(__dirname);

const TYPES = {
  spec:         { file: 'spec.md',         label: 'Requirements Spec (EARS)',      section: 'Spec-Kit' },
  design:       { file: 'design.md',        label: 'Design Specification',          section: 'Spec-Kit' },
  tasks:        { file: 'tasks.md',         label: 'Task List',                     section: 'Spec-Kit' },
  constitution: { file: 'constitution.md',  label: 'Project Constitution',          section: 'Spec-Kit' },
  lld:          { file: 'lld.md',           label: 'Low-Level Design (LLD)',        section: 'Design' },
  hld:          { file: 'hld.md',           label: 'High-Level Design (HLD)',       section: 'Design' },
  adr:          { file: 'adr.md',           label: 'Architecture Decision Record',  section: 'Design' },
  sdd:          { file: 'sdd.md',           label: 'Solution Design Document',      section: 'Design' },
  contract:     { file: 'contract.md',      label: 'Data Contract',                 section: 'Data' },
  runbook:      { file: 'runbook.md',       label: 'Service Runbook',               section: 'Ops' },
  postmortem:   { file: 'postmortem.md',    label: 'Post-Mortem',                   section: 'Ops' },
};

function getTemplate(type) {
  const meta = TYPES[type];
  if (!meta) return null;
  const p = path.join(TEMPLATES_DIR, meta.file);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
}

function hydrate(content, vars) {
  let out = content;
  for (const [k, v] of Object.entries(vars)) {
    out = out.split(`{{${k}}}`).join(v);
  }
  return out;
}

module.exports = { TYPES, getTemplate, hydrate };
