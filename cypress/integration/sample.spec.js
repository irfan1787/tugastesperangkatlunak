/// <reference types="cypress" />

describe('User Melakukan Proses Login Pada Siakad', () => {
    it('Cek menuju halaman siakad', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.url().should('eq', 'http://siakad.polinema.ac.id/')
    });

    it('Cek login tanpa memasukan username', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });

    it('Cek login tanpa memasukan password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('irfan')
        cy.get('.btn-success').click()
        cy.contains('Password harus diisi')
    });

    it('Cek login dengan mengisi username tidak sesuai', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('12345')
        cy.get('#password').type('abcd')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });

    it('Cek login dengan mengisi password tidak sesuai', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710110')
        cy.get('#password').type('123')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });

    it('Cek login dengan mengisi username & password sesuai', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710110')
        cy.get('#password').type('idp12345')
        cy.get('.btn-success').click()
        cy.url().should('eq', 'http://siakad.polinema.ac.id/beranda')
    });

    it('Cek menampilkan password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710110')
        cy.get('#password').type('aku123')
        cy.get('#uniform-chk_tampilkan').click()
    });
});