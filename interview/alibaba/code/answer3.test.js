import { flatten } from './answer3'

test('test1', () => {
    expect(flatten({
        a: 1,
        b: [1, 2, {c : true}, [3]],
        d: {e: 2, f: 3},
        g: null
    })).toEqual({
        "a": 1,
        "b[0]": 1,
        "b[1]": 2,
        "b[2].c": true,
        "b[3][0]": 3,
        "d.e": 2,
        "d.f": 3,
    })
})

test('test2', () => {
    expect(flatten([1,2])).toEqual({
        '0': 1,
        '1': 2
    })
})



