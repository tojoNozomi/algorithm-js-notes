import { count,combine, countOfLetters } from './answer1'

test('test1', () => {
    expect(count('AB3')).toEqual({
        A: 1,
        B: 3
    })
    expect(count('A2B')).toEqual({
        A: 2,
        B: 1
    })
    expect(count('A2-2C3', {D: 1})).toEqual({
        A: 2,
        D: 2,
        C: 3
    })
})

test('test2', () => {
    expect(combine({A: 1, B: 2}, {B: 2, C: 3})).toEqual({
        A: 1,
        B: 4,
        C: 3
    })
})

test('test3', () => {
    expect(countOfLetters('A(A3B)2')).toEqual({
        A: 7,
        B: 2
    })
})

test('test4', () => {
    expect(countOfLetters('C4(A(A3B)2)2')).toEqual({
        A: 14,
        B: 4,
        C: 4
    })
})

test('test5', () => {
    expect(countOfLetters('A12C42')).toEqual({
        A: 12,
        C: 42
    })
})
