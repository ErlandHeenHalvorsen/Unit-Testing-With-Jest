# Unit Testing

TDD er en utviklingsmetode der testene skrives før den faktiske koden.

 <!-------->

Prinsippet bak TDD er å skrive korte, konsise tester som definerer hvordan koden skal fungere, før du skriver et minimum av kode for å oppnå det ønskede resultatet.

Det er tre steg:

- Rød: Skriv en test for en spesifikk funksjonalitet.
- Grønn: Skriv minimum av kode som trengs for at testen skal passere.
- Refactor: Refaktorer koden for å forbedre den, samtidig som du sørger for at den fortsatt består testen.

Fordeler:

- Fører ofte til renere og mer oversiktlig kode.
- Færre feil (bugs) da koden kontinuerlig testes under utvikling.
- Refaktorering blir enklere fordi testene fungerer som et sikkerhetsnett.

## Type tester:

### Unit Testing

- Tester individuelle komponenter, funksjoner eller metoder for å sikre at de fungerer som forventet isolert fra resten av systemet.
- Hver test fokuserer på en enkelt 'enhet' med kode, for eksempel en funksjon eller metode i en klasse.

#### Eksempler på verktøy:

- Jest: Populært testverktøy for JavaScript, særlig brukt i React og Vue.
- Mocha + Chai: Mocha er en testkjører, mens Chai er et assertions-bibliotek som ofte brukes i unit-tester.

### Integrasjonstesting

- Tester hvordan forskjellige komponenter fungerer sammen.

#### Verktøy:

- Jest + Testing Library (React Testing Library / Vue Testing Library): Simulerer brukerinteraksjoner og tester samspillet mellom komponenter.
- Cypress: Ofte brukt til ende-til-ende (E2E) testing, men kan også brukes til integrasjonstesting av frontend-kode.

### End-to-End Testing (E2E)

- Tester hele brukerflyten fra start til slutt for å sikre at applikasjonen fungerer som en helhet.

#### Verktøy:

- Cypress: Et populært verktøy for E2E-testing, kjent for enkel oppsett og sanntidsinteraksjon i nettleseren.
- Playwright: Automatiserer nettleserinteraksjoner, nyttig for E2E-tester.
- Puppeteer: Automatiserer nettlesere gjennom Chrome DevTools-protokollen, ofte brukt til E2E-tester.

### Komponenttesting

Spesielt relevant for komponentbaserte rammeverk som React eller Vue, hvor spesifikke UI-komponenter testes.
Fokuserer på både det visuelle utseendet og oppførselen til en komponent.

#### Eksempler på verktøy:

- Vue Test Utils
- React Testing Library

### Snapshot Testing

- Tar "snapshots" av komponenter, som senere kan brukes til å sammenligne med nye versjoner for å oppdage utilsiktede endringer.

### Visuell regresjonstesting

- Sørger for at visuelle endringer i brukergrensesnittet ikke fører til feil (visuelle bugs).

#### Eksempler på verktøy:

- Chromatic (for Storybook)
- BackstopJS: Automatiserer visuelle sammenligninger ved hjelp av skjermbilder.

### Behavioral/Acceptance Testing (BDD)

- BDD fokuserer på brukerens oppførsel og funksjonelle krav for å sikre at applikasjonen oppfyller forventningene.
