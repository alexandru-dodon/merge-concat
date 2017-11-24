import mergeConcat from './'

describe('Merge Concat', () => {
  test('It returns a deeply merged object with concatenated internal arrays', () => {
    expect(mergeConcat(
      {
        a: {
          b: 0
        },
        d: [ 'z' ]
      },
      {
        a: {
          b: 1,
          c: 2,
          e: [ 'x', 'y' ]
        }
      },
      {
        a: {
          c: 3,
          e: [ 'u' ]
        },
        d: [ 'v' ]
      }
    )).toMatchObject({
      a: {
        b: 1,
        c: 3,
        e: [ 'x', 'y', 'u' ]
      },
      d: [ 'z', 'v' ]
    })
  })

  test('It converts all non-objects to empty objects', () => {
    expect(Object.keys(mergeConcat(undefined)).length).toBe(0)
    expect(Object.keys(mergeConcat(230, undefined, 'String')).length).toBe(0)
  })

  test('It ignores non-objects and continues to merge all valid ones', () => {
    expect(mergeConcat(
      {
        a: 2,
        b: {
          c: 4
        }
      },
      null,
      {
        b: {
          c: 6
        }
      },
      undefined,
      {
        a: 8
      },
      'String',
      ['array']
    )).toMatchObject({
      a: 8,
      b: {
        c: 6
      }
    })
  })
})
