// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('good phone number 1', () => {
    expect(functions.isPhoneNumber('619-555-5555')).toBe(true);
});
test('good phone number 2', () => {
    expect(functions.isPhoneNumber('619-555-5255')).toBe(true);
});

test('bad phone number 1', () => {
    expect(functions.isPhoneNumber('619-555-555')).toBe(false);
});

test('bad phone number 2', () => {
    expect(functions.isPhoneNumber('619-55-525')).toBe(false);
});




test('good email 1', () => {
    expect(functions.isEmail("goodemail@gmail.com")).toBe(true);
});
test('good email 2', () => {
    expect(functions.isEmail("goodemail@hotmail.com")).toBe(true);
});
test('bad email 1', () => {
    expect(functions.isEmail("goodemailgmail.com")).toBe(false);
});
test('bad email 2', () => {
    expect(functions.isEmail("goodemail@hotmail.")).toBe(false);
});


test('good date 1', () => {
    expect(functions.isDate("02/20/2020")).toBe(true);
});
test('good date 2', () => {
    expect(functions.isDate("02/02/2022")).toBe(true);
});
test('bad date 1', () => {
    expect(functions.isDate("02/20-20")).toBe(false);
});
test('bad date 2', () => {
    expect(functions.isDate("02-30-2050")).toBe(false);
});


test('strong password 1', () => {
    expect(functions.isStrongPassword("g4321")).toBe(true);
});
test('strong password 2', () => {
    expect(functions.isStrongPassword("g432145")).toBe(true);
});
test('bad password 1', () => {
    expect(functions.isStrongPassword("243214")).toBe(false);
});
test('bad password 2', () => {
    expect(functions.isStrongPassword("33214")).toBe(false);
});




test('good HEXColor for HTML 1', () => {
    expect(functions.isHexColor("#FF6666")).toBe(true);
});
test('good HEXColor for HTML 2', () => {
    expect(functions.isHexColor("#FFE6E6")).toBe(true);
});
test('bad HEXColor for HTML 1', () => {
    expect(functions.isHexColor("24")).toBe(false);
});
test('bad HEXColor for HTML 2', () => {
    expect(functions.isHexColor("#")).toBe(false);
});