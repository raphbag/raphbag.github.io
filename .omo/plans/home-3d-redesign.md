# Home 3D Redesign

## TL;DR

> **Quick Summary**: Refonte de la page d'accueil (`HomeView.vue`) pour inclure une scène 3D interactive sur le thème de la cybersécurité (globe/nœud procédural) et des animations au défilement, tout en maintenant des performances maximales.
>
> **Deliverables**:
> - Installation et configuration de TresJS (Three.js) et GSAP.
> - Nouveau composant 3D `CyberScene.vue` (génération procédurale, sans modèle externe lourd).
> - Mise à jour de `HomeView.vue` avec GSAP ScrollTrigger pour orchestrer le DOM et la caméra 3D.
>
> **Estimated Effort**: Medium
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: Setup dependencies → CyberScene 3D → Scroll Animations Integration

---

## Context

### Original Request
Le design de la page principale doit être refait : moderne/futuriste avec de la 3D en lien avec la cybersécurité (effet en scrollant), de très bonne qualité.

### Interview Summary
**Key Discussions**:
- **3D Model**: Option B (Modèle procédural de type globe/nœud technologique) pour éviter les gros fichiers `.gltf`.
- **Colors**: Conserver la palette sombre existante avec les accents Bleu/Vert.
- **Libraries**: Autorisation d'ajouter les dépendances nécessaires (TresJS, GSAP) à condition d'optimiser les performances.

### Metis Review (Self-Analysis)
**Identified Gaps** (addressed):
- **Performance Mobile** : Ajout d'une condition pour réduire/désactiver la 3D sur les petits écrans ou les appareils en mode économie d'énergie.
- **Memory Leaks** : Exigence stricte de nettoyage (kill) des instances GSAP et de la boucle de rendu Three.js lors du démontage du composant (Navigation SPA).
- **Scope Creep** : Isolement strict du périmètre à `HomeView.vue`.

---

## Work Objectives

### Core Objective
Créer une expérience d'accueil immersive et futuriste grâce à la 3D et aux animations au scroll, sans compromettre les performances du portfolio.

### Concrete Deliverables
- `package.json` mis à jour avec `three`, `@tresjs/core`, `gsap`.
- `src/components/CyberScene.vue` (Composant de rendu 3D).
- `src/views/HomeView.vue` (Refactoré pour intégrer la scène et GSAP).

### Definition of Done
- [ ] Le site se lance sans erreur de compilation.
- [ ] La scène 3D s'affiche et réagit au scroll sur Desktop.
- [ ] Les animations se nettoient correctement lors de la navigation vers la page "Projets".

### Must Have
- Animations procédurales 3D (Wireframe, particules, ou globe).
- Intégration de GSAP ScrollTrigger pour animer les sections HTML existantes au fur et à mesure du défilement.
- Nettoyage explicite de GSAP (`onUnmounted`).

### Must NOT Have (Guardrails)
- Aucun téléchargement de fichier `.gltf` ou `.obj` massif (utilisation exclusive de primitives Three.js).
- Aucune modification de `ProjectView.vue` ou des autres vues non concernées.
- Aucun bloqueur de scroll (scroll-jacking sévère) qui empêcherait la navigation normale.

---

## Verification Strategy (MANDATORY)

> **ZERO HUMAN INTERVENTION** - ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO
- **Automated tests**: None
- **Framework**: none
- **If TDD**: N/A

### QA Policy
Every task MUST include agent-executed QA scenarios using `playwright`.
Evidence saved to `.omo/evidence/task-{N}-{scenario-slug}.{ext}`.
L'agent devra naviguer, vérifier la présence des canvas 3D, scroller, et s'assurer de l'absence d'erreurs console.

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately - Setup):
├── Task 1: Installer les dépendances 3D et Animation (TresJS, Three, GSAP) [quick]

Wave 2 (After Wave 1 - Core Features):
├── Task 2: Créer le composant 3D CyberScene [visual-engineering]
├── Task 3: Préparer la structure CSS de HomeView.vue pour le pinning/scroll [visual-engineering]

Wave 3 (Integration):
├── Task 4: Orchestrer GSAP ScrollTrigger dans HomeView.vue [deep]

Wave FINAL (Reviews):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Real manual QA (unspecified-high)
└── Task F4: Scope fidelity check (deep)
```

### Dependency Matrix
- **1**: -
- **2**: 1
- **3**: 1
- **4**: 2, 3

### Agent Dispatch Summary
- **Wave 1**: T1 → `quick`
- **Wave 2**: T2 → `visual-engineering`, T3 → `visual-engineering`
- **Wave 3**: T4 → `deep`
- **FINAL**: F1-F4 → (oracle, unspecified-high, deep)

---

## TODOs

- [ ] 1. Installer les dépendances 3D et d'animation

  **What to do**:
  - Installer `three`, `@tresjs/core` et `gsap`.
  - Mettre à jour `vite.config.js` si nécessaire (ex: template compiler options pour TresJS si requis par leur documentation, bien que la version récente utilise souvent des composants pré-compilés).

  **Must NOT do**:
  - N'installez pas de bibliothèques tierces non approuvées ou d'anciennes versions (utilisez les dernières versions stables).

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Tâche d'installation de dépendances standard.
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO (prerequisite for all others)
  - **Parallel Group**: Wave 1
  - **Blocks**: 2, 3, 4
  - **Blocked By**: None

  **References**:
  - `package.json` - Pour vérifier l'ajout des dépendances.

  **Acceptance Criteria**:
  - [ ] Les packages sont présents dans les dependencies.
  - [ ] Le projet compile correctement avec `npm run build`.

  **QA Scenarios**:
  ```
  Scenario: Vérification des dépendances et compilation
    Tool: interactive_bash
    Preconditions: Dépendances installées
    Steps:
      1. Lancer `npm run build`
      2. Vérifier que la commande se termine avec succès (code 0)
    Expected Result: Compilation réussie sans erreur bloquante.
    Failure Indicators: Erreurs de compilation liées à ThreeJS ou TresJS.
    Evidence: .omo/evidence/task-1-build.txt
  ```

  **Commit**: YES
  - Message: `chore: install three, tresjs and gsap`

- [ ] 2. Créer le composant 3D CyberScene

  **What to do**:
  - Créer `src/components/CyberScene.vue`.
  - Implémenter une scène `<TresCanvas>` avec un composant 3D procédural (ex: un mesh "Icosahedron" filaire vert/bleu néon tournant lentement, ou un système de particules) représentant un nœud réseau cybersécurité.
  - Exposer des "props" ou utiliser un `defineExpose` pour permettre au composant parent d'animer la rotation/position de la caméra ou de l'objet principal.

  **Must NOT do**:
  - Ne pas charger de fichiers `.gltf` externes.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Création d'un visuel 3D et gestion de rendu.
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocks**: 4
  - **Blocked By**: 1

  **References**:
  - `@tresjs/core` docs - Syntaxe déclarative `<TresCanvas>`, `<TresPerspectiveCamera>`, `<TresMesh>`.

  **Acceptance Criteria**:
  - [ ] Le fichier `CyberScene.vue` est créé.
  - [ ] Utilise uniquement des géométries/matériaux Three.js natifs via TresJS.

  **QA Scenarios**:
  ```
  Scenario: Intégration de CyberScene isolée
    Tool: interactive_bash
    Preconditions: Composant créé
    Steps:
      1. Lancer la vérification linter `npm run lint`
    Expected Result: Pas d'erreur linter dans CyberScene.vue
    Evidence: .omo/evidence/task-2-lint.txt
  ```

  **Commit**: YES
  - Message: `feat: create procedural 3D CyberScene component`

- [ ] 3. Refonte de la structure CSS de HomeView.vue

  **What to do**:
  - Modifier le template et le CSS de `HomeView.vue`.
  - Préparer un conteneur d'arrière-plan (`position: fixed`, `z-index: -1`) pour la future scène 3D.
  - Structurer les sections (Hero, Compétences, Contact) de façon à ce qu'elles défilent par-dessus l'arrière-plan, avec des espacements (paddings/margins) suffisants pour que les effets de scroll GSAP aient le temps de se déclencher.

  **Must NOT do**:
  - Ne pas modifier le contenu textuel ou la logique de copie d'email.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Travail d'intégration CSS et mise en page.
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocks**: 4
  - **Blocked By**: 1

  **References**:
  - `src/views/HomeView.vue` - Styles actuels à adapter (retirer les backgrounds opaques s'ils masquent le fond).

  **Acceptance Criteria**:
  - [ ] Structure prête pour le calque fixe en arrière-plan.
  - [ ] Les sections défilent correctement sans fond opaque cachant le layer -1.

  **QA Scenarios**:
  ```
  Scenario: Layout responsive sans cassure
    Tool: playwright
    Preconditions: Serveur de dev lancé
    Steps:
      1. Ouvrir la page d'accueil.
      2. Scroller de haut en bas.
    Expected Result: Les sections sont lisibles, pas de débordement horizontal.
    Evidence: .omo/evidence/task-3-layout.png
  ```

  **Commit**: YES
  - Message: `style: update HomeView layout for fixed 3D background`

- [ ] 4. Orchestrer GSAP ScrollTrigger dans HomeView.vue

  **What to do**:
  - Importer `CyberScene.vue` et `gsap` (avec `ScrollTrigger`) dans `HomeView.vue`.
  - Dans le `onMounted`, configurer des animations GSAP : par exemple, faire apparaître les blocs (fade-in) au scroll, et idéalement faire tourner/zoomer la scène 3D en fonction de la progression du scroll.
  - Dans `onUnmounted`, appeler impérativement `ScrollTrigger.getAll().forEach(t => t.kill())` pour éviter les memory leaks.
  - Désactiver ou réduire l'effet sur mobile si `window.innerWidth < 768`.

  **Must NOT do**:
  - Ne pas oublier le nettoyage (`kill()`) lors du démontage du composant.

  **Recommended Agent Profile**:
  - **Category**: `deep`
    - Reason: Logique complexe d'interaction entre l'état du composant, GSAP, et le cycle de vie Vue.
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3
  - **Blocks**: F1
  - **Blocked By**: 2, 3

  **References**:
  - `src/views/HomeView.vue` - Emplacement de la logique GSAP.
  - `src/components/CyberScene.vue` - Objet à animer.

  **Acceptance Criteria**:
  - [ ] GSAP ScrollTrigger est enregistré et fonctionnel.
  - [ ] Nettoyage `onUnmounted` présent.

  **QA Scenarios**:
  ```
  Scenario: Animations ScrollTrigger actives et vue 3D
    Tool: playwright
    Preconditions: Serveur de dev lancé
    Steps:
      1. Ouvrir la page d'accueil.
      2. Prendre un screenshot du viewport (Hero).
      3. Scroller de 500px vers le bas (Compétences).
      4. Prendre un screenshot.
    Expected Result: Le canvas 3D est présent, les éléments apparaissent correctement.
    Failure Indicators: Erreurs JavaScript (GSAP introuvable), page blanche.
    Evidence: .omo/evidence/task-4-scroll.png
    
  Scenario: Navigation sans Memory Leak
    Tool: playwright
    Preconditions: Serveur de dev lancé
    Steps:
      1. Ouvrir la page d'accueil, scroller.
      2. Cliquer sur le lien "Voir mes projets".
      3. Vérifier la console.
    Expected Result: Pas d'erreur liée à ScrollTrigger tentant d'accéder à des éléments détruits.
    Evidence: .omo/evidence/task-4-navigation.png
  ```

  **Commit**: YES
  - Message: `feat: integrate GSAP ScrollTrigger and CyberScene`

---

## Final Verification Wave