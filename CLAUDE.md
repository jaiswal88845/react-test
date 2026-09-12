# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

`react-test` — a Vite + React 19 + TypeScript scratch project used for practice/experimentation. No backend, no router, no state library, no test runner.

## Commands

```bash
npm run dev      # Vite dev server (http://localhost:5173)
npm run build    # tsc -b (typecheck) then vite build -> dist/
npm run lint     # eslint .
npm run preview  # serve the built dist/
```

There is no test script. If asked to verify a change, run `npm run build` (it typechecks) and `npm run lint`.

## Layout

```
index.html          # entry, mounts #root
src/main.tsx        # createRoot + StrictMode
src/App.tsx         # root component, composes feature components
src/userLoginForm.tsx
src/App.css         # App-scoped styles
src/index.css       # global styles / theme tokens
public/, src/assets/
```

Flat `src/` — no `components/` directory yet. If the file count grows past ~10, propose introducing `src/components/` rather than adding more files to the root.

## Conventions

- **TypeScript is strict**, plus `noUnusedLocals` and `noUnusedParameters` — an unused import or parameter fails `npm run build`, not just lint.
- `verbatimModuleSyntax` is on: use `import type { Foo }` for type-only imports.
- Components: default-exported function declarations (`function App() {...}` / `export default App`), not arrow consts.
- **Filenames in `src/` are currently camelCase** (`userLoginForm.tsx`) while the component inside is PascalCase (`UserLoginForm`). This is inconsistent with the usual React convention; match the existing style unless the user asks to rename.
- No semicolons, single quotes, 2-space indent (existing style — there is no Prettier config).
- Styling is plain CSS with hand-written class names. No CSS modules, no Tailwind.

## Notes

- `src/userLoginForm.tsx` is a UI-only stub: it `console.log`s the credentials and sets a success state unconditionally. There is no auth backend. Before treating it as real, the `console.log` of the password must go.
- React 19 — no `forwardRef` needed for ref forwarding, `ref` is a normal prop.
