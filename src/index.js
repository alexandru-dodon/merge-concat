/*
 |------------------------------------------------------
 | Merge Concat
 |------------------------------------------------------
 |
 | Merges the passed in objects recursively while
 | concatenating internal arrays.
 |
 | NOTE: the process is completely functional, so it
 | does not mutate any of the passed arguments.
 |
 */
const isArray = Array.isArray
const isObject = object => Object.prototype.toString.call(object) === '[object Object]'

/**
 * We're abstracting out Array.prototype.concat
 * into a separate function, so that we could
 * easily give default values to the args.
 */
const concatArrays = (array1 = [], array2 = []) => {
  return array1.concat(array2)
}

/**
 * Checks each key on the source and takes
 * the appropriate merging action.
 *
 * @param {Object} target - The object to merge into
 * @param {Object} source - The object to merge from
 */
const mergeObjectAttributes = (target, source) => {
  Object.keys(source).forEach(key => {
    if (isArray(source[key])) {
      /**
       * Arrays need to be merged.
       */
      target[key] = concatArrays(target[key], source[key])
      return
    }

    if (isObject(source[key])) {
      /**
       * Objects need a recursive call.
       */
      target[key] = mergeConcat(target[key], source[key])
      return
    }

    /**
     * No special handling necesary in
     * all other scenarios.
     */
    target[key] = source[key]
  })
}

/**
 * Merges the passed in objects recursively
 * while concatenating internal arrays.
 *
 * @param {...Object} objects - One or more objects that should be merged
 * with latter taking precedence
 *
 * @return {Object} Merged object with concatenated internal arrays
 */
const mergeConcat = (...objects) => {
  return objects.reduce((target, source) => {
    /**
     * Normalize the source into an object
     * if it's of a different type.
     */
    if (!isObject(source)) {
      source = {}
    }

    /**
     * This procedure is not functional. It has
     * the side-effect of mutating the object
     * referenced by the accumulatorObject
     * argument.
     */
    mergeObjectAttributes(target, source)

    return target
  }, {} /* Start with an empty object */)
}

export default mergeConcat

if (typeof window !== 'undefined') {
  window.mergeConcat = mergeConcat
}
