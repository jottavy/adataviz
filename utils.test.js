// Tests unitaires pour les fonctions utilitaires

import { describe, it, expect } from 'vitest';

import { texteCompteur, creerCarte, formaterNom, formaterAnim, formaterArr, formaterProprio } from './utils.js';

describe("formaterNom", () => {
  it("retourne le nom formaté avec la première lettre en majuscule", () => {
    expect(formaterNom("BALEINE VERTE")).toBe("Baleine Verte")
  })
  it("retourne le nom formaté avec la première lettre en majuscule", () => {
    expect(formaterNom("Baleine verte")).toBe("Baleine Verte")
  })
  it(`retourne "Nom manquant" quand le nom est vide`, () => {
    expect(formaterNom("")).toBe("Nom manquant")
  })
})
